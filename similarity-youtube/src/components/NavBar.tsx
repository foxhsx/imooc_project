import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { buttonVariants } from './ui/Button';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';
import ThemeToggle from './ThemeToggle';
import { authOptions } from '@/lib/auth';

const NavBar = async ({}) => {
  const session = await getServerSession(authOptions)
  console.log("🚀 ~ file: NavBar.tsx:11 ~ NavBar ~ session:", session)
  return <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
    <div className='container max-width-7xl w-full flex justify-between items-center mx-auto'>
      <Link href='/' className={buttonVariants({ variant: 'link' })}>
        Text Similarity 1.0
      </Link>

      <div className="md:hidden">
        <ThemeToggle />
      </div>

      <div className="hidden md:flex gap-4">
        <ThemeToggle />
        <Link href='/documentation' className={buttonVariants({ variant: 'ghost' })}>
          Documentation
        </Link>
        { session ? (
          <>
            <Link
              className={buttonVariants({ variant: 'ghost' })}
              href='/'
            >Dashboard</Link>
            <SignOutButton />
          </>
        ) : <SignInButton /> }
      </div>
    </div>
  </div>
}

export default NavBar