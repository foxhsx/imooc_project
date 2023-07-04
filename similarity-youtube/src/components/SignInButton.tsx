"use client"

import { signIn } from 'next-auth/react';
import { FC, useState } from 'react'
import Button from './ui/Button'
import { toast } from './ui/Toast';

interface SignInButtonProps {
  
}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const signInWithGoogle =async () => {
    setIsLoading(true);

    try {
      await signIn("github")
    } catch (error) {
      toast({
        title: 'Error signing in',
        message: 'Please try again later',
        type: 'error'
      })
    }
  }

  return <Button onClick={signInWithGoogle}>Sign In</Button>
}

export default SignInButton