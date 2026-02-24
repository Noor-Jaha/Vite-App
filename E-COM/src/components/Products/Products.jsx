import React from 'react'
import { FaStar } from 'react-icons/fa';


const ProductList = [
    {
        id: 1,
        img:"https://as1.ftcdn.net/jpg/05/78/27/10/1000_F_578271025_mnHFjzLBHGF7kz3bqq8qTD8G4YdpJlU6.jpg",
        title: "Women Ethenic",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
     {
        id: 2,
        img:"https://static.vecteezy.com/system/resources/previews/008/472/909/non_2x/beautiful-young-asian-woman-with-shopping-bags-file-png.png",
        title: "Women western",
        rating: 4.5,
        color: "Red",
        aosDelay: "200", 
    },
     {
        id: 3,
        img:"https://img.freepik.com/free-photo/happy-woman-holding-her-shopping-bags_329181-9175.jpg?semt=ais_user_personalization&w=740&q=80",
        title: "Goggles",
        rating: 4.9,
        color: "Yellow",
        aosDelay: "400"
    },
      {
        id: 4,
        img:"https://img.freepik.com/premium-photo/picture-lovely-woman-with-shopping-bags_380164-11154.jpg?semt=ais_user_personalization&w=740&q=80",
        title: "Women Ethenic",
        rating: 4.0,
        color: "Black",
        aosDelay: "600"
    },
      {
        id: 5,
        img:"https://img.freepik.com/free-photo/happy-casual-woman-wearing-sunglasses-standing-holding-colorful-shopping-bags_8353-6980.jpg",
        title: "Women Ethenic",
        rating: 4.7,
        color: "Brown",
        aosDelay: "800"
    },
]
export const Products = () => {

    return (
        <div className='mt-14 mb-12'>
         <div className='container'>
           <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary'> Top Selling Products For You</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-sm text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illum vero, sed dicta corrupti blanditiis dolor saepe velit eum asperiores nihil accusamus totam necessitatibus recusandae esse eos quidem, quisquam repudiandae?
            </p>
           </div>
           <div>
            <div className='grid grid-cols-1sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {ProductList.map((data)=> (
                    <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3'>
                        <img src={data.img} alt="cover image" className='h-[220px] w-[150px] object-cover rounded-md' />
                        <div>
                            <h3 className='font-semibold'>{data.title}</h3>
                            <p className='text-sm text-gray-600'>{data.color}</p>
                            <div className='flex items-center gap-1'>
                                <FaStar className="text-yellow-400"/>
                                <span>{data.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
              <div className='flex justify-center'>
                <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>View All Products</button>
              </div>
           </div>
         </div>        
        </div>
    )
}
