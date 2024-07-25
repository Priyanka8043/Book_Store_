import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BookCard from '../components/home/BookCard';
import BookTable from '../components/home/BookTable';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:4000/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 main-container bg-blue-200 '>

        <div className='flex justify-center items-center gap-x-4 button-container'>
           
            <button
            className='bg-yellow-500 hover:bg-yellow-700 text-black border border-black px-4 py-2 rounded-lg transition duration-300'
            onClick={() => setShowType('table')}
            >
              Table
            </button>

            <button
              className='bg-green-500 hover:bg-green-700 text-black border border-black px-4 py-2 rounded-lg transition duration-300'
              onClick={() => setShowType('card')}
            >
              Card
            </button>

        </div>

        <div className='flex justify-between items-center header-container'>
            <h1 className='text-4xl font-bold text-blue-900 my-5 mx-5 page-title'>Books List</h1>
            <Link to='/books/create' className='add-button-link'>
            <MdOutlineAddBox className='text-blue-900 text-5xl mx-6 add-button-icon' />
            </Link>
        </div>

      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}

    </div>
  )
}

export default Home;

{/* max-md:hidden so that field will be hidden in mobile and tablet size */}
