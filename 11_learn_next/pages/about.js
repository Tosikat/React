import React, {memo} from 'react'
import Head from "next/head";
import Link from "next/link";
const About = memo(function () {
  return (
    <div>
      <Head>
        <title>网易云 关于</title>
      </Head>
      <h1>关于</h1>
      <p>其他</p>
      <style>
        {`
          h1 {
          color: #3498db;
          }
        `}
      </style>
    </div>
  )
})
export default About;
