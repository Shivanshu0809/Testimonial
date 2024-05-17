import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
    let review =props.review;
  return (
    <div className='flex flex-col items-center justify-center h-[90%] gap-2 '>
        <div className='w-[140px] h-[140px] absolute top-[-10%] left-[5%] z-20 max-sm:left-[50%] max-sm:translate-x-[-50%] max-sm:w-[100px] max-sm:h-[100px] max-sm:top-[-3%]'>
            <img className='rounded-full' src={review.image}/>
            <div className='w-[140px] h-[140px] rounded-full bg-violet-500 top-[-5%] left-2 absolute z-[-1] max-sm:w-[100px] max-sm:h-[100px]' ></div>
        </div>

        <div>
            <p className='text-2xl font-medium max-sm:text-xl'>{review.name}</p>
        </div>

        <div className='mt-[-1%] uppercase text-xs font-medium text-gray-500 '>
            <p>{review.job} </p>
        </div>

        <div className='text-violet-500 mt-3'>
        <FaQuoteLeft className='mx-auto text-center max-sm:text-xs' />
        </div>
        
        <div>
            <p className='max-sm:text-xs'> {review.text}</p>
        </div>
        <div className='text-violet-500'>
            <FaQuoteRight className='mx-auto text-center max-sm:text-xs'/>
        </div>

    </div>
  )
}

export default Card;