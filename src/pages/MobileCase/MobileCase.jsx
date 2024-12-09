import green from "../../assets/img/greenautoicon.svg";
import green1 from "../../assets/img/green1.svg";
import green2 from "../../assets/img/green2.svg";
import green3 from "../../assets/img/green3.svg";
import green4 from "../../assets/img/green4.svg";
import Button from "../../components/Button";

import Animation from "../../components/Animation/Animation";


const MobileCase = () => {
  return (
    <div className='bg-black font-montserrat relative z-10 h-fit w-full зb-[100px] flex flex-wrap  justify-start  items-center text-white'>
        <Animation />
        
        <section className=" ml-0 sm:ml-[100px] mt-10">
            <div className="flex flex-wrap gap-5 items-center">
                <img src={green} alt="" />
                <h1 className="text-[50px] font-[700]">Кейс по разработке мобильного <br /> приложения</h1>
            </div>
            <div>
                <p>Мы разработали комплексное программное обеспечение для управления арендой Power-Bank станций — Green <br /> Power. Это удобное решение для пользователей, которое позволяет легко находить, арендовать и использовать <br /> станции для зарядки мобильных устройств. Также система поддерживает трансляцию рекламы через админ- <br />панель, что расширяет функциональные возможности приложения.</p> <br />

                <button className='bg-[white] active:bg-gray-600 w-[200px] h-[40px] rounded-xl' >
            <h1 className='text-[black] text-[15px] font-[600]'>Заказать разработку</h1>
        </button>
            </div>
        </section>

        <section className="flex flex-wrap gap-[30px] ml-0 sm:ml-[100px] mt-[50px] items-center">
          <img src={green1} alt="" />
          <img src={green2} alt="" />
          <img src={green3} alt="" />
          <img src={green4} alt="" />
        </section>
<br />
        <section className="flex flex-wrap ml-0 sm:ml-[100px] mt-[50px] gap-[120px] ">

          <div>
            <h1 className="text-[20px] font-[600]">1.Сбор и аналитика</h1>
            <p>На этом этапе мы тщательно изучили <br /> требования заказчика, провели анализ <br /> рынка и определили ключевые функции, <br /> необходимые для реализации проекта.</p>
          </div>

          <div>
            <h1 className="text-[20px] font-[600]">2.Прорисовка UI/UX</h1>
            <p>Мы создали прототипы интерфейса,<br /> которые обеспечивают интуитивно <br /> понятный и удобный дизайн для <br /> конечных пользователей. Акцент был <br /> сделан на простоту и удобство <br /> взаимодействия с приложением.</p>
          </div>

          <div>
            <h1 className="text-[20px] font-[600]">3.Разработка ПО</h1>
            <p>Основной этап разработки включал <br /> создание серверной и клиентской части <br /> приложения. Мы реализовали ключевые <br /> функции, такие как регистрация <br /> пользователей, аренда станций, <br /> управление балансом, а также <br /> интеграцию с платежными системами.</p>
          </div>

          <div>
            <h1 className="text-[20px] font-[600]">4.Тестирование</h1>
            <p>Мы создали прототипы интерфейса, <br /> которые обеспечивают интуитивно <br /> понятный и удобный дизайн для <br /> конечных пользователей. Акцент был <br /> сделан на простоту и удобство <br /> взаимодействия с приложением.</p>
          </div>

          <div>
            <h1 className="text-[20px] font-[600]">5.Релиз</h1>
            <p>Финальный этап — запуск приложения <br /> Gree Power, который был успешно <br /> произведен. Приложение доступно для <br /> пользователей через App Store и Google Play.</p>
          </div>

        </section>
<br />

    </div>
  )
}

export default MobileCase