import { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        if (!currency) return
        const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

        fetch(URL)
            .then((res) => res.json())
            .then((resJson) => {
                if (resJson && resJson[currency]) setData(resJson[currency])
                else setData(resJson)
            })
            .catch((err) => {
                console.error('Failed to fetch currency data', err)
                setData({})
            })
    }, [currency])

    return data
}

export default useCurrencyInfo