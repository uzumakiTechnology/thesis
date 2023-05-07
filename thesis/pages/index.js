import Header from '../components/Header'
import Feature from '../components/Feature/Feature'
import CMCBoard from '../components/CMCBoard/CMCBoard'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className='min-h-screen'>
    <Header/>
    {/* <SwapCryptoModal/> */}
    <div className='mt-10'>
      <Feature/>
      <div className='mt-20'>
        <CMCBoard/>
      </div>
    </div>
    <Footer/>
  </div>
  )
}
