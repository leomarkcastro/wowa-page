'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import {
  passwordFormSchema,
  profileFormSchema,
} from '@/lib/validations/settings';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function ProfileSettings() {
  const { user, updateMe, changePassword } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const profileForm = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user?.name || '',
      middleName: user?.middleName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
    },
  });

  const passwordForm = useForm({
    resolver: zodResolver(passwordFormSchema),
  });

  async function onProfileSubmit(data) {
    try {
      setIsLoading(true);
      await updateMe({
        id: user.id,
        ...data,
      });
      toast({
        title: 'Profile updated',
        description: 'Your profile has been updated successfully.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function onPasswordSubmit(data) {
    try {
      setIsLoading(true);
      await changePassword(data.currentPassword, data.newPassword);
      passwordForm.reset();
      toast({
        title: 'Password updated',
        description: 'Your password has been updated successfully.',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='grid gap-6'>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details here.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <form onSubmit={profileForm.handleSubmit(onProfileSubmit)}>
            {/* Profile form fields */}
            <div className='grid gap-4 md:grid-cols-3'>
              <div className='space-y-2'>
                <Label htmlFor='name'>First Name</Label>
                <Input
                  {...profileForm.register('name')}
                  placeholder='Enter your first name'
                />
                {profileForm.formState.errors.name && (
                  <p className='text-sm text-red-500'>
                    {profileForm.formState.errors.name.message}
                  </p>
                )}
              </div>
              {/* ... Middle Name and Last Name fields ... */}
            </div>
            <div className='mt-4'>{/* Email field */}</div>
            <Button type='submit' className='mt-4' disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save Changes'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your password here.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}>
            {/* Password form fields */}
            <Button type='submit' className='mt-4' disabled={isLoading}>
              {isLoading ? 'Updating...' : 'Update Password'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
