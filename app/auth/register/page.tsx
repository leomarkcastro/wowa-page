'use client';
import Link from 'next/link';
import { AuthLayout } from '@/components/auth/auth-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!firstName || !lastName || !email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const response = await register({
        firstName,
        lastName,
        email,
        password,
      });

      console.log(response);
      if (response?.id) {
        router.push('/admin');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      heading='Create an account'
      subheading='Enter your details below to create your account'
    >
      <form onSubmit={onRegister} className='grid gap-4'>
        <div className='grid grid-cols-2 gap-2'>
          <Input
            id='firstName'
            placeholder='First Name'
            type='text'
            autoCapitalize='words'
            autoComplete='given-name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            id='lastName'
            placeholder='Last Name'
            type='text'
            autoCapitalize='words'
            autoComplete='family-name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
        <div className='grid gap-2'>
          <div className='relative'>
            <Input
              id='password'
              placeholder='Password'
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
        {error && <p className='text-sm text-red-500'>{error}</p>}
        <Button
          className='w-full bg-[#0084FF] hover:bg-[#0084FF]/90'
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? 'Creating account...' : 'Create account'}
        </Button>
      </form>
      <div className='text-center text-sm'>
        Already have an account?{' '}
        <Link href='/auth/login' className='text-[#0084FF] hover:underline'>
          Login
        </Link>
      </div>
    </AuthLayout>
  );
}
