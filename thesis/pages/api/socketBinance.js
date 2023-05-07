import WebSocket from "ws";


// send price to the client

const BinanceHandle = () =>{

    let lastPrice = null;

    const ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');

    ws.onmessage = (event) =>{
        let stockObject = JSON.parse(event.data);
        let price = parseFloat(stockObject.p).toFixed(2);
        console.log(stockObject.p);
       // stockPriceElement.style.color = !lastPrice || lastPrice === price ? "black": price > lastPrice ? 'green':'red';
        lastPrice = price;

        // send data to client
        ws.emit(
            'on-price',{
                price:price
            }
        )

    }    

}
export default BinanceHandle


