'use client';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/auth-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';

export default function ForgotPasswordPage() {
  const { requestPasswordReset } = useAuth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const success = await requestPasswordReset(email);
      if (success) {
        setMessage('Password reset link has been sent to your email');
      } else {
        setError('Failed to send reset link');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      heading='Forgot password?'
      subheading="Enter your email address and we'll send you a link to reset your password"
    >
      <form onSubmit={handleSubmit} className='grid gap-4'>
        <div className='grid gap-2'>
          <Input
            id='email'
            placeholder='name@example.com'
            type='email'
            autoCapitalize='none'
            autoComplete='email'
            autoCorrect='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button
          type='submit'
          className='w-full bg-[#0084FF] hover:bg-[#0084FF]/90'
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send reset link'}
        </Button>
        {message && <p className='text-green-500'>{message}</p>}
        {error && <p className='text-red-500'>{error}</p>}
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
