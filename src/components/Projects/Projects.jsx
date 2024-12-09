
import gerb from "../../assets/img/gerb.svg";
import dts from "../../assets/img/dtsproject.svg";
import { Link } from "react-router-dom";

const Projects = ({bg,header,text,img}) => {
  return (
    <div>

<section className="flex flex-wrap font-montserrat justify-center gap-5 md:gap-[130px] items-center">

<div className={`w-[830px] ${bg} mt-10 h-[380px] md:h-[350px] rounded-2xl`}>

<div className="flex  flex-wrap gap-5 p-[10px] items-center">
<img src={gerb} alt="" />
<h1 className=" text-[16px] md:text-[20px]">{header}</h1>
</div>

<div className="mt-[50px] ml-0 md:ml-[100px]">

<h1 className="md:text-[30px] text-[25px] font-[700]">{text}</h1>
<p className='w-[300px] font-roboto' >Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. </p><br />
<div className="flex flex-wrap gap-5 items-center">
<Link to={'/MobileCase'}><button className="w-[170px] h-[46px] bg-transparent text-white border-white border rounded-3xl">Перейти</button></Link>
<h1>Подробнее</h1>
</div> 
</div>

</div>

<img src={img} className="h-[365px]" alt="" />
</section>

    </div>
  )
}

export default Projects