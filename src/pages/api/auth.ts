import { NextApiRequest, NextApiResponse } from 'next';
import { 
  authenticateUser, 
  setCurrentUser, 
  getCurrentUser,
  updateUserActivity,
  User
} from '@/lib/dataService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    switch (method) {
      case 'POST':
        // Login user
        const { email, password } = req.body;
        
        if (!email || !password) {
          return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = authenticateUser(email, password);
        if (user) {
          setCurrentUser(user);
          updateUserActivity(email, 'login');
          res.status(200).json({ 
            message: 'Login successful', 
            user: {
              role: user.role,
              username: user.username,
              email: user.email,
              mobile: user.mobile
            }
          });
        } else {
          res.status(401).json({ message: 'Invalid email or password' });
        }
        break;

      case 'GET':
        // Get current user session
        const currentUser = getCurrentUser();
        if (currentUser) {
          res.status(200).json({ 
            user: {
              role: currentUser.role,
              username: currentUser.username,
              email: currentUser.email,
              mobile: currentUser.mobile
            }
          });
        } else {
          res.status(401).json({ message: 'No active session' });
        }
        break;

      case 'DELETE':
        // Logout user
        const { email: logoutEmail } = req.query;
        if (logoutEmail) {
          updateUserActivity(logoutEmail as string, 'logout');
        }
        setCurrentUser(null);
        res.status(200).json({ message: 'Logout successful' });
        break;

      default:
        res.setHeader('Allow', ['POST', 'GET', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('Auth API Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
