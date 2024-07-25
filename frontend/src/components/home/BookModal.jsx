import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[800px] max-w-full h-[600px] bg-white rounded-xl p-8 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-2 bg-red-300 rounded-lg text-xl'>
          {book.publishYear}
        </h2>
        <h4 className='my-2 text-gray-500 text-lg'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-4'>
          <PiBookOpenTextLight className='text-red-300 text-3xl' />
          <h2 className='my-1 text-xl'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-4'>
          <BiUserCircle className='text-red-300 text-3xl' />
          <h2 className='my-1 text-xl'>{book.author}</h2>
        </div>
        {/* <p className='mt-4 text-lg'>Anything You want to show</p> */}
        <p className='my-4 text-base'>
        
                Embark on a captivating journey through the pages of this thought-provoking and compelling book. 
                Offering a blend of rich storytelling and profound insights, this literary work invites readers to 
                explore the complexities of the human experience.
                As you turn each page, you'll be drawn into a world where characters come to life, 
                and the narrative unfolds with a magnetic force. The author's eloquent prose and keen observations 
               create a vivid and immersive reading experience, making this book a timeless addition to your literary collection.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
