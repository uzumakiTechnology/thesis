export default function handler(req,res) {
    const getData = async () =>{

        // fetch method load all information on the webpage
        const response = await fetch(
            `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.NEXT_PUBLIC_CMC_API_KEY}`,

            {
                method: 'GET',
                headers:{
                    Accept:'*/*'
                },
            }
        )

        const data = await response.json(); // result of parsing the body text as JSON
        res.status(200).json({data})

    }
    getData();
}