import MainCard from '../../components/MainCard/MainCard'
import phones from "../../assets/img/phones.svg";
import green from "../../assets/img/green.svg";
import dev from "../../assets/img/developer.svg";
import Stage from '../../components/Stage/Stage';
import Price from '../../components/Price/Price';
import Projects from '../../components/Projects/Projects';
import Animation from '../../components/Animation/Animation';

const Mobile = () => {
  return (
    <div className='bg-black font-montserrat mb-[100px] relative z-10 h-fit w-full pt-5 text-white'>
        <Animation />
        <MainCard  header={'Разработка мобильных приложений'} text={'Мы превращаем ваши идеи в удобные и надежные мобильные приложения для iOS и Android, создавая высококачественные и функциональные решения.'} img={phones}></MainCard>

        <h1 className='text-[30px] font-[700] mt-5 mb-5 text-center'>Этапы разработки</h1>

       <section className='flex flex-wrap justify-center items-center'>
       <section className='flex flex-wrap justify-center w-[1500px] gap-10 items-center'>
            <Stage bg={'bg-[#333333]'} bg2={'bg-black'} num={'1'} text={'Сбор информации и аналитика'}></Stage>
            <Stage bg={'bg-[#333333]'} bg2={'bg-black'} num={'2'} text={'Техническое задание'}></Stage>
            <Stage bg={'bg-[#333333]'} bg2={'bg-black'} num={'3'} text={'Прототип програмного обеспечения'}></Stage>
            <Stage bg={'bg-[#333333]'} bg2={'bg-black'} num={'4'} text={'UX/UI дизайн интерфейса'}></Stage>
            <Stage bg={'bg-[#333333]'} bg2={'bg-black'} num={'5'} text={'Разработка ПО'}></Stage>
            <Stage bg={'bg-[#333333]'} bg2={'bg-black'} num={'6'} text={'Тестирование продукта'}></Stage>

        </section>
       </section>

       <section className='flex flex-wrap justify-center items-center'>
       <section className='  mt-[100px]  pb-5 w-[1380px] bg-[#333333] overflow-y-auto rounded-[30px] h-[620px]'>
            
            <div className='ml-[50px] pt-[20px]'>
            <h1 className='text-[30px] font-[700]'>Стоимость разработки мобильного приложения</h1>
            <p className='text-[20px]'>Udev Solutions — ведущий поставщик инновационных ИТ-решений, <br /> специализирующийся на цифровом маркетинге и управлении ИТ-проектами.</p>
            </div>
    
                <div className='ml-[50px] mt-[40px] flex flex-wrap gap-[200px] '>
                <div>
                <Price header={'Простое приложения'} deadline={'2-3 месяца'}></Price><br /><br />
                <Price header={'Среднее приложения'} deadline={'4-6 месяца'}></Price><br /><br />
                <Price header={'Сложное приложения'} deadline={'6+ месяца'}></Price>
                </div>
                <img src={dev} className='h-[430px]' alt="" />
                </div>
    
             </section>
       </section>

        <h1 className='text-[30px] font-[700] text-center mt-10'>Наши проекты</h1>
         <Projects bg={'bg-[#2B5F5E]'} header={'GreenPower'} text={'Аренда power-bank'}  img={green} />
            

    </div>
  )
}

export default Mobile