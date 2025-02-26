import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuotes } from '../../../redux/action';
import { useLoader } from '../../context/LoaderContext';
import Loader from '../loader';
const ShowQuotes = () => {
    const { loading, startLoading, stopLoading } = useLoader();
    const dispatch = useDispatch();
    const quotes = useSelector((state) => state.quotes);
    const [error, setError] = useState(null);

    useEffect(() => {
        startLoading();
        const fetchQuotes = async () => {
            try {
                const response = await fetch('https://dummyjson.com/quotes');
                const data = await response.json();
                dispatch(setQuotes(data.quotes));
            } catch (err) {
                setError(err.message);
            } finally {
                stopLoading();
            }
        };
        fetchQuotes();
    }, [dispatch]);
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
        <h1 className="text-2xl font-bold mb-4">Quotes</h1>
        {loading ?(<Loader/>):(
        <ul>
            {quotes.map((quote) => (
            <li key={quote.id} className="mb-3 border p-2 bg-[#fff]">
                <p className="text-lg">{quote.quote}</p>
            </li>
            ))}
        </ul>
            )}
        </div>
    );
};

export default ShowQuotes;