import axios from "axios";
import { createContext, useEffect, useState } from "react";

const NewsContext = createContext()

const NewsProvider = ({ children }) =>
{
    const [ category, setCategory ] = useState('general');
    const [ news, setNews ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ totalNews, setTotalNews ] = useState(0);

    useEffect(() =>
    {
        const consultApi = async () =>
        {
            const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios(url)

            setNews(data.articles);
            setTotalNews(data.totalResults)
            setPage(1)
        }

        consultApi();
    }, [ category ]);

    useEffect(() =>
    {
        const consultApi = async () =>
        {
            const url = `https://newsapi.org/v2/top-headlines?country=co&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios(url)

            setNews(data.articles);
            setTotalNews(data.totalResults)
        }

        consultApi();
    }, [ page ]);


    const handleChangeCategory = e =>
    {
        setCategory(e.target.value);
    }

    const handlePageChange = (e, value) =>
    {
        setPage(value)
    }


    return (
        <NewsContext.Provider value={{
            category,
            handleChangeCategory,
            news,
            totalNews,
            handlePageChange,
            page
        }}>
            {children}
        </NewsContext.Provider>
    )
}

export
{
    NewsProvider
};

export default NewsContext