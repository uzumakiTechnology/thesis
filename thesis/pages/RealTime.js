import React, { useEffect, useState, useRef } from 'react'
import io from 'socket.io-client'
import { Socket } from 'socket.io-client'

let socket


const RealTime = () => {

    const [price,setPrice] = useState('')


    useEffect(() => {
        socketInitializer()
        //binanceInitializer()
 
     
    } ,[])

    const socketInitializer = async () =>{
        await fetch('/api/socket')
        socket = io()

        socket.on('connect', () =>{
            console.log('Connected');
        })

    }
    const binanceInitializer = async () =>{
        await fetch('/api/socketBinance')
        socket = io()

        socket.on('on-price',(price) =>{
            setPrice(price)
        })
        
    }

    const onChange = () =>{
        socket = io()
        socket.on('on-price',(price) =>{
            setPrice(price)
        })
        return price;
    }


  return (
    <div>
        <h1>{onChange()}</h1>
    </div>
  )
}

export default RealTime