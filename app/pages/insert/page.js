import React from 'react';
import Link from 'next/link';
import Insert from '@/app/comp/Insert'

function insert() {
  return (
    <>
      <h2>insert..비주얼..설명..</h2>
      <Insert/>

      <Link href ="/">HOME</Link>
      <Link href ="./list">List 보기</Link>
    </>
  )
}

export default insert