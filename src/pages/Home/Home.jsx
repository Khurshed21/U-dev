import React from 'react';
import Button from '../../components/Button';
import uicon from "../../assets/img/uicon.png";
import net from "../../assets/img/net.png";
import csharp from "../../assets/img/csharp.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Home = () => {
  const shadowStyle = {
    boxShadow: '10px 10px 20px rgba(138, 43, 226, 0.5), -10px -10px 20px rgba(138, 43, 226, 0.5)',
  };

  return (
    <div className='bg-custom-gradient h-screen w-full'>
      <div className='flex flex-wrap justify-around items-center'>
        <div>
          <h1 className='text-[40px] font-[600] w-[450px]'>Innovative IT Solutions for a Digital World</h1><br />
          <h2 className='font-[300] w-[550px]'>Transforming your business with cutting-edge technology, agile methodologies, and comprehensive digital strategies.</h2><br />
          <Button text={'Contact us'}></Button>
        </div>
        <div>
          <img src={uicon} alt="UI Icon" />
        </div>
      </div>

      <div className='flex flex-wrap justify-around items-center bg-[black] pt-[50px] pb-[50px]'>
        <div>
          <h1 className='font-[600] text-[30px]'>About us</h1><br />
          <h2 className='font-[300] w-[600px]'>Udev Solutions is a leading provider of innovative IT solutions, specializing in digital marketing, IT project management, and the development of cutting-edge digital products. Our team leverages the AGILE methodology, ensuring flexibility and rapid adaptation to changes, delivering high-quality results.</h2>
          <h2 className='text-[30px] font-[100] text-[gray]'>#speed #method #hypothesis</h2>
        </div>
        <div className='w-[588px] h-[360px] bg-[#0A031A] rounded-2xl flex flex-wrap justify-center items-center'>
          <img src="https://img.icons8.com/?size=100&id=36067&format=png&color=EBEBEB" alt="Icon" />
        </div>
      </div>

      <div className='bg-[black] h-[50px] flex flex-wrap justify-center items-center'>
        <div style={shadowStyle} className='w-[325px] bg-[#0C021B] flex flex-wrap justify-center items-center rounded-2xl h-[60px] shadow-lg'>
          <h1>Services</h1>
        </div>
      </div>

      <div className='bg-black flex flex-wrap justify-center pb-[100px]'>
        <div style={shadowStyle} className='w-[1325px] bg-[#0C021B] flex flex-wrap justify-around p-[30px] items-center rounded-2xl h-[420px] shadow-lg'>
          <div>
            <h1 className='w-[200px] text-[40px] font-[600]'>Website Development</h1>
            <h2 className='w-[400px] text-[18px] font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</h2>
            <div className='bg-custom-gradient2 h-[40px] rounded-l-xl w-[500px] flex flex-wrap gap-[30px] items-center'>
              <img className='ml-7' src={net} alt="Network Icon" />
              <img src={csharp} alt="C# Icon" />
            </div><br />
            <Button text={'Learn more'}></Button>
          </div>

          <div className='bg-slate-600 w-[755px] h-[360px] rounded-3xl flex flex-wrap '>
            <Swiper
              pagination={{ clickable: true }}
              className="mySwiper"
              modules={[Pagination]}
            >
              <SwiperSlide className='flex flex-wrap justify-center items-center'>Slide 1</SwiperSlide>
              <SwiperSlide className='flex flex-wrap justify-center items-center'>Slide 2</SwiperSlide>
              <SwiperSlide className='flex flex-wrap justify-center items-center'>Slide 3</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className='bg-black flex flex-wrap justify-center'>
        <div style={shadowStyle} className='w-[1325px] bg-[#0C021B] flex flex-wrap justify-around p-[30px] items-center rounded-2xl h-[420px] shadow-lg'>
          <div>
            <h1 className='w-[200px] text-[40px] font-[600]'>Mobile App Development</h1>
            <h2 className='w-[400px] text-[18px] font-[500]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</h2>
            <div className='bg-custom-gradient2 h-[40px] rounded-l-xl w-[500px] flex flex-wrap gap-[30px] items-center'>
              <img className='ml-7' src={net} alt="Network Icon" />
              <img src={csharp} alt="C# Icon" />
            </div><br />
            <Button text={'Learn more'}></Button>
          </div>

          <div className='bg-slate-600 w-[755px] h-[360px] rounded-3xl flex flex-wrap '>
            <Swiper
              pagination={{ clickable: true }}
              className="mySwiper"
              modules={[Pagination]}
            >
              <SwiperSlide className='flex flex-wrap justify-center items-center'>Slide 1</SwiperSlide>
              <SwiperSlide className='flex flex-wrap justify-center items-center'>Slide 2</SwiperSlide>
              <SwiperSlide className='flex flex-wrap justify-center items-center'>Slide 3</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

        <div className='flex flex-wrap justify-around items-center pt-[100px] bg-black pb-[100px]'>

        <div className='bg-black flex flex-wrap justify-center'>
        <div style={shadowStyle} className='w-[400px] bg-[#0C021B] flex flex-wrap justify-around  items-center rounded-2xl h-[300px] shadow-lg'>
          <div>
            <h1 className=' text-[30px] font-[600] text-center'>Website Development</h1><br />
            <h2 className='w-[400px] text-[18px] font-[500] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</h2> 
          </div>
        </div>
      </div>

      <div className='bg-black flex flex-wrap justify-center'>
        <div style={shadowStyle} className='w-[400px] bg-[#0C021B] flex flex-wrap justify-around  items-center rounded-2xl h-[300px] shadow-lg'>
          <div>
            <h1 className=' text-[30px] font-[600] text-center'>Website Development</h1><br />
            <h2 className='w-[400px] text-[18px] font-[500] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</h2> 
          </div>
        </div>
      </div>

      <div className='bg-black flex flex-wrap justify-center'>
        <div style={shadowStyle} className='w-[400px] bg-[#0C021B] flex flex-wrap justify-around  items-center rounded-2xl h-[300px] shadow-lg'>
          <div>
            <h1 className=' text-[30px] font-[600] text-center'>Website Development</h1><br />
            <h2 className='w-[400px] text-[18px] font-[500] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</h2> 
          </div>
        </div>
      </div>

        </div>      

        <footer className='bg-custom-gradient3 h-[200px] flex flex-wrap justify-around items-center'>
            <ul className='w-[350px] '>
                <li className='pb-[5px]'>Location: Dushanbe, Republic Tajikistan, Golden Cloud 123 </li>
                <li className='pb-[5px]'>Email : info@udev.solutions</li>
                <li className='pb-[5px]'>Phone :+992 768000000</li>
            </ul>

            <ul className='w-[350px] leading-8'>
                <li>Services</li>
                <li>Porfolio</li>
                <li>Awards</li>
            </ul>

            <ul className='w-[350px] leading-8'>
                <li>Our Products</li>
                <li>Contacts</li>
                <li>About us</li>
            </ul>

            <ul className='w-[350px] leading-8'>
                <li>Terms Conditions</li>
                <li>Refund & Cancellation</li>
                <li>Privacy Policy</li>
            </ul>

        </footer>

            

    </div>
  );
};

export default Home;
