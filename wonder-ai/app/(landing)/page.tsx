import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <>
    <div>Landing Page || Unprotected </div>
    <Link href="/sign-in">
    <Button>
      Login
    </Button>
    </Link>
    <Link href="/sign-up">
    <Button>
      Register
    </Button>
    </Link>
    </>
  )
}

export default LandingPage