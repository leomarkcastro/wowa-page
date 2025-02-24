'use client';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/auth-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const redirectUrl = searchParams.get('redirect') || '/admin';

  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      // Add your login API call here
      const response = await login({
        email,
        password,
      });

      if (!response?.id) {
        throw new Error('Login failed');
      }

      router.push(redirectUrl); // Redirect after successful login
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout heading='Welcome' subheading='Login To Continue'>
      {/* <div className='grid grid-cols-3 gap-2'>
        <Button variant='outline' className='w-full'>
          <Facebook className='h-5 w-5 text-[#1877F2]' />
        </Button>
        <Button variant='outline' className='w-full'>
          <Apple className='h-5 w-5' />
        </Button>
        <Button variant='outline' className='w-full'>
          <svg className='h-5 w-5' viewBox='0 0 24 24'>
            <path
              d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              fill='#4285F4'
            />
            <path
              d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              fill='#34A853'
            />
            <path
              d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
              fill='#FBBC05'
            />
            <path
              d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
              fill='#EA4335'
            />
          </svg>
        </Button>
      </div>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div> */}
      <form onSubmit={onLogin} className='grid gap-4'>
        {error && <div className='text-sm text-red-500'>{error}</div>}
        <div className='grid gap-2'>
          <Input
            id='email'
            placeholder='name@example.com'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoCapitalize='none'
            autoComplete='email'
            autoCorrect='off'
          />
        </div>
        <div className='grid gap-2'>
          <div className='relative'>
            <Input
              id='password'
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoCapitalize='none'
              autoComplete='current-password'
            />
            <Button
              variant='ghost'
              size='icon'
              type='button'
              className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  viewBox='0 0 24 24'
                  className='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24' />
                  <path d='M1 1l22 22' />
                </svg>
              ) : (
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
              )}
            </Button>
          </div>
        </div>
        <Button
          type='submit'
          className='w-full bg-[#0084FF] hover:bg-[#0084FF]/90'
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      <div className='flex items-center justify-between'>
        <Link
          href='/auth/forgot-password'
          className='text-sm text-[#0084FF] hover:underline'
        >
          Forgot password?
        </Link>
        <Link
          href='/auth/register'
          className='text-sm text-[#0084FF] hover:underline'
        >
          Sign Up
        </Link>
      </div>
    </AuthLayout>
  );
}
