import { NextApiRequest, NextApiResponse } from 'next';
import { getUserByEmail, updateUserPassword } from '@/lib/dataService';

// Simple in-memory rate limiting (in production, use Redis or similar)
const resetAttempts = new Map<string, { count: number; lastAttempt: number }>();
const MAX_ATTEMPTS = 5;
const RESET_WINDOW = 15 * 60 * 1000; // 15 minutes

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    switch (method) {
      case 'POST':
        const { email, newPassword, confirmPassword } = req.body;
        
        // Validate input
        if (!email || !newPassword || !confirmPassword) {
          return res.status(400).json({ 
            message: 'Email, new password, and confirm password are required' 
          });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return res.status(400).json({ 
            message: 'Please enter a valid email address' 
          });
        }

        // Check if passwords match
        if (newPassword !== confirmPassword) {
          return res.status(400).json({ 
            message: 'New password and confirm password do not match' 
          });
        }

        // Validate password strength (minimum 6 characters)
        if (newPassword.length < 6) {
          return res.status(400).json({ 
            message: 'Password must be at least 6 characters long' 
          });
        }

        // Rate limiting check
        const now = Date.now();
        const userAttempts = resetAttempts.get(email);
        
        if (userAttempts) {
          if (now - userAttempts.lastAttempt < RESET_WINDOW) {
            if (userAttempts.count >= MAX_ATTEMPTS) {
              return res.status(429).json({ 
                message: 'Too many password reset attempts. Please try again later.' 
              });
            }
          } else {
            // Reset window expired, start fresh
            resetAttempts.delete(email);
          }
        }

        // Check if user exists
        const user = getUserByEmail(email);
        if (!user) {
          // Don't reveal if user exists or not for security
          return res.status(200).json({ 
            message: 'If an account with this email exists, a password reset has been processed.' 
          });
        }

        // Check if new password is different from current password
        if (user.password === newPassword) {
          return res.status(400).json({ 
            message: 'New password must be different from your current password' 
          });
        }

        // Update user password
        const passwordUpdated = updateUserPassword(email, newPassword);
        
        if (!passwordUpdated) {
          return res.status(500).json({ 
            message: 'Failed to update password. Please try again.' 
          });
        }

        // Update rate limiting
        if (resetAttempts.has(email)) {
          resetAttempts.set(email, { 
            count: (resetAttempts.get(email)?.count || 0) + 1, 
            lastAttempt: now 
          });
        } else {
          resetAttempts.set(email, { count: 1, lastAttempt: now });
        }

        res.status(200).json({ 
          message: 'Password reset successful! You can now login with your new password.' 
        });
        break;

      default:
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Password Reset API Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
