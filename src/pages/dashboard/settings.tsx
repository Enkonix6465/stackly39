import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Sidebar } from '@/components/ui/sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/theme/ModeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  LogOut,
  User,
  Mail,
  Phone,
  Shield,
  Calendar,
  Clock,
  Edit,
  Save,
  X,
  Menu,
  Settings as SettingsIcon,
  Key,
  Eye,
  EyeOff
} from 'lucide-react';

interface User {
  role: string;
  username: string;
  email: string;
  mobile: string;
  password: string;
  loginTime?: string;
  logoutTime?: string;
  lastActive?: string;
  isApproved?: boolean;
  approvalDate?: string;
  approvedBy?: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function SettingsPage() {
  const { t } = useLanguage();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [editForm, setEditForm] = useState({
    username: '',
    email: '',
    mobile: '',
    password: ''
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
      if (!user || user.role !== 'admin') {
        alert(t('dashboard.settings.messages.accessDenied'));
        window.location.href = '/auth';
        return;
      }
      setCurrentUser(user);
      setEditForm({
        username: user.username,
        email: user.email,
        mobile: user.mobile,
        password: user.password
      });
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser');
      window.location.href = '/';
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditForm({
      username: currentUser?.username || '',
      email: currentUser?.email || '',
      mobile: currentUser?.mobile || '',
      password: currentUser?.password || ''
    });
    setIsEditing(false);
  };

  const handleSave = async () => {
    if (!currentUser) return;

    try {
      // Update user profile
      const updatedUser = {
        ...currentUser,
        ...editForm,
        updatedAt: new Date().toISOString()
      };

      // Update in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      }
      setCurrentUser(updatedUser);

      // Update in the main data store via API
      const response = await fetch('/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        alert(t('dashboard.settings.messages.profileUpdated'));
        setIsEditing(false);
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert(t('dashboard.settings.messages.updateFailed'));
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return t('dashboard.settings.activityInfo.never');
    return new Date(dateString).toLocaleString();
  };

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{t('dashboard.settings.title')}</title>
        <meta name="description" content={t('dashboard.settings.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Top Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="mr-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                  <div className="flex flex-col h-full">
                    <Sidebar currentUser={currentUser} onLogout={handleLogout} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="mr-4 flex md:hidden">
              <Image
                src="/logo-stackly.png"
                alt="E-Commerce Logo"
                className="h-8 w-auto"
                height={32}
                width={120}
              />
            </div>

            <div className="mr-4 hidden md:flex">
              <Image
                src="/logo-stackly.png"
                alt="E-Commerce Logo"
                className="h-8 w-auto"
                height={32}
                width={120}
              />
            </div>

            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="flex items-center space-x-2">
                <span className="hidden sm:inline text-sm text-muted-foreground">
                  {t('header.welcome')}, {currentUser.username}
                </span>
                <LanguageSwitcher />
                <ModeToggle />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('header.logout')}</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Desktop Sidebar */}
          <aside className="hidden md:flex md:w-64 md:flex-col">
            <div className="flex flex-col flex-grow pt-5 bg-muted/30 overflow-y-auto border-r">
              <Sidebar currentUser={currentUser} onLogout={handleLogout} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4 md:p-6">
            <div className="space-y-6">
              {/* Page Header */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t('dashboard.settings.title')}</h2>
                <p className="text-muted-foreground">
                  {t('dashboard.settings.description')}
                </p>
              </div>

              {/* Profile Information */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <User className="h-5 w-5" />
                        <span>{t('dashboard.settings.profile.adminProfile')}</span>
                      </CardTitle>
                      <CardDescription>
                        {t('dashboard.settings.profile.personalInfo')}
                      </CardDescription>
                    </div>
                    {!isEditing ? (
                      <Button onClick={handleEdit} className="flex items-center space-x-2">
                        <Edit className="h-4 w-4" />
                        {t('dashboard.settings.profile.editProfile')}
                      </Button>
                    ) : (
                      <div className="flex space-x-2">
                        <Button onClick={handleSave} className="flex items-center space-x-2">
                          <Save className="h-4 w-4" />
                          {t('dashboard.settings.profile.saveChanges')}
                        </Button>
                        <Button variant="outline" onClick={handleCancel} className="flex items-center space-x-2">
                          <X className="h-4 w-4" />
                          {t('dashboard.settings.profile.cancel')}
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Picture and Basic Info */}
                  <div className="flex items-start space-x-6">
                    <div className="h-20 w-20 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <Shield className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="username">{t('dashboard.settings.profile.username')}</Label>
                          {isEditing ? (
                            <Input
                              id="username"
                              value={editForm.username}
                              onChange={(e) => setEditForm(prev => ({ ...prev, username: e.target.value }))}
                              placeholder={t('dashboard.settings.profile.usernamePlaceholder')}
                            />
                          ) : (
                            <div className="text-sm font-medium">{currentUser.username}</div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">{t('dashboard.settings.profile.email')}</Label>
                          {isEditing ? (
                            <Input
                              id="email"
                              type="email"
                              value={editForm.email}
                              onChange={(e) => setEditForm(prev => ({ ...prev, email: e.target.value }))}
                              placeholder={t('dashboard.settings.profile.emailPlaceholder')}
                            />
                          ) : (
                            <div className="text-sm font-medium">{currentUser.email}</div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mobile">{t('dashboard.settings.profile.mobile')}</Label>
                          {isEditing ? (
                            <Input
                              id="mobile"
                              type="tel"
                              value={editForm.mobile}
                              onChange={(e) => setEditForm(prev => ({ ...prev, mobile: e.target.value }))}
                              placeholder={t('dashboard.settings.profile.mobilePlaceholder')}
                            />
                          ) : (
                            <div className="text-sm font-medium">{currentUser.mobile}</div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">{t('dashboard.settings.profile.password')}</Label>
                          {isEditing ? (
                            <div className="relative">
                              <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={editForm.password}
                                onChange={(e) => setEditForm(prev => ({ ...prev, password: e.target.value }))}
                                placeholder={t('dashboard.settings.profile.passwordPlaceholder')}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </div>
                          ) : (
                            <div className="text-sm font-medium">••••••••</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Account Status */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">{t('dashboard.settings.accountStatus.title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <span className="text-sm font-medium">{t('dashboard.settings.accountStatus.role')}</span>
                        <Badge variant="default" className="bg-green-600">
                          {t(`auth.role.${currentUser.role}`)}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <span className="text-sm font-medium">{t('dashboard.settings.accountStatus.status')}</span>
                        <Badge variant="default" className="bg-blue-600">
                          {currentUser.isApproved ? t('dashboard.settings.accountStatus.approved') : t('dashboard.settings.accountStatus.pending')}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                        <span className="text-sm font-medium">{t('dashboard.settings.accountStatus.approvedBy')}</span>
                        <span className="text-sm">{currentUser.approvedBy || t('dashboard.settings.accountStatus.system')}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                        <span className="text-sm font-medium">{t('dashboard.settings.accountStatus.approvalDate')}</span>
                        <span className="text-sm">{formatDate(currentUser.approvalDate)}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Activity Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">{t('dashboard.settings.activityInfo.title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <div>
                          <div className="text-sm font-medium">{t('dashboard.settings.activityInfo.accountCreated')}</div>
                          <div className="text-sm text-gray-500">{formatDate(currentUser.createdAt)}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <div>
                          <div className="text-sm font-medium">{t('dashboard.settings.activityInfo.lastUpdated')}</div>
                          <div className="text-sm text-gray-500">{formatDate(currentUser.updatedAt)}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <div>
                          <div className="text-sm font-medium">{t('dashboard.settings.activityInfo.lastLogin')}</div>
                          <div className="text-sm text-gray-500">{formatDate(currentUser.loginTime)}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <div>
                          <div className="text-sm font-medium">{t('dashboard.settings.activityInfo.lastActive')}</div>
                          <div className="text-sm text-gray-500">{formatDate(currentUser.lastActive)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Application Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <SettingsIcon className="h-5 w-5" />
                    <span>{t('dashboard.settings.appSettings.title')}</span>
                  </CardTitle>
                  <CardDescription>
                    {t('dashboard.settings.appSettings.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                    <div>
                      <div className="text-sm font-medium">{t('dashboard.settings.appSettings.darkMode')}</div>
                      <div className="text-sm text-gray-500">{t('dashboard.settings.appSettings.darkModeDescription')}</div>
                    </div>
                    <ModeToggle />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                    <div>
                      <div className="text-sm font-medium">{t('dashboard.settings.appSettings.dataStorage')}</div>
                      <div className="text-sm text-gray-500">{t('dashboard.settings.appSettings.dataStorageDescription')}</div>
                    </div>
                    <Badge variant="secondary">{t('dashboard.settings.appSettings.active')}</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                    <div>
                      <div className="text-sm font-medium">{t('dashboard.settings.appSettings.adminApproval')}</div>
                      <div className="text-sm text-gray-500">{t('dashboard.settings.appSettings.adminApprovalDescription')}</div>
                    </div>
                    <Badge variant="default" className="bg-green-600">{t('dashboard.settings.appSettings.enabled')}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
