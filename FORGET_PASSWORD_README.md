# Forget Password Functionality

This document describes the forget password functionality implemented in the ShopEase application.

## Overview

The forget password feature allows users to reset their password by providing their email address and a new password. The system includes security measures and validation to ensure a secure password reset process.

## Features

### 1. User Interface

- **Forget Password Form**: Accessible from the login page
- **Email Input**: User enters their registered email address
- **New Password Input**: User enters a new password (minimum 6 characters)
- **Confirm Password Input**: User confirms the new password
- **Real-time Validation**: Visual feedback for password strength and matching

### 2. Security Features

- **Rate Limiting**: Maximum 5 attempts per email within 15 minutes
- **Password Validation**: Minimum 6 characters required
- **Password Confirmation**: Must match the new password
- **Email Validation**: Basic email format validation
- **Security Through Obscurity**: Doesn't reveal if an email exists or not

### 3. API Endpoint

- **Route**: `/api/reset-password`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "newPassword": "newpassword123",
    "confirmPassword": "newpassword123"
  }
  ```

## Implementation Details

### Frontend Components

- **Auth Page** (`src/pages/auth.tsx`): Contains the forget password form
- **State Management**: Uses React state to manage form data and validation
- **Form Validation**: Client-side validation for immediate user feedback

### Backend API

- **Reset Password API** (`src/pages/api/reset-password.ts`): Handles password reset requests
- **Data Service** (`src/lib/dataService.ts`): Contains the `updateUserPassword` function
- **Rate Limiting**: In-memory rate limiting (consider Redis for production)

### Data Flow

1. User clicks "Forgot your password?" on login page
2. User fills out the forget password form
3. Client-side validation occurs
4. API request is sent to `/api/reset-password`
5. Server validates input and checks rate limits
6. Password is updated in the database
7. Success message is shown to user

## Security Considerations

### Current Implementation

- Rate limiting prevents brute force attacks
- Password validation ensures minimum security requirements
- Email format validation prevents malformed requests
- No information disclosure about existing accounts

### Production Recommendations

- Use Redis or similar for rate limiting across multiple server instances
- Implement email verification before password reset
- Add CAPTCHA for additional bot protection
- Use HTTPS for all communications
- Consider implementing password history to prevent reuse
- Add logging for security monitoring

## Usage

### For Users

1. Navigate to the login page
2. Click "Forgot your password?"
3. Enter your email address
4. Enter a new password (minimum 6 characters)
5. Confirm the new password
6. Click "Reset Password"
7. Return to login and use your new password

### For Developers

The forget password functionality is fully integrated into the existing authentication system. No additional setup is required beyond the standard application dependencies.

## Error Handling

The system handles various error scenarios:

- Invalid email format
- Password too short
- Passwords don't match
- Rate limit exceeded
- Server errors
- User not found (without revealing existence)

## Testing

To test the functionality:

1. Start the development server: `npm run dev`
2. Navigate to the authentication page
3. Click "Forgot your password?"
4. Test various scenarios including:
   - Valid password reset
   - Invalid email format
   - Short passwords
   - Mismatched passwords
   - Rate limiting

## Future Enhancements

Potential improvements for the forget password system:

- Email verification tokens
- Password strength indicators
- Two-factor authentication integration
- Password expiration policies
- Account lockout after failed attempts
- SMS verification as backup
