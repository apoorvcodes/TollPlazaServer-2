import Image from 'next/image'
import HeroImg from "../public/img/truck.svg"
const Hero = () => {
  return (
    <div className='max-h-screen w-screen bg-moon pl-32 pr-32 pt-12 '>
       <div className='flex justify-between items-center flex-row'>
           <div className='flex flex-col '>
                <div className='text-[5.75rem] text-white font-extrabold'>
                   Welcome to<span className='text-rose'>Toll Plaza</span>
                </div> 
                <div className='text-6xl text-white font-bold'>
                    a <span className='text-rose'>project to detect overweight vehicles</span>
                </div>  
                <div className='pt-8 font-sans'>
                </div>
            </div>
            <Image src={HeroImg} />
        </div> 
    </div>
  )
}

export default Hero;