import Image from 'next/image'
import HeroImg from "../public/img/truck.svg"

const Hero = () => {
  return (
    <div className='max-h-screen pt-36 pb-36 flex justify-center items-center w-screen bg-moon pl-32  '>
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