import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'

// _app.js
const MyApp = ({ Component, pageProps }) => {
  return (
  <AnimatePresence exitBeforeEnter> 
   <Component {...pageProps} />
  </AnimatePresence> );
}
export default MyApp
