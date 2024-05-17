import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";
const App = () => {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center flex-col gap-5 bg-gray-200 max-sm:px-4">
     <div className="max-sm:mb-3">
     <h1 className="text-2xl font-bold max-sm:text-xl">Our Testimonials</h1>
        <div className="h-[3px] w-[90px] bg-violet-500 mx-auto" ></div>
     </div>
    
      <div className="text-center w-[650px] items-center flex flex-col bg-white  p-5 relative pt-16 pb-24 hover:shadow-lg transition-all rounded-md max-sm:w-[auto] max-sm:pb-20">
    
        <Testimonials reviews= {reviews}/>
      </div>
    </div>
  );
};

export default App;
