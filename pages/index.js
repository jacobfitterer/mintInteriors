import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/mint-logo.svg'
import { motion } from 'framer-motion'

// animate: defines animation
// inital: defines initial state of animation or starting point.
//exit: defines animation when componet exits
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "#000000"
  }
}


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition:{
      duration: 1,
      delay: 1.6
    }
  }   
}

const fadeDown = {
  hidden: {
    opacity: 0,
    y: 0
  },
  visible: {
    opacity: 1,
    y: 30,
    transition:{
      duration: 1,
      delay: 1.6
    }
  }   
};
const fadeDownDelay = {
  hidden: {
    opacity: 0,
    y: -15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition:{
      duration: 1,
      delay: 3.6,
    }
  }   
};

const fadeDownLogo = {
  hidden: {
    opacity: 0,
    y: 30
  },   
};


 

export default function Home() {


  return (

<section className={styles.container}>
    <div className={styles.main}>
    
      <Head>
        <title>Mint Interior Design Studio</title>

        <meta property="og:url" content="themintinteriors.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Commercial & Residential Interior Design Studio"
        />
        <meta name="twitter:card" content="Commercial & Residential Interior Design Studio" />
        <meta
          property="og:description"
          content="Commercial & Residential Interior Design Studio"
        />
        <meta property="og:image" content={"/favicon.ico"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

 
      <div className={styles.logo}> 
      <motion.h1
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      > website coming soon</motion.h1>

      
      <svg className={styles.logo_box} xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 113.3 39.4">
        <motion.g
        variants={fadeDownLogo}
        initial="hidden"
        animate={{
          opacity: 1,
          y: 0,
          transition:{
            duration: .8,
            delay: 1.3
          }
        }}
         id="T"><path d="M97,11.1l8.6-5.2V34.3c0,2.2.8,3,1.5,3.3a3.09,3.09,0,0,0,.9.2,2.81,2.81,0,0,0,1.5-.4,9.45,9.45,0,0,1-5.6,1.9h0a8,8,0,0,1-5.1-1.7A5.15,5.15,0,0,1,96.9,34Z"/><path d="M108.1,13.1h5a.22.22,0,0,1,.2.2v.1l-2.5,2.8a.19.19,0,0,1-.27,0l0,0h0L108,13.4a.19.19,0,0,1,0-.27l0,0Z"/></motion.g>
        <motion.g
       variants={fadeDownLogo}
       initial="hidden"
       animate={{
         opacity: 1,
         y: 0,
         transition:{
           duration: .8,
           delay: 1.2
         }
       }} id="N"><polygon points="74.5 39.1 65.9 39.1 65.9 13.6 74.5 13.7 74.5 39.1"/><path d="M90.3,39.2H81.7V17.8c0-2.2-.8-3-1.5-3.3a3.09,3.09,0,0,0-.9-.2,2.81,2.81,0,0,0-1.5.4,9.45,9.45,0,0,1,5.6-1.9h0a8,8,0,0,1,5.1,1.7,5.15,5.15,0,0,1,1.9,3.6Z"/></motion.g>
        <motion.g
        variants={fadeDownLogo}
        initial="hidden"
        animate={{
          opacity: 1,
          y: 0,
          transition:{
            duration: .8,
            delay: 1.1
          }
        }} id="I"><path d="M58.4,4.6a4.61,4.61,0,0,1-4.52,4.7H53.7a4.7,4.7,0,0,1-3.3-8,4.7,4.7,0,0,1,8,3.3Z"/><polygon points="58 39.1 49.4 39.1 49.4 13.6 58 13.7 58 39.1"/></motion.g>
        <motion.g
        variants={fadeDownLogo}
        initial="hidden"
        animate={{
          opacity: 1,
          y: 0,
          transition:{
            duration: .8,
            delay: 1
          }
        }} id="M"><path d="M25.1,17.9V39.1H16.5V17.7c0-2.2-.8-3-1.5-3.3a3.09,3.09,0,0,0-.9-.2,3.24,3.24,0,0,0-1.4.3,10.26,10.26,0,0,1,5.6-1.9C22.4,12.6,25.1,15.3,25.1,17.9Z"/><path d="M41.5,17.9V39.1H32.9V17.7c0-2.2-.8-3-1.5-3.3a3.09,3.09,0,0,0-.9-.2,3.24,3.24,0,0,0-1.4.3,9.92,9.92,0,0,1,5.5-1.9C38.9,12.6,41.5,15.3,41.5,17.9Z"/><polygon points="8.6 39.1 0 39.1 0 13.6 8.6 13.7 8.6 39.1"/></motion.g>
        </svg>


<motion.h2
variants={fadeDown}
initial="hidden"
animate="visible"

> Commercial &amp; Residential <br /> Interior Design Studio</motion.h2>

<div className={styles.vertical_line}></div>
<motion.div
variants={fadeDownDelay}
initial="hidden"
animate="visible"

className={styles.social_icons}>
  <span><a href="https://instagram.com/themintinteriors/"><Image layout="fill" src="/instagram.svg"  /></a></span>
  <span><a href="https://www.facebook.com/themintinteriors"><Image layout="fill" src="/facebook.svg"  /></a></span>
  <span><a href="https://www.linkedin.com/company/mint-interiors-studio"><Image layout="fill" src="/linkedin.svg" /></a></span>
  
</motion.div>
<motion.div
variants={fadeDownDelay}
initial="hidden"
animate="visible"
className={styles.email_icon}> <p>hello@themintinteriors.com</p></motion.div>
</div>
    </div>
    </section>
  )
}
