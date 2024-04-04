import React from 'react'
import { useStateContext } from '../Context/index'
import { connectWallet } from '../Utils'
import {
  About,
  Contact,
  ArrowUp,
  Banner,
  Blog,
  Client,
  Distribution,
  Faq,
  Footer,
  Header,
  Loader,
  MobileApp,
  Service,
  Team,
  TimeLine,
  TokenSale
} from "../Components/index"


const index = () => {
  const { TOKEN_ICO,
    transferNativeToken,
    buyToken,
    connectWallet,
    setAddress,
    currentHolder,
    address,
    balance,
    nativeToken,
    tokenHolders,
    tokenSale, } = useStateContext()
  return (
    <div className='v_dark'>
      <Header address={address} setAddress={setAddress} connectWallet={connectWallet} />
      <Banner transferNativeToken={transferNativeToken} />
      <Service />
      <About />
      <TokenSale buyToken={buyToken} tokenSale={tokenSale} />
      <Distribution />
      <MobileApp />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default index