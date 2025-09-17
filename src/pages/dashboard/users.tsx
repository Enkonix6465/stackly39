import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  Plus,
  Search,
  Filter,
  Menu,
  Clock,
  Calendar
} from 'lucide-react';
import { userAPI, createNewUser } from '@/lib/apiClient';

interface User {
  role: string;
  username: string;
  email: string;
  mobile: string;
  password: string;
  loginTime?: string;
  logoutTime?: string;
  lastActive?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface NewUser {
  role: string;
  username: string;
  email: string;
  mobile: string;
  password: string;
}

export default function UsersPage() {
  const { t } = useLanguage();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newUser, setNewUser] = useState<NewUser>({
    role: 'user', // Default to user role
    username: '',
    email: '',
    mobile: '',
    password: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
      if (!user || user.role !== 'admin') {
        alert(t('dashboard.users.messages.accessDenied'));
        window.location.href = '/auth';
        return;
      }
      setCurrentUser(user);
      loadUsers();
    }
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const usersData = await userAPI.getApproved();
      // Filter only users with "user" role
      const regularUsers = usersData.filter((user: User) => user.role === 'user');
      setUsers(regularUsers);
    } catch (error) {
      console.error('Error loading users:', error);
      
      // Show user-friendly error message
      const errorMessage = error instanceof Error ? error.message : 'Failed to load users data';
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

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userWithTimes = createNewUser({
        ...newUser,
        role: 'user' // Force role to be user
      });

      await userAPI.save(userWithTimes);

      // Reset form and close dialog
      setNewUser({
        role: 'user',
        username: '',
        email: '',
        mobile: '',
        password: ''
      });
      setIsCreateDialogOpen(false);

      alert(t('dashboard.users.messages.userCreated'));
      loadUsers(); // Reload the list
    } catch (error) {
      console.error('Error creating user:', error);
      
      // Show detailed error message
      const errorMessage = error instanceof Error ? error.message : 'Failed to create user';
      alert(`${t('dashboard.users.messages.createError')} ${errorMessage}\n\n${t('dashboard.users.messages.tryAgain')}`);
    }
  };

  const handleDeleteUser = async (email: string) => {
    if (email === currentUser?.email) {
      alert(t('dashboard.users.messages.cannotDeleteSelf'));
      return;
    }

    if (confirm(t('dashboard.users.messages.confirmDelete'))) {
      try {
        await userAPI.delete(email);
        alert(t('dashboard.users.messages.userDeleted'));
        loadUsers(); // Reload the list
      } catch (error) {
        console.error('Error deleting user:', error);
        
        // Show detailed error message
        const errorMessage = error instanceof Error ? error.message : 'Failed to delete user';
        alert(`${t('dashboard.users.messages.deleteError')} ${errorMessage}\n\n${t('dashboard.users.messages.tryAgain')}`);
      }
    }
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <title>{t('dashboard.users.pageTitle')}</title>
        <meta name="description" content={t('dashboard.users.pageDescription')} />
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
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t('dashboard.users.title')}</h2>
                <p className="text-muted-foreground">
                  {t('dashboard.users.description')}
                </p>
              </div>

              {/* Search and Actions */}
              <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder={t('dashboard.users.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    <Filter className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">{t('dashboard.users.filter')}</span>
                  </Button>

                  <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm" className="w-full sm:w-auto">
                        <Plus className="mr-2 h-4 w-4" />
                        <span className="hidden sm:inline">{t('dashboard.users.createUser')}</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{t('dashboard.users.createUserDialog.title')}</DialogTitle>
                        <DialogDescription>
                          {t('dashboard.users.createUserDialog.description')}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleCreateUser} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="username">{t('dashboard.users.createUserDialog.username')}</Label>
                          <Input
                            id="username"
                            placeholder={t('dashboard.users.createUserDialog.usernamePlaceholder')}
                            value={newUser.username}
                            onChange={(e) => setNewUser(prev => ({ ...prev, username: e.target.value }))}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">{t('dashboard.users.createUserDialog.email')}</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={t('dashboard.users.createUserDialog.emailPlaceholder')}
                            value={newUser.email}
                            onChange={(e) => setNewUser(prev => ({ ...prev, email: e.target.value }))}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="mobile">{t('dashboard.users.createUserDialog.mobile')}</Label>
                          <Input
                            id="mobile"
                            type="tel"
                            placeholder={t('dashboard.users.createUserDialog.mobilePlaceholder')}
                            value={newUser.mobile}
                            onChange={(e) => setNewUser(prev => ({ ...prev, mobile: e.target.value }))}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="password">{t('dashboard.users.createUserDialog.password')}</Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder={t('dashboard.users.createUserDialog.passwordPlaceholder')}
                            value={newUser.password}
                            onChange={(e) => setNewUser(prev => ({ ...prev, password: e.target.value }))}
                            required
                          />
                        </div>

                        <div className="flex justify-end space-x-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsCreateDialogOpen(false)}
                          >
                            {t('dashboard.users.createUserDialog.cancel')}
                          </Button>
                          <Button type="submit">{t('dashboard.users.createUserDialog.submit')}</Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Users Table */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('dashboard.users.table.title').replace('{{count}}', filteredUsers.length.toString())}</CardTitle>
                  <CardDescription>
                    {t('dashboard.users.table.description')}
                  </CardDescription>
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
                            <TableHead>{t('dashboard.users.table.headers.user')}</TableHead>
                            <TableHead className="hidden md:table-cell">{t('dashboard.users.table.headers.contact')}</TableHead>
                            <TableHead className="hidden lg:table-cell">{t('dashboard.users.table.headers.loginTime')}</TableHead>
                            <TableHead className="hidden lg:table-cell">{t('dashboard.users.table.headers.logoutTime')}</TableHead>
                            <TableHead className="hidden xl:table-cell">{t('dashboard.users.table.headers.lastActive')}</TableHead>
                            <TableHead>{t('dashboard.users.table.headers.actions')}</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredUsers.map((user, index) => (
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
                              <TableCell className="hidden lg:table-cell">
                                <div className="flex items-center space-x-2 text-sm">
                                  <Clock className="h-3 w-3 text-muted-foreground" />
                                  <span>{user.loginTime || '-'}</span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden lg:table-cell">
                                <div className="flex items-center space-x-2 text-sm">
                                  <Calendar className="h-3 w-3 text-muted-foreground" />
                                  <span>{user.logoutTime || '-'}</span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden xl:table-cell">
                                <div className="flex items-center space-x-2 text-sm">
                                  <Clock className="h-3 w-3 text-muted-foreground" />
                                  <span>{user.lastActive || '-'}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => handleDeleteUser(user.email)}
                                >
                                  {t('dashboard.users.table.actions.delete')}
                                </Button>
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
