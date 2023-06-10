"use client"

import { signIn } from 'next-auth/react';
import { FC, useState } from 'react'
import Button from './ui/Button'

interface SignInButtonProps {
  
}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const signInWithGoogle =async () => {
    setIsLoading(true);

    try {
      await signIn('google')
    } catch (error) {
      // toast({
      //   title: 'Error signing in',
      //   message: 'Please try again later',
      //   type: 'error'
      // })
    }
  }

  return <Button onClick={signInWithGoogle}>Sign In</Button>
}

export default SignInButton