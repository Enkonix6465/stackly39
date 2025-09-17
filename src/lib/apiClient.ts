import { User, AdminRequest } from './dataService';

// API base URL
const API_BASE = '/api';

// Generic API request function with improved error handling and retry logic
const apiRequest = async (endpoint: string, options: RequestInit = {}, retries: number = 2): Promise<any> => {
  const makeRequest = async (): Promise<Response> => {
    return fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
  };

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await makeRequest();

      if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`;
        
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (parseError) {
          // If response is not JSON, use status text or default message
          errorMessage = response.statusText || errorMessage;
        }
        
        // Don't retry on client errors (4xx) or server errors (5xx) except 500
        if (response.status >= 400 && response.status < 500) {
          throw new Error(errorMessage);
        }
        
        // Retry on server errors (5xx) or network issues
        if (attempt === retries) {
          throw new Error(errorMessage);
        }
        
        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        continue;
      }

      // Check if response has content before trying to parse JSON
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      } else {
        // Return empty object for non-JSON responses
        return {};
      }
    } catch (error) {
      // Handle different types of errors
      if (error instanceof TypeError && error.message.includes('fetch')) {
        if (attempt === retries) {
          throw new Error('Network connection failed. Please check your internet connection and try again.');
        }
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        continue;
      } else if (error instanceof SyntaxError) {
        throw new Error('Invalid response format received from server.');
      } else if (error instanceof Error) {
        // If it's our custom error, don't retry
        if (error.message.includes('HTTP error!') || error.message.includes('Network connection failed')) {
          if (attempt === retries) {
            throw error;
          }
          // Wait before retrying
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
          continue;
        }
        throw error; // Re-throw other custom errors
      } else {
        throw new Error('An unexpected error occurred while making the request.');
      }
    }
  }
};

// User management API calls
export const userAPI = {
  // Get all users
  getAll: async (): Promise<User[]> => {
    return apiRequest('/users');
  },

  // Get approved users only
  getApproved: async (): Promise<User[]> => {
    return apiRequest('/users?type=approved');
  },

  // Get user by email
  getByEmail: async (email: string): Promise<User> => {
    return apiRequest(`/users?email=${encodeURIComponent(email)}`);
  },

  // Create or update user
  save: async (user: User): Promise<{ message: string; user: User }> => {
    return apiRequest('/users', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  },

  // Update user
  update: async (user: User): Promise<{ message: string; user: User }> => {
    return apiRequest('/users', {
      method: 'PUT',
      body: JSON.stringify(user),
    });
  },

  // Delete user
  delete: async (email: string): Promise<{ message: string }> => {
    return apiRequest(`/users?email=${encodeURIComponent(email)}`, {
      method: 'DELETE',
    });
  },
};

// Admin request management API calls
export const adminRequestAPI = {
  // Get all admin requests
  getAll: async (): Promise<AdminRequest[]> => {
    return apiRequest('/users?type=admin-requests');
  },

  // Get pending admin requests
  getPending: async (): Promise<AdminRequest[]> => {
    return apiRequest('/users?type=pending-admin');
  },

  // Submit admin request
  submit: async (requestData: Omit<AdminRequest, 'id' | 'createdAt' | 'status'>): Promise<{ message: string; request: AdminRequest }> => {
    return apiRequest('/users?action=admin-request', {
      method: 'POST',
      body: JSON.stringify(requestData),
    });
  },

  // Approve admin request
  approve: async (requestId: string, approvedBy: string): Promise<{ message: string }> => {
    return apiRequest('/users?action=approve-admin', {
      method: 'PUT',
      body: JSON.stringify({ requestId, approvedBy }),
    });
  },

  // Reject admin request
  reject: async (requestId: string, rejectedBy: string, reason: string): Promise<{ message: string }> => {
    return apiRequest('/users?action=reject-admin', {
      method: 'PUT',
      body: JSON.stringify({ requestId, rejectedBy, reason }),
    });
  },
};

// Authentication API calls
export const authAPI = {
  // Login user
  login: async (email: string, password: string): Promise<{ message: string; user: User }> => {
    return apiRequest('/auth', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  // Get current user session
  getCurrentUser: async (): Promise<{ user: User }> => {
    return apiRequest('/auth');
  },

  // Logout user
  logout: async (email?: string): Promise<{ message: string }> => {
    const endpoint = email ? `/auth?email=${encodeURIComponent(email)}` : '/auth';
    return apiRequest(endpoint, {
      method: 'DELETE',
    });
  },
};

// Helper function to create a new user with timestamps
export const createNewUser = (userData: Omit<User, 'createdAt' | 'updatedAt' | 'loginTime' | 'logoutTime' | 'lastActive'>): User => {
  const now = new Date().toISOString();
  return {
    ...userData,
    createdAt: now,
    updatedAt: now,
    loginTime: now,
    logoutTime: '-',
    lastActive: now,
  };
};

// Helper function to create a new admin request
export const createNewAdminRequest = (requestData: Omit<AdminRequest, 'id' | 'createdAt' | 'status'>): Omit<AdminRequest, 'id' | 'createdAt' | 'status'> => {
  return requestData;
};

// Helper function to update user timestamps
export const updateUserTimestamps = (user: User, updates: Partial<User>): User => {
  return {
    ...user,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
};
