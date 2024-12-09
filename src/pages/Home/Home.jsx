import React, { useEffect } from 'react';
import uicon from "../../assets/img/uicon.png";
import phones from "../../assets/img/phones.svg";
import lighter from "../../assets/img/lighter.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Aos from 'aos';
import {} from "./Home.css";
import Dev from '../../components/Development/Dev';
import Info from '../../components/Info/Info';
import MainCard from '../../components/MainCard/MainCard';
import Animation from '../../components/Animation/Animation';

const Home = () => {


  useEffect(()=>{
    Aos.init()
  })
  

  return (
    <div className='bg-black h-fit font-montserrat pt-[76px] w-full relative z-10 text-white'>
      <Animation />

     <div className="mb-[92px] rounded-tr-[50px] pl-[70px] pr-[70px]">
      <MainCard  bg={'bg-custom-gradient5'}
       header="Мощные IT-решения для вашего бизнеса" 
       text="Мы предоставляем профессиональные IT-услуги для бизнеса и государственных учреждений. Наши специалисты помогут в разработке, поддержке и модернизации информационных систем, обеспечив надежное и качественное решение ваших задач." 
       img={phones} 
      />
    </div>


        <h1 className='text-[30px] font-[700] pt-10 text-center'>Почему выбирают udev ?</h1>

      <section className='flex flex-wrap justify-center items-center'>
      <section className='flex flex-wrap justify-around gap-[30px]  rounded-3xl p-7 bg-[#202020] w-[1360px] xl:mr-[70px] items-center xl:ml-[80px] mt-5 mb-14'>

<div className='flex flex-wrap gap-5 items-center'>
  <div className='sm:w-[70px] w-[50px] h-[50px] sm:h-[70px] bg-[#323232] rounded-[12px]'>
  </div>
  <div>
    <h1 className='mb-1 font-[700] text-[14px] sm:text-[18px]'>Профессиональная команда</h1>
    <p className='sm:w-[330px] w-[250px] text-[12px] sm:text-[14px]'>Опытные разработчики и дизайнеры с многолетним стажем.</p>
  </div>
</div>

<div className='flex flex-wrap gap-5 items-center'>
  <div className='sm:w-[70px] w-[50px] h-[50px] sm:h-[70px] bg-[#323232] rounded-[12px]'>
  </div>
  <div>
    <h1 className='mb-1 font-[700] text-[14px] sm:text-[18px]'>Индивидуальный подход</h1>
    <p className='sm:w-[330px] w-[250px] text-[12px] sm:text-[14px]'>Разрабатываем решения, полностью соответствующие вашим требованиям.</p>
  </div>
</div>

<div className='flex flex-wrap gap-5  items-center'>
  <div className='sm:w-[70px] w-[50px] h-[50px] sm:h-[70px] bg-[#323232] rounded-[12px]'>
  </div>
  <div>
    <h1 className='mb-1 font-[700]  text-[14px] sm:text-[18px]'>Соблюдение сроков</h1>
    <p className='sm:w-[330px] w-[250px] text-[12px] sm:text-[14px]'>Гарантируем своевременную сдачу проекта без задержек.</p>
  </div>
</div>

<div className='flex flex-wrap gap-5 items-center'>
  <div className='sm:w-[70px] w-[50px] h-[50px] sm:h-[70px] bg-[#323232] rounded-[12px]'>
  </div>
  <div>
    <h1 className='mb-1 font-[700] text-[14px] sm:text-[18px]'>Мгновенная поддержка</h1>
    <p className='sm:w-[330px] w-[250px] text-[12px] sm:text-[14px]'>Наши специалисты на связи 24/7, что позволит вашему бизнесу расти быстрее.</p>
  </div>
</div>


      </section>
      </section>

     <section className='flex flex-wrap justify-center items-center  '>

     <div className='flex flex-wrap justify-center gap-[39px] text-center md:text-start items-center bg-[#333333]  rounded-3xl w-[1350px]  pt-[50px] pb-[50px]'>
        <div >
          <h1 className='font-[600] text-[30px]'>About us</h1><br />
          <h2 className='font-[300] w-[350px] font-roboto sm:w-[400px] md:w-[400px] lg:w-[500px]'>Udev Solutions — ведущий поставщик инновационных IT-решений, специализирующийся на цифровом маркетинге, управлении IT-проектами и разработке передовых цифровых продуктов. Наша команда использует методологию AGILE, обеспечивая гибкость и быструю адаптацию к изменениям, что позволяет достигать высококачественных результатов.</h2>
          <h2 className='text-[30px] font-[100] font-sans mb-5 sm:mb-0 text-[gray]'>#speed #method #hypothesis</h2>
        </div>
        <div className='w-[330px] sm:w-[530px] lg:w-[500px] md:w-[450px] h-[300px] bg-[#0A031A] rounded-2xl flex flex-wrap justify-center items-center'>
          <img src="https://img.icons8.com/?size=100&id=36067&format=png&color=EBEBEB" alt="Icon" />
        </div>
      </div>

     </section>


        <h1 className='text-[30px] h-[50px] mt-[100px] text-center font-[700] font-montserrat'>Сервисы</h1>
      

        <Dev  header={'Website Development'} text={'Мы превращаем ваши идеи в удобные и надежные мобильные приложения для iOS и Android, создавая высококачественные и функциональные решения.'} bg={'bg-[#333333]'} />
        <Dev header={'Разработка мобильных приложений'} text={'Мы превращаем ваши идеи в удобные и надежные мобильные приложения для iOS и Android, создавая высококачественные и функциональные решения.'} bg={'bg-[#333333]'} />
   



        <div className='flex flex-wrap justify-center gap-[0px] md:gap-[200px] items-center  pb-5 sm:pt-[30px] sm:ml-[80px]  sm:pb-[100px]'>

        <Info fade={'fade-down'} header={'Разработка программного обеспечения'}  text={'Разработаем ваше ПО быстро, надёжно и с учётом всех бизнес-задач'}/>
        <Info fade={'fade-up'} header={'Техническая поддержка и сопровождение'}  text={'Обеспечим поддержку ваших систем оперативно, качественно и по выгодной стоимости'}/>
        <Info fade={'fade-down'} header={'Займемся Digital-продвижением вашего решения'}  text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. '}/>

        
        </div>      


    </div>
  );
};

export default Home;
