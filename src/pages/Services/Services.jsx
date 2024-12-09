
import Projects from "../../components/Projects/Projects";

import dts from "../../assets/img/dtsproject.svg";
import inovation from "../../assets/img/inovation.svg";
import green from "../../assets/img/green.svg";
import MainCard from "../../components/MainCard/MainCard";
import Animation from "../../components/Animation/Animation";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className='bg-black font-montserrat pb-[100px] relative z-10 text-white pt-10'>
        <Animation />
        <div className=" ml-5">
        <MainCard  header={'Наши работы'} text={'Наши работы — это примеры успешных проектов, реализованных командой Udev Solutions. Мы гордимся каждым из них, будь то разработка мобильных приложений, веб-платформ или комплексных IT-решений. Каждый проект отражает наше стремление к инновациям, качеству и эффективным результатам для наших клиентов.'}></MainCard>
        </div>

    <ul className='text-[25px] flex flex-wrap static justify-center cursor-pointer gap-8 font-[600]'>
      <li>All</li>
      <li>Web</li>
      <Link to={'/Mobile'}>Mobile</Link>
      <li>ML</li>
    </ul> 

      <Projects bg={'bg-[#466C7C]'} header={'Logistic System'} text={'Модуль DTS логистики'} img={dts} /><br/>
      <Projects bg={'bg-[#2B5F5E]'} header={'Innovation Agency Of Republic Tajikistan'} text={'Сайт агенства инновации РТ'}  img={inovation} /><br/>
      <Projects bg={'bg-[#2B5F5E]'} header={'GreenPower'} text={'Сайт агенства инновации РТ'}  img={green} />


     
        
    </div>
  )
}

export default Services