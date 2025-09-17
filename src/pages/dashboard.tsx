import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Sidebar } from '@/components/ui/sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/theme/ModeToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Users,
  LogOut,
  User,
  Mail,
  Phone,
  Clock,
  Calendar,
  Menu,
  Shield,
  UserCheck,
  AlertCircle,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { userAPI } from '@/lib/apiClient';

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

// AdminRequest interface removed - single admin policy

export default function Dashboard() {
  const { t } = useLanguage();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  // Admin requests removed - single admin policy
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
      if (!user || user.role !== 'admin') {
        alert(t('auth.accessDenied'));
        window.location.href = '/auth';
        return;
      }
      setCurrentUser(user);
      loadData();
    }
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const usersData = await userAPI.getApproved();
      setUsers(usersData);
    } catch (error) {
      console.error('Error loading data:', error);
      
      // Show user-friendly error message
      const errorMessage = error instanceof Error ? error.message : 'Failed to load dashboard data';
      alert(`Error: ${errorMessage}\n\nPlease try refreshing the page or contact support if the problem persists.`);
      
      // Set empty array to prevent UI crashes
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser');
      window.location.href = '/';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">{t('dashboard.adminRequests.pending')}</Badge>;
      case 'approved':
        return <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">{t('dashboard.adminRequests.approved')}</Badge>;
      case 'rejected':
        return <Badge variant="destructive">{t('dashboard.adminRequests.rejected')}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const approvedUsers = users.filter(user => user.role === 'user');

  return (
    <>
      <Head>
        <title>{t('dashboard.pageTitle')}</title>
        <meta name="description" content={t('dashboard.pageDescription')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-background">
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
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t('dashboard.title')}</h2>
                <p className="text-muted-foreground">
                  {t('dashboard.subtitle')}
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t('dashboard.stats.totalUsers')}</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{approvedUsers.length}</div>
                    <p className="text-xs text-muted-foreground">
                      {t('dashboard.statsDescriptions.approvedUsersOnly')}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{t('dashboard.stats.regularUsers')}</CardTitle>
                    <User className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{approvedUsers.filter(u => u.role === 'user').length}</div>
                    <p className="text-xs text-muted-foreground">
                      {t('dashboard.statsDescriptions.activeUserAccounts')}
                    </p>
                  </CardContent>
                </Card>

                {/* Admin stats card removed - single admin policy */}

                {/* Admin requests card removed - single admin policy */}
              </div>

              {/* Admin Requests Summary removed - single admin policy */}

              {/* Recent Users Table */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{t('dashboard.recentUsers.title')}</CardTitle>
                      <CardDescription>
                        {t('dashboard.recentUsers.subtitle')}
                      </CardDescription>
                    </div>
                    <Button onClick={() => window.location.href = '/dashboard/users'}>
                      {t('dashboard.recentUsers.viewAllUsers')}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="flex items-center justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>{t('dashboard.recentUsers.user')}</TableHead>
                            <TableHead className="hidden md:table-cell">{t('dashboard.recentUsers.contact')}</TableHead>
                            {/* Role column removed - single admin policy */}
                            <TableHead className="hidden lg:table-cell">{t('dashboard.recentUsers.lastActive')}</TableHead>
                            <TableHead className="hidden xl:table-cell">{t('dashboard.recentUsers.created')}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {approvedUsers.slice(0, 5).map((user, index) => (
                            <TableRow key={index}>
                              <TableCell>
                                <div className="flex items-center space-x-3">
                                  <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                                    <User className="h-4 w-4 text-green-600 dark:text-green-400" />
                                  </div>
                                  <div>
                                    <div className="font-medium">{user.username}</div>
                                    <div className="text-sm text-muted-foreground md:hidden">
                                      {user.email}
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-2 text-sm">
                                    <Mail className="h-3 w-3 text-muted-foreground" />
                                    <span>{user.email}</span>
                                  </div>
                                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <Phone className="h-3 w-3" />
                                    <span>{user.mobile}</span>
                                  </div>
                                </div>
                              </TableCell>
                              {/* Role cell removed - single admin policy */}
                              <TableCell className="hidden lg:table-cell">
                                <div className="flex items-center space-x-2 text-sm">
                                  <Clock className="h-3 w-3 text-muted-foreground" />
                                  <span>{user.lastActive || t('dashboard.settings.activityInfo.never')}</span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden xl:table-cell">
                                <div className="flex items-center space-x-2 text-sm">
                                  <Calendar className="h-3 w-3 text-muted-foreground" />
                                  <span>{user.createdAt ? formatDate(user.createdAt) : 'N/A'}</span>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
