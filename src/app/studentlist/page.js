'use client'

import Link from 'next/link'
import React from 'react'

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
            <Link href="/studentlist/1"> Kiran</Link>
        </li><li>
            <Link href="/studentlist/2"> Him</Link>
        </li><li>
            <Link href="/studentlist/3"> kartik</Link>
        </li><li>
            <Link href="/studentlist/4"> kaushik</Link>
        </li><li>
            <Link href="/studentlist/5"> nono</Link>
        </li>
      </ul>
    </div>
  )
}
