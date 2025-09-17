import fs from 'fs';
import path from 'path';

// Define the data structure
export interface User {
  role: string;
  username: string;
  email: string;
  mobile: string;
  password: string;
  loginTime?: string;
  logoutTime?: string;
  lastActive?: string;
  createdAt: string;
  updatedAt: string;
  isApproved?: boolean; // For admin approval
  approvalDate?: string; // When admin was approved
  approvedBy?: string; // Who approved the admin
}

export interface AdminRequest {
  id: string;
  role: string;
  username: string;
  email: string;
  mobile: string;
  password: string;
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
  approvalDate?: string;
  approvedBy?: string;
  rejectionReason?: string;
}

export interface AppData {
  users: User[];
  adminRequests: AdminRequest[];
  currentUser: User | null;
  lastUpdated: string;
}

// Path to the data file
const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'app-data.json');

// Ensure data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.dirname(DATA_FILE_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Initialize default data
const getDefaultData = (): AppData => ({
  users: [
    {
      role: 'admin',
      username: 'admin',
      email: 'admin@enkonix.in',
      mobile: '1234567890',
      password: 'admin123',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isApproved: true,
      approvalDate: new Date().toISOString(),
      approvedBy: 'system'
    }
  ],
  adminRequests: [],
  currentUser: null,
  lastUpdated: new Date().toISOString()
});

// Load data from JSON file
export const loadData = (): AppData => {
  try {
    ensureDataDirectory();
    
    if (!fs.existsSync(DATA_FILE_PATH)) {
      // Create default data file if it doesn't exist
      const defaultData = getDefaultData();
      saveData(defaultData);
      return defaultData;
    }
    
    const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
    
    // Check if file is empty or invalid
    if (!fileContent.trim()) {
      console.warn('Data file is empty, creating default data');
      const defaultData = getDefaultData();
      saveData(defaultData);
      return defaultData;
    }
    
    const data: AppData = JSON.parse(fileContent);
    
    // Validate data structure
    if (!data || typeof data !== 'object') {
      console.warn('Invalid data structure, creating default data');
      const defaultData = getDefaultData();
      saveData(defaultData);
      return defaultData;
    }
    
    // Ensure all required fields exist with proper types
    const users = Array.isArray(data.users) ? data.users : [];
    const adminRequests = Array.isArray(data.adminRequests) ? data.adminRequests : [];
    
    // Check if default admin user exists, if not add it
    const hasDefaultAdmin = users.some(user => 
      user.email === 'admin@gmail.com' && user.role === 'admin'
    );
    
    if (!hasDefaultAdmin) {
      const defaultAdmin: User = {
        role: 'admin',
        username: 'admin',
        email: 'admin@gmail.com',
        mobile: '1234567890',
        password: 'adminn',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isApproved: true,
        approvalDate: new Date().toISOString(),
        approvedBy: 'system'
      };
      users.push(defaultAdmin);
      
      // Save the updated data
      const updatedData = {
        users,
        adminRequests,
        currentUser: data.currentUser || null,
        lastUpdated: new Date().toISOString()
      };
      saveData(updatedData);
      return updatedData;
    }
    
    return {
      users,
      adminRequests,
      currentUser: data.currentUser || null,
      lastUpdated: data.lastUpdated || new Date().toISOString()
    };
  } catch (error) {
    console.error('Error loading data:', error);
    
    // Try to create a backup of the corrupted file
    try {
      if (fs.existsSync(DATA_FILE_PATH)) {
        const backupPath = `${DATA_FILE_PATH}.backup.${Date.now()}`;
        fs.copyFileSync(DATA_FILE_PATH, backupPath);
        console.log(`Created backup of corrupted data file: ${backupPath}`);
      }
    } catch (backupError) {
      console.error('Failed to create backup:', backupError);
    }
    
    // Return default data and try to save it
    const defaultData = getDefaultData();
    try {
      saveData(defaultData);
    } catch (saveError) {
      console.error('Failed to save default data:', saveError);
    }
    
    return defaultData;
  }
};

// Save data to JSON file
export const saveData = (data: AppData): void => {
  try {
    ensureDataDirectory();
    
    // Validate data before saving
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data object provided for saving');
    }
    
    const dataToSave = {
      users: Array.isArray(data.users) ? data.users : [],
      adminRequests: Array.isArray(data.adminRequests) ? data.adminRequests : [],
      currentUser: data.currentUser || null,
      lastUpdated: new Date().toISOString()
    };
    
    // Write to a temporary file first, then rename to avoid corruption
    const tempPath = `${DATA_FILE_PATH}.tmp.${Date.now()}`;
    fs.writeFileSync(tempPath, JSON.stringify(dataToSave, null, 2), 'utf-8');
    
    // Verify the written file is valid JSON
    const writtenContent = fs.readFileSync(tempPath, 'utf-8');
    JSON.parse(writtenContent); // This will throw if invalid
    
    // If valid, replace the original file
    fs.renameSync(tempPath, DATA_FILE_PATH);
    
  } catch (error) {
    console.error('Error saving data:', error);
    
    // Clean up temporary file if it exists
    try {
      const tempFiles = fs.readdirSync(path.dirname(DATA_FILE_PATH))
        .filter(file => file.startsWith(path.basename(DATA_FILE_PATH) + '.tmp.'));
      tempFiles.forEach(file => {
        fs.unlinkSync(path.join(path.dirname(DATA_FILE_PATH), file));
      });
    } catch (cleanupError) {
      console.error('Error cleaning up temporary files:', cleanupError);
    }
    
    throw error; // Re-throw to let the caller handle it
  }
};

// User management functions
export const getAllUsers = (): User[] => {
  const data = loadData();
  return data.users;
};

export const getApprovedUsers = (): User[] => {
  const data = loadData();
  return data.users.filter(user => user.role === 'user' || (user.role === 'admin' && user.isApproved));
};

export const getPendingAdminRequests = (): AdminRequest[] => {
  const data = loadData();
  return data.adminRequests.filter(request => request.status === 'pending');
};

export const getAllAdminRequests = (): AdminRequest[] => {
  const data = loadData();
  return data.adminRequests;
};

export const saveUser = (user: User): void => {
  const data = loadData();
  const existingUserIndex = data.users.findIndex(u => u.email === user.email);
  
  // Single admin policy: Check if trying to create a new admin when one already exists
  if (user.role === 'admin' && existingUserIndex === -1) {
    const existingAdmin = data.users.find(u => u.role === 'admin' && u.isApproved);
    if (existingAdmin) {
      throw new Error('Only one admin user is allowed. An admin already exists.');
    }
  }
  
  if (existingUserIndex >= 0) {
    // Update existing user
    data.users[existingUserIndex] = {
      ...user,
      updatedAt: new Date().toISOString()
    };
  } else {
    // Add new user
    const newUser: User = {
      ...user,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    data.users.push(newUser);
  }
  
  saveData(data);
};

export const createAdminRequest = (requestData: Omit<AdminRequest, 'id' | 'createdAt' | 'status'>): AdminRequest => {
  // Single admin policy: No new admin requests allowed
  throw new Error('Admin requests are not allowed. Only one admin user is permitted.');
};

export const approveAdminRequest = (requestId: string, approvedBy: string): boolean => {
  // Single admin policy: No new admin requests can be approved
  return false;
};

export const rejectAdminRequest = (requestId: string, rejectedBy: string, reason: string): boolean => {
  const data = loadData();
  const requestIndex = data.adminRequests.findIndex(req => req.id === requestId);
  
  if (requestIndex === -1) return false;
  
  data.adminRequests[requestIndex] = {
    ...data.adminRequests[requestIndex],
    status: 'rejected',
    approvalDate: new Date().toISOString(),
    approvedBy: rejectedBy,
    rejectionReason: reason
  };
  
  saveData(data);
  return true;
};

export const deleteUser = (email: string): void => {
  const data = loadData();
  data.users = data.users.filter(u => u.email !== email);
  saveData(data);
};

export const getUserByEmail = (email: string): User | undefined => {
  const data = loadData();
  return data.users.find(u => u.email === email);
};

export const authenticateUser = (email: string, password: string): User | null => {
  const user = getUserByEmail(email);
  if (user && user.password === password) {
    // Check if admin is approved
    if (user.role === 'admin' && !user.isApproved) {
      return null; // Admin not approved yet
    }
    
    // Update login time
    const updatedUser = {
      ...user,
      loginTime: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    saveUser(updatedUser);
    return updatedUser;
  }
  return null;
};

export const setCurrentUser = (user: User | null): void => {
  const data = loadData();
  data.currentUser = user;
  saveData(data);
};

export const getCurrentUser = (): User | null => {
  const data = loadData();
  return data.currentUser;
};

export const getSingleAdmin = (): User | null => {
  const data = loadData();
  return data.users.find(u => u.role === 'admin' && u.isApproved) || null;
};

export const updateUserActivity = (email: string, activity: 'login' | 'logout'): void => {
  const user = getUserByEmail(email);
  if (user) {
    const updatedUser = {
      ...user,
      [activity === 'login' ? 'loginTime' : 'logoutTime']: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    saveUser(updatedUser);
  }
};

export const updateUserPassword = (email: string, newPassword: string): boolean => {
  const user = getUserByEmail(email);
  if (user) {
    const updatedUser = {
      ...user,
      password: newPassword,
      updatedAt: new Date().toISOString()
    };
    saveUser(updatedUser);
    return true;
  }
  return false;
};

// Helper function to generate unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Data validation function
export const validateData = (data: any): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!data || typeof data !== 'object') {
    errors.push('Data is not an object');
    return { isValid: false, errors };
  }
  
  if (!Array.isArray(data.users)) {
    errors.push('Users field is not an array');
  }
  
  if (!Array.isArray(data.adminRequests)) {
    errors.push('AdminRequests field is not an array');
  }
  
  // Validate user objects
  if (Array.isArray(data.users)) {
    data.users.forEach((user: any, index: number) => {
      if (!user || typeof user !== 'object') {
        errors.push(`User at index ${index} is not an object`);
        return;
      }
      
      const requiredFields = ['role', 'username', 'email', 'mobile', 'password'];
      requiredFields.forEach(field => {
        if (!user[field] || typeof user[field] !== 'string') {
          errors.push(`User at index ${index} missing or invalid ${field}`);
        }
      });
    });
  }
  
  // Validate admin request objects
  if (Array.isArray(data.adminRequests)) {
    data.adminRequests.forEach((request: any, index: number) => {
      if (!request || typeof request !== 'object') {
        errors.push(`AdminRequest at index ${index} is not an object`);
        return;
      }
      
      const requiredFields = ['id', 'role', 'username', 'email', 'mobile', 'password', 'createdAt', 'status'];
      requiredFields.forEach(field => {
        if (!request[field] || typeof request[field] !== 'string') {
          errors.push(`AdminRequest at index ${index} missing or invalid ${field}`);
        }
      });
      
      if (!['pending', 'approved', 'rejected'].includes(request.status)) {
        errors.push(`AdminRequest at index ${index} has invalid status: ${request.status}`);
      }
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Data repair function
export const repairData = (): { success: boolean; message: string } => {
  try {
    const data = loadData();
    const validation = validateData(data);
    
    if (validation.isValid) {
      return { success: true, message: 'Data is already valid' };
    }
    
    // Try to repair the data
    const repairedData: AppData = {
      users: Array.isArray(data.users) ? data.users.filter(user => 
        user && typeof user === 'object' && 
        user.role && user.username && user.email && user.mobile && user.password
      ) : [],
      adminRequests: Array.isArray(data.adminRequests) ? data.adminRequests.filter(request => 
        request && typeof request === 'object' && 
        request.id && request.role && request.username && request.email && 
        request.mobile && request.password && request.createdAt && request.status
      ) : [],
      currentUser: data.currentUser || null,
      lastUpdated: new Date().toISOString()
    };
    
    // Save the repaired data
    saveData(repairedData);
    
    return { 
      success: true, 
      message: `Data repaired successfully. Removed ${data.users.length - repairedData.users.length} invalid users and ${data.adminRequests.length - repairedData.adminRequests.length} invalid admin requests.` 
    };
  } catch (error) {
    console.error('Error repairing data:', error);
    return { 
      success: false, 
      message: `Failed to repair data: ${error instanceof Error ? error.message : 'Unknown error'}` 
    };
  }
};

// Export the data file path for reference
export const getDataFilePath = (): string => DATA_FILE_PATH;
