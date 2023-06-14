import { useState, useEffect } from "react"
import axios from "axios"
import { RAPID_API_KEY } from 'react-native-dotenv'

const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    // RapidAPI jobs api options
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query,
        },
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    }

    // fetch data from api
    const fetchData = async () => {
        setIsLoading(true)

        try {
            const res = await axios.request(options)

            setData(res.data.data)
            setIsLoading(false)
        } catch (err) {
            setError(err)
            alert('There was an error fetching data')
        } finally {
            setIsLoading(false)
        }
    }

    // fetch data on page load
    useEffect(() => {
        fetchData()
    }, [])

    // refetch function if data not properly loading when clicking to refetch data
    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    // return fetched data
    return { data, isLoading, error, refetch }
}