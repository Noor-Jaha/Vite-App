
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: "https://i.pinimg.com/736x/de/f6/7a/def67a51cdbb2723cd7b07e4dc30fc0e.jpg",
        title: "Upto 50% Off on all Men's Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quos voluptas iusto aspernatur nobis dignissimos cum laborum modi, vero voluptatibus harum asperiores beatae alias tempore! Eligendi similique iusto minus rerum?"
    },
       {
        id: 2,
        img: "https://i.pinimg.com/originals/24/c7/b6/24c7b6bc82dec49ffce7f23a0822109f.png",
        title: "Upto 50% Off on all Women's Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quos voluptas iusto aspernatur nobis dignissimos cum laborum modi, vero voluptatibus harum asperiores beatae alias tempore! Eligendi similique iusto minus rerum?"
    },  
      {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_llCcUEh41sAAQzO7WZP6Zp8lMJvbrbpBg&s",
        title: "Upto 50% Off on all Product's sale",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quos voluptas iusto aspernatur nobis dignissimos cum laborum modi, vero voluptatibus harum asperiores beatae alias tempore! Eligendi similique iusto minus rerum?"
    },
];

export const Hero = ({handleOrderPopup}) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseonHover: false,
        pauseonFocus: true,
    };
    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-grey-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300'>
            <div className='h-[700px] w-[700px] bg-primary/40 absolute-top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {ImageList.map((data) => (
                     <div>
                           <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                {data.title}
                                </h1>
                                <p data-aos="fade-up" data-aos-duration="500"
                                data-aos-delay="100" className="text-sm"
                                >
                                {data.description}
                                </p>
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300"
                                >
                                    <button onClick={()=>{     handleOrderPopup();
                                    }}
                                    className="bg:gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                                    >
                                     Order Now
                                    </button>
                                </div>
                            </div>
                            <div className="order-1 sm:-order-2">
                                <div data-aos="zoom-in" data-aos-once="true"  className="relative z-10"
                                >
                                    <img src={data.img} alt="slider images" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto" />
                                </div>
                            </div>
                           </div>
                     </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
