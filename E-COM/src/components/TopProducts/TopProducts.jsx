import React from 'react'
import { FaStar } from 'react-icons/fa'

const ProductData = [
    {
        id: 1,
        img: "https://5.imimg.com/data5/SELLER/Default/2024/1/380494218/CU/IX/LY/37190943/mens-full-sleeve-printed-shirt.png",
        title: "Printed shirt",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum vero, sed dicta corrupti blanditiis dolor saepe velit eum asperiores nihil accusamus totam necessitatibus recusandae esse eos quidem, quisquam repudiandae?",

    },
      {
        id: 2,
        img: "https://www.lushlayers.in/cdn/shop/files/Untitleddesign-2024-01-10T155826.738.png?v=1704882740",
        title: "women shirt",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum vero, sed dicta corrupti blanditiis dolor saepe velit eum asperiores nihil accusamus totam necessitatibus recusandae esse eos quidem, quisquam repudiandae?",

    },
      {
        id: 3,
        img: "https://www.shutterstock.com/image-photo/woman-confidently-smiles-casual-attire-600nw-2699353345.jpg",
        title: "casual wear",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum vero, sed dicta corrupti blanditiis dolor saepe velit eum asperiores nihil accusamus totam necessitatibus recusandae esse eos quidem, quisquam repudiandae?",

    }
]

export const TopProducts = ({handleOrderPopup}) => {
    return (
        <div className='container'>
            <div className='text-left mg-24'>
                <p data-aos="fade-up" className='text-sm text-primary'>
                    Top rated products for you
                </p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>
                    Best products
                </h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi dicta repellendus quisquam expedita nemo minus ratione atque perspiciatis explicabo quis quidem similique adipisci, voluptatum nihil, ut, assumenda reprehenderit qui.
                </p>
                <div>
                      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                        {ProductData.map((data) => (
                            <div data-aos="zoom-in" className='rounded-2xl text-center bg:white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]' key={data.id}>
                                <div>
                                    <img src={data.img} alt="" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
                                </div>
                                <div className='w-full flex items-center justify-center gap-1'>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/><FaStar className='text-yellow-500'/>
                                </div>
                                <h1 className='text-xl font-bold'>
                                    {data.title}
                                </h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                                    {data.description}
                                </p>
                                <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'onClick={handleOrderPopup} >
                                    Order Now
                                </button>
                            </div>
                        ))}
                      </div>
                 </div>
            </div>
        </div>
    )
}
