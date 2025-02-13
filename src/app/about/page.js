'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const router = useRouter();
    const navigation = (name) => {
        router.push(name);
    }
  return (
    <div>
      <p>its a About page</p>
      <Link href="/">Go to Home Page</Link>
      <button onClick={()=>navigation("/about/student")}>Student</button>
      <button onClick={()=>navigation("/about/college")}>Collage</button>
    </div>
  )
}
