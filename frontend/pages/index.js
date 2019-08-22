import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
// import Nav from '../components/nav'
//import css from "../style.css"
import styles from '../style.module.scss'

const Home = () => (
  <div>
    <Head></Head>
    <Link href='/'>
      <h1 className={styles.test}>Home</h1>
    </Link>
    <Link href='/games'>
      <a>href</a>
    </Link> 
    INDEX
  </div>
)

export default Home
