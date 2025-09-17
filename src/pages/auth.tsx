import React, { useState } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import AuthHeader from '@/components/AuthHeader';

interface User {
  role: string;
  username: string;
  email: string;
  mobile: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export default function Auth() {
  const { t } = useLanguage();
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgetPassword'>('login');
  const [formData, setFormData] = useState<User>({
    role: '',
    username: '',
    email: '',
    mobile: '',
    password: ''
  });
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });
  const [resetData, setResetData] = useState({
    email: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Single admin policy: All new registrations are users only
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          role: 'user', // Force all new users to be regular users
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          loginTime: new Date().toISOString(),
          logoutTime: '-',
          lastActive: new Date().toISOString()
        }),
      });

      if (response.ok) {
        alert(t('auth.registrationSuccessful'));
        setAuthMode('login');
        setFormData({ role: '', username: '', email: '', mobile: '', password: '' });
      } else {
        const error = await response.json();
        alert(error.message || t('auth.registrationFailed'));
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert(t('auth.registrationFailed'));
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const result = await response.json();
        if (typeof window !== 'undefined') {
          localStorage.setItem('currentUser', JSON.stringify(result.user));
          
          if (result.user.role === 'admin') {
            window.location.href = '/dashboard';
          } else {
            window.location.href = '/home1';
          }
        }
      } else {
        const error = await response.json();
        if (error.message === 'Invalid email or password') {
          alert(t('auth.invalidCredentials'));
        } else {
          alert(error.message || t('auth.loginFailed'));
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      alert(t('auth.loginFailed'));
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (resetData.newPassword.length < 6) {
      alert(t('auth.passwordTooShort'));
      return;
    }
    
    if (resetData.newPassword !== resetData.confirmPassword) {
      alert(t('auth.passwordsDontMatchAlert'));
      return;
    }
    
    setLoading(true);

    try {
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resetData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message || t('auth.passwordResetSuccessful'));
        setResetData({ email: '', newPassword: '', confirmPassword: '' });
        setAuthMode('login');
      } else {
        const error = await response.json();
        alert(error.message || t('auth.passwordResetFailed'));
      }
    } catch (error) {
      console.error('Password reset error:', error);
      alert(t('auth.passwordResetFailed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>{t('auth.pageTitle')}</title>
        <meta name="description" content={t('auth.pageDescription')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthHeader />
      <div className="min-h-screen flex">
        {/* Left Promotional Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <img 
              src="/images/Signup.jpg" 
              alt="Music listening experience" 
              className="w-80 h-80 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {authMode === 'login' ? t('auth.welcomeBack') : 
                 authMode === 'register' ? t('auth.createAccount') : t('auth.resetPassword')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {authMode === 'login' ? t('auth.signInDescription') : 
                 authMode === 'register' ? t('auth.joinDescription') : t('auth.resetDescription')}
              </p>
              
              {/* Mode Indicator */}
              <div className="flex justify-center mt-4">
                <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setAuthMode('login')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      authMode === 'login'
                        ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    {t('auth.signIn')}
                  </button>
                  <button
                    onClick={() => setAuthMode('register')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      authMode === 'register'
                        ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    {t('auth.createAccount')}
                  </button>
                </div>
              </div>
            </div>
            {authMode === 'login' && (
              // Login Form
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loginEmail">{t('auth.email')}</Label>
                  <Input
                    id="loginEmail"
                    type="email"
                    placeholder={t('auth.emailPlaceholder')}
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loginPassword">{t('auth.password')}</Label>
                  <Input
                    id="loginPassword"
                    type="password"
                    placeholder={t('auth.passwordPlaceholder')}
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  disabled={loading}
                >
                  {loading ? t('auth.signingIn') : t('auth.signIn')}
                </Button>
                <div className="text-center space-y-2">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t('auth.dontHaveAccount').split('?')[0]}?{' '}
                    <button
                      type="button"
                      onClick={() => setAuthMode('register')}
                      className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                    >
                      {t('auth.dontHaveAccount').split('?')[1]?.trim() || 'Sign up'}
                    </button>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t('auth.forgotPassword').split('?')[0]}?{' '}
                    <button
                      type="button"
                      onClick={() => setAuthMode('forgetPassword')}
                      className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                    >
                      {t('auth.forgotPassword').split('?')[1]?.trim() || 'Reset'}
                    </button>
                  </div>
                </div>
              </form>
            )}

            {authMode === 'register' && (
              // Registration Form
              <form onSubmit={handleRegister} className="space-y-4">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('auth.firstName')}</Label>
                    <Input
                      id="firstName"
                      placeholder={t('auth.firstNamePlaceholder')}
                      value={formData.username.split(' ')[0] || ''}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value + ' ' + (formData.username.split(' ')[1] || '') })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('auth.lastName')}</Label>
                    <Input
                      id="lastName"
                      placeholder={t('auth.lastNamePlaceholder')}
                      value={formData.username.split(' ')[1] || ''}
                      onChange={(e) => setFormData({ ...formData, username: (formData.username.split(' ')[0] || '') + ' ' + e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">{t('auth.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('auth.emailPlaceholder')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <Label htmlFor="mobile">{t('auth.mobile')}</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder={t('auth.mobilePlaceholder')}
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">{t('auth.password')}</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder={t('auth.passwordPlaceholder')}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>

                {/* Re-enter Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">{t('auth.confirmPassword')}</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder={t('auth.confirmPasswordPlaceholder')}
                    required
                  />
                </div>

                
                {/* Sign Up Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-700 hover:to-indigo-900 text-white font-semibold py-3 rounded-lg"
                  disabled={loading}
                >
                  {loading ? t('auth.creatingAccount') : t('auth.createAccountButton')}
                </Button>


                {/* Already have account */}
                <div className="text-center">
                  <span className="text-gray-600 dark:text-gray-400">
                    {t('auth.alreadyHaveAccount').split('?')[0]}?{' '}
                    <button
                      type="button"
                      onClick={() => setAuthMode('login')}
                      className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                    >
                      {t('auth.alreadyHaveAccount').split('?')[1]?.trim() || 'Sign in'}
                    </button>
                  </span>
                </div>
              </form>
            )}

            {authMode === 'forgetPassword' && (
              // Password Reset Form
              <form onSubmit={handlePasswordReset} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="resetEmail">{t('auth.email')}</Label>
                  <Input
                    id="resetEmail"
                    type="email"
                    placeholder={t('auth.emailPlaceholder')}
                    value={resetData.email}
                    onChange={(e) => setResetData({ ...resetData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">{t('auth.password')}</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder={t('auth.newPasswordPlaceholder')}
                    value={resetData.newPassword}
                    onChange={(e) => setResetData({ ...resetData, newPassword: e.target.value })}
                    required
                  />
                  <div className="text-xs text-gray-500">
                    {t('auth.passwordStrength')} {resetData.newPassword.length >= 8 ? t('auth.strong') : 
                                      resetData.newPassword.length >= 6 ? t('auth.good') : t('auth.weak')}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">{t('auth.confirmPassword')}</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder={t('auth.confirmPasswordPlaceholder')}
                    value={resetData.confirmPassword}
                    onChange={(e) => setResetData({ ...resetData, confirmPassword: e.target.value })}
                    required
                  />
                  {resetData.confirmPassword && (
                    <div className={`text-xs ${resetData.newPassword === resetData.confirmPassword ? 'text-green-600' : 'text-red-600'}`}>
                      {resetData.newPassword === resetData.confirmPassword ? t('auth.passwordsMatch') : t('auth.passwordsDontMatch')}
                    </div>
                  )}
                </div>
                
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>{t('auth.resetNote').split(':')[0]}:</strong> {t('auth.resetNote').split(':')[1]}
                  </p>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  disabled={loading}
                >
                  {loading ? t('auth.resettingPassword') : t('auth.resetPasswordButton')}
                </Button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setAuthMode('login')}
                    className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    {t('auth.backToSignIn')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
