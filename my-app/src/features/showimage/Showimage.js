import React from 'react'
import Tag from "@/features/tag/Tag"

const Showimage = ({ images }) => {
  return (
   <>
   {images.map((image, index) => (

    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="flex justify-center bg-blue-200 ">
        <a className="absolute top-2 left-2 rounded-3xl bg-[#3ea8ff] py-1 px-2 text-xs font-bold text-white">
          写真
        </a>
        {/* <div className="p-9 text-5xl">🦾</div> */}
        <img src={image[1]} alt={index} className="w-full h-auto" />
      </div>
      <div className="space-y-4 p-4">
        <div className="space-x-2 leading-3">

           <Tag tags={image[2]}/>

        </div>
        <div className="flex items-center space-x-2">
          <div className="space-y-1">
            {/* <div className="text-xs">mini redpanda</div>
            <div className="text-xs text-gray-500">
              5日前・2min read ♥️2
            </div> */}
          </div>
        </div>
      </div>
    </div>
    ))}    
   </>
  )
}

export default Showimage

