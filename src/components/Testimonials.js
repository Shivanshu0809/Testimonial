import React, { useState } from 'react';
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


 const Testimonials = (props) => {
    let reviews =props.reviews;
    const [index, setIndex] = useState(0);
    function leftShiftHandler(){
        if(index-1 < 0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler(){

        if(index+1 >= reviews.length){
            setIndex(0);

        }
        else{
            setIndex(index+1);
        }
    }

    
    function SurpriseHandler(){
        let randomIndex = Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
        
    }
  return (
    <div className=' '>
        <Card review={reviews[index]}/>
        <div className='flex items-center mx-auto justify-center gap-4 text-lg text-violet-500 mt-3 font-bold'>
        <button onClick={leftShiftHandler}><FiChevronLeft/></button>
        <button onClick={rightShiftHandler}><FiChevronRight/></button>

        </div>
        <div className='items-center mt-5 justify-center flex '>
            <button className='bg-violet-500 px-5 py-2 rounded-md text-white font-semibold max-sm:py-1 max-sm:px-4 max-sm:text-sm' onClick={SurpriseHandler}>
                Surprise Me
            </button>
        </div>

      


    </div>

  )
}
export default Testimonials;