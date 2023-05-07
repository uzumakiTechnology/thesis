import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css'
const activeChainId = ChainId.Goerli;
import { MarketCapProvider } from '../context/context';
import { SwapTokenContextProvider } from '../context/SwapContext';



export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider network={activeChainId}>
      <MarketCapProvider>
        <SwapTokenContextProvider>
        <Component {...pageProps} />
        </SwapTokenContextProvider>
      </MarketCapProvider>
    
    </ThirdwebProvider>
  )
}
