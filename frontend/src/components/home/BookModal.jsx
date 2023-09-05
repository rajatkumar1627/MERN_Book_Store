import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const BookModal = ( { book, onClose }) => {
  return (
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
        onClick={onClose}
    >
        <div
            onClick={(event) => event.stopPropagation()}
            className='w-[600px] max-w-full h-[40px] bg-white rounded-xl p-4 flex flex-col relative'
        >
            <AiOutlineClose
                className='absolute right-6 top-6 text-3xl text-red-600 cursor cursor-pointer'
                onClick={onClose}
            />
             <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className="flex justify-start items-center gap-x-2">
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className="my-1">{book.title}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className="my-1">{book.author}</h2>
                </div>
                <p className='mt-4'>Anything You want to show</p>
                <p className='my-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Amet iusto exercitationem eaque ducimus mollitia quibusdam 
                    hic maxime nisi voluptates debitis? Similique, dolores nihil
                    quasi amet culpa magni necessitatibus rem delectus!
                    Dolor dicta quos mollitia, distinctio consequatur soluta 
                    perferendis a modi perspiciatis vero nostrum voluptatem tempore 
                    similique eum pariatur quo, ullam provident ea ipsum maiores cupiditate? 
                    Libero deleniti nulla quaerat totam?
                    Nesciunt quos quod, autem enim unde fuga voluptates nostrum,
                    quam adipisci, eveniet exercitationem officia laboriosam! A, 
                    sunt nihil iste libero ea modi voluptatem ut labore! Dolor blanditiis 
                    eligendi adipisci doloribus?
                </p>
        </div>
    </div>
  );
};

export default BookModal;