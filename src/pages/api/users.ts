import { NextApiRequest, NextApiResponse } from 'next';
import { 
  getAllUsers, 
  getApprovedUsers,
  getPendingAdminRequests,
  getAllAdminRequests,
  saveUser, 
  deleteUser, 
  getUserByEmail,
  createAdminRequest,
  approveAdminRequest,
  rejectAdminRequest,
  authenticateUser,
  setCurrentUser,
  getCurrentUser,
  updateUserActivity,
  User,
  AdminRequest
} from '@/lib/dataService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    switch (method) {
      case 'GET':
        // Get all users, approved users, or specific user
        const { email, type } = req.query;
        
        if (email) {
          const user = getUserByEmail(email as string);
          if (user) {
            res.status(200).json(user);
          } else {
            res.status(404).json({ message: 'User not found' });
          }
        } else if (type === 'approved') {
          try {
            const users = getApprovedUsers();
            res.status(200).json(users);
          } catch (error) {
            console.error('Error getting approved users:', error);
            res.status(500).json({ message: 'Failed to load approved users' });
          }
        } else if (type === 'admin-requests') {
          try {
            const requests = getAllAdminRequests();
            res.status(200).json(requests);
          } catch (error) {
            console.error('Error getting admin requests:', error);
            res.status(500).json({ message: 'Failed to load admin requests' });
          }
        } else if (type === 'pending-admin') {
          try {
            const requests = getPendingAdminRequests();
            res.status(200).json(requests);
          } catch (error) {
            console.error('Error getting pending admin requests:', error);
            res.status(500).json({ message: 'Failed to load pending admin requests' });
          }
        } else {
          try {
            const users = getAllUsers();
            res.status(200).json(users);
          } catch (error) {
            console.error('Error getting all users:', error);
            res.status(500).json({ message: 'Failed to load users' });
          }
        }
        break;

      case 'POST':
        // Create or update user, or create admin request
        const { action } = req.query;
        
        if (action === 'admin-request') {
          // Single admin policy: Admin requests are not allowed
          res.status(403).json({ 
            message: 'Admin requests are not allowed. Only one admin user is permitted.' 
          });
        } else {
          // Create or update regular user
          const userData: User = req.body;
          try {
            saveUser(userData);
            res.status(200).json({ message: 'User saved successfully', user: userData });
          } catch (error) {
            res.status(400).json({ 
              message: error instanceof Error ? error.message : 'Failed to save user' 
            });
          }
        }
        break;

      case 'PUT':
        // Update user or handle admin request approval/rejection
        const { action: putAction } = req.query;
        
        if (putAction === 'approve-admin') {
          // Single admin policy: Admin requests cannot be approved
          res.status(403).json({ message: 'Admin requests are not allowed. Only one admin user is permitted.' });
        } else if (putAction === 'reject-admin') {
          // Single admin policy: Admin requests cannot be rejected (they don't exist)
          res.status(403).json({ message: 'Admin requests are not allowed. Only one admin user is permitted.' });
        } else {
          // Update regular user
          const updateData: User = req.body;
          try {
            saveUser(updateData);
            res.status(200).json({ message: 'User updated successfully', user: updateData });
          } catch (error) {
            res.status(400).json({ 
              message: error instanceof Error ? error.message : 'Failed to update user' 
            });
          }
        }
        break;

      case 'DELETE':
        // Delete user
        const { email: deleteEmail } = req.query;
        if (deleteEmail) {
          deleteUser(deleteEmail as string);
          res.status(200).json({ message: 'User deleted successfully' });
        } else {
          res.status(400).json({ message: 'Email is required for deletion' });
        }
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Internal server error'});
  }
}
