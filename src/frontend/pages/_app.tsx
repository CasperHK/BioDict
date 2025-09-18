import type { AppProps } from 'next/app'
import TopNavBar from '../components/TopNavBar'
import Footer from '../components/Footer'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopNavBar />
      <div style={{ paddingTop: '64px' }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}