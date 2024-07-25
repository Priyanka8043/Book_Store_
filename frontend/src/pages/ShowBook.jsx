import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  // const params = useParams();
  // const id = params.id;
  

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   console.log('Fetching book details for ID:', id);
  
  //   setLoading(true);
  
  //   axios
  //     .get(`http://localhost:4000/books/${id}`)
  //     .then((response) => {
  //       console.log('Fetched data:', response.data);
  //       setBook(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error.response || error.message);
  //       setLoading(false);
  //     });
  // }, [id]);
  

  return (
    <div className='p-4'>

      <BackButton />
      <h1 className='text-3xl my-6 mx-4 '>Show Book</h1>

      {loading ? (
        <Spinner />  //if loading true
      ) : (   //else
        <div className='flex flex-col m-auto border-2 border-sky-400 rounded-xl w-fit p-4 bg-blue-100'>

          <div className='my-4'>
            <span className='text-xl mr-4 text-blue-900'>Id - </span>
            <span>{book._id}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-blue-900'>Title - </span>
            <span>{book.title}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-blue-900'>Author - </span>
            <span>{book.author}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-blue-900'>Publish Year - </span>
            <span>{book.publishYear}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-blue-900'>Create Time - </span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          
          <div className='my-4'>
            <span className='text-xl mr-4 text-blue-900'>Last Update Time - </span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;