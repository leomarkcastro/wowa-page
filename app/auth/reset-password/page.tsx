'use client';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/auth-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { resetPassword } = useAuth();

  const token = searchParams.get('token');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (!token) {
    return (
      <AuthLayout
        heading='Invalid Reset Link'
        subheading='The password reset link is invalid or has expired'
      >
        <div className='text-center'>
          <p className='mb-4 text-sm text-red-500'>
            Please request a new password reset link.
          </p>
          <Link href='/auth/login' className='text-[#0084FF] hover:underline'>
            Return to Login
          </Link>
        </div>
      </AuthLayout>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      const success = await resetPassword(token, password);
      if (success) {
        router.push('/auth/login?reset=success');
      } else {
        setError('Password reset failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      heading='Reset password'
      subheading='Enter your new password below'
    >
      <form onSubmit={handleSubmit} className='grid gap-4'>
        <div className='grid gap-2'>
          <div className='relative'>
            <Input
              id='password'
              placeholder='New password'
              type={showPassword ? 'text' : 'password'}
              autoCapitalize='none'
              autoComplete='new-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant='ghost'
              size='icon'
              className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
              onClick={() => setShowPassword(!showPassword)}
              type='button'
            >
              <svg
                viewBox='0 0 24 24'
                className='h-4 w-4'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                <path d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
              </svg>
            </Button>
          </div>
        </div>
        <div className='grid gap-2'>
          <div className='relative'>
            <Input
              id='confirm-password'
              placeholder='Confirm new password'
              type={showPassword ? 'text' : 'password'}
              autoCapitalize='none'
              autoComplete='new-password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              variant='ghost'
              size='icon'
              className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
              onClick={() => setShowPassword(!showPassword)}
              type='button'
            >
              <svg
                viewBox='0 0 24 24'
                className='h-4 w-4'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                <path d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
              </svg>
            </Button>
          </div>
        </div>
        {error && <p className='text-sm text-red-500'>{error}</p>}
        <Button
          className='w-full bg-[#0084FF] hover:bg-[#0084FF]/90'
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? 'Resetting...' : 'Reset password'}
        </Button>
      </form>
      <div className='text-center text-sm'>
        Remember your password?{' '}
        <Link href='/auth/login' className='text-[#0084FF] hover:underline'>
          Login
        </Link>
      </div>
    </AuthLayout>
  );
}
