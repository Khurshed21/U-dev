

import { Swiper, SwiperSlide } from "swiper/react";
import csharp  from "../../assets/img/csharp.png";
import net  from "../../assets/img/net.png";
import scifi  from "../../assets/img/scifi.svg";
import Button from "../Button";
import { Pagination } from "swiper/modules";

const Dev = ({bg,header,text}) => {
  return (
    <div>
         <div className='bg-transparent flex font-montserrat flex-wrap justify-center pt-10  pb-[50px]'>
        <div data-aos="fade-up"
     data-aos-duration="3000"  style={{
      animation: 'float 3s ease-in-out infinite',
     }}
     
     className={`sm:w-[1360px] w-[350px] ${bg} flex flex-wrap md:justify-around justify-around  md:gap-[40px] p-[30px] items-center rounded-2xl pb-5 h-[550px] sm:h-[520px] md:h-[420px] shadow-lg`}>
          <div className='mb-3'>
            <h1 className='w-[300px] text-[20px] sm:text-[30px] font-[500]'>{header}</h1>
            <p className='w-[250px] md:w-[350px] font-roboto lg:text-[16px] md:text-[16px] font-thin text-[13px] '>{text}</p> <br />
            <div className={`bg-custom-gradient2 h-[40px] rounded-l-xl lg:w-[300px] w-[250px] flex flex-wrap gap-[30px] items-center`}>
              <img  className='ml-7' src={net} alt="Network Icon" />
              <img src={csharp} alt="C# Icon" />
            </div><br />
            <Button text={'Learn more'}></Button>
          </div>
            
          <div className='bg-white text-black lg:w-[555px] md:w-[300px] w-[200px] sm:w-[350px] h-[220px] md:h-[300px] rounded-3xl flex flex-wrap '>
            <Swiper
              pagination={{ clickable: true }}
              className="mySwiper"
              modules={[Pagination]}
              loop={true}
            >
              <SwiperSlide className='flex flex-wrap justify-center items-center'>Slide 1</SwiperSlide>
              <SwiperSlide className='flex flex-wrap justify-center items-center'>Slide 2</SwiperSlide>
              <SwiperSlide className='flex flex-wrap justify-center items-center'>Slide 3</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dev