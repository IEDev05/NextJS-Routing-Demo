'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const router = useRouter();
  return (
    <div>
      <p>its a login page</p>
      <br></br><br></br>

      <Link href="/">Go to Home Page</Link>
      <br></br><br></br>
        <Link href="/login/student">Student Login</Link>
      <br></br><br></br>

        <Link href="/login/college">College Login</Link>
      <br></br><br></br>
        <button onClick={()=>router.push("/")}> go to home page</button>
    </div>
  )
}
