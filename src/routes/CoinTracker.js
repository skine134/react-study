import { useEffect, useState } from "react"

function CoinTracker(){
    // const temp = 
    // {
    //     "id": "btc-bitcoin",
    //     "name": "Bitcoin",
    //     "symbol": "BTC",
    //     "quotes": {
    //         "USD": {
    //             "price": 28103.63004765224,
    //         }
    //     }
    // };
    const [amount,setAmount] = useState(0);
    const [dataArray,setArray] = useState([]);
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response)=>(response.json()))
        .then((json)=>{
            setArray(json)
            setAmount(json.length)
        })

    console.log(dataArray)
    },[])
    return (
        <div className="CoinTracker">
            <h1>Coin Count({amount})</h1>
            {
                amount===0?<strong>Loading...</strong>:
                <select>
                    {
                        dataArray.map((item,idx)=>{
                            let costStr = ""
                            for(let unit in item.quotes)
                            {
                                costStr = `${item.quotes[unit].price} ${unit}`
                            }
                            const text = `${item.name} (${item.symbol}): ${costStr}`
                            return (<option key={item.id}>{text}</option>)
                        })
                    }
                </select>
            }
        </div>
    )
}

export default CoinTracker;