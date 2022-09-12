import React from 'react'

const CTA = () => {
  return (
    <div className='w-[100%] h-[55vh] md:h-[35vh] lg:w-[1280px] lg:h-[384px] bg-volunteerImage  bg-no-repeat flex flex-col items-center justify-center left-[0] right-[0] mx-auto my-[50px] relative'>
      {/* tint */}
      <div className='w-[100%] h-[60vh] lg:w-[1280px] h-[384px] bg-[#0B0706] lg:rounded-[12px] opacity-[0.5] mb-[45px] lg:mb-[0]  absolute top-[0] left-[0] right-[0] mx-auto pt-[100px] '>
        <div className='lg:w-[631px] h-[210px] lg:mb-[0px] lg:h-[199px] flex flex-col items-center  '>
          <h2 className='lg:w-[631px] h-[116px] text-[#FFFFFF] font-[700] text-[40px] lg:text-[48px] leading-[120%] text-center' >You can contribute to make the environment greener!</h2>
          <div className='w-[348px] h-[51px] flex flex-row justify-evenly gap-[10px] '>
            <button className='w-[200px] h-[51px] border-none cursor text-white bg-[#70C174] rounded-[4px] '>Volunteer</button>
            <button className='w-[116px] h-[51px] border-none cursor bg-white border-none text-black rounded-[4px]'>Donate</button>
          </div>
        </div>
      </div>
      {/* content */}
      
    </div>
  )
  
}
export default CTA;