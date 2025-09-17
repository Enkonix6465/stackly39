import { NextApiRequest, NextApiResponse } from 'next';
import { loadData, validateData } from '@/lib/dataService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Test data loading
    const data = loadData();
    
    // Validate data structure
    const validation = validateData(data);
    
    // Basic health check
    const healthStatus = {
      status: validation.isValid ? 'healthy' : 'degraded',
      timestamp: new Date().toISOString(),
      data: {
        usersCount: data.users.length,
        adminRequestsCount: data.adminRequests.length,
        hasCurrentUser: !!data.currentUser,
        lastUpdated: data.lastUpdated
      },
      validation: {
        isValid: validation.isValid,
        errors: validation.errors
      }
    };
    
    res.status(validation.isValid ? 200 : 206).json(healthStatus);
  } catch (error) {
    console.error('Health check failed:', error);
    
    res.status(500).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Data service is not functioning properly'
    });
  }
}
