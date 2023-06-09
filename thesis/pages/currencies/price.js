import {useState, useEffect} from 'react'
import Header from '../../components/Header'
import CoinDetail from '../../components/CoinDetail'


const Price = () =>{

    const [coinName, setCoinName] = useState(null);
    const [coinSymbol, setCoinSymbol] = useState('');
    const [price, setPrice] = useState('');

    useEffect(()=>{
        getURLData()
    },[])

    const getURLData = async () =>{
        const queryString = window.location.search
        //window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

        const urlParams = new URLSearchParams(queryString);

        setCoinName(urlParams.get('coin'));
        setPrice(Number(urlParams.get('price')).toLocaleString());
        setCoinSymbol(urlParams.get('symbol'));
    }

    return (
        <div>
            <Header/>
            <CoinDetail coinName={coinName} price={price} symbol={coinSymbol} />
        </div>    )
}

export default Price