import Image from 'next/image'
import CardImage3 from '../public/img/truckPic1.jpg'
import TruckImg from '../public/img/20img.jpg'
import TruckImg2 from '../public/img/42img.jpg'
import Script from 'next/script'

const Card = () => {
    return(
        <>
        <div>
            <div className="card w-3/5 h-86 mx-auto bg-base-100 shadow-xl flex flex-col space-x-0">
                <div className="card-body">
                    <h2 className="card-title">C-G2654</h2>
                    <Image width={500} height={500} src={TruckImg} className="w-80 card-image hover:brightness-75"/>
                    <div className="text-white font-bold justify-start text-3xl">
                        <span className="invisible relative bottom-40 left-28 p-1 para">Over weight: 0kg</span> <br />
                        <span className="invisible relative bottom-40 left-28 p-1 para">Vehicle Owner: Raju Singh</span> <br />
                        <span className="invisible relative bottom-40 left-28 p-1 para">Status: Running</span>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">C-G2654</h2>
                    <Image width={500} height={500} src={TruckImg2} className="w-80 card-image hover:brightness-75"/>
                    <div className="text-white font-bold justify-start text-3xl">
                        <span className="invisible relative bottom-40 left-28 p-1 para">Over weight: 250kg</span> <br />
                        <span className="invisible relative bottom-40 left-28 p-1 para">Vehicle Owner: Raj Prakash Yadav</span> <br />
                        <span className="invisible relative bottom-40 left-28 p-1 para">Status: Stopped</span>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">C-G2654</h2>
                    <Image width={500} height={500} src={CardImage3} className="w-80 card-image hover:brightness-75"/>
                    <div className="text-white font-bold justify-start text-3xl">
                        <span className="invisible relative bottom-40 left-28 p-1 para">Over weight: 122kg</span> <br />
                        <span className="invisible relative bottom-40 left-28 p-1 para">Vehicle Owner: Chintu Sharma</span> <br />
                        <span className="invisible relative bottom-40 left-28 p-1 para">Status: Stopped</span>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">C-G2654</h2>
                    <Image width={500} height={500} src={CardImage3} className="w-80 card-image hover:brightness-75"/>
                    <div className="text-white font-bold justify-start text-3xl">
                        <span className="invisible relative bottom-40 left-28 p-1 para">Over weight: 88kg</span> <br />
                        <span className="invisible relative bottom-40 left-28 p-1 para">Vehicle Owner: Chaman Jaiswal</span> <br />
                        <span className="invisible relative bottom-40 left-28 p-1 para">Status: Stopped</span>
                    </div>
                </div>
            </div>
        </div>
        <Script>
            {`
                document.getElementsByClassName("card-image")[0].addEventListener("mouseover", () => {
                    document.getElementsByClassName("para")[0].classList.remove("invisible")
                    document.getElementsByClassName("para")[1].classList.remove("invisible")
                    document.getElementsByClassName("para")[2].classList.remove("invisible")
                })
                document.getElementsByClassName("card-image")[1].addEventListener("mouseover", () => {
                    document.getElementsByClassName("para")[3].classList.remove("invisible")
                    document.getElementsByClassName("para")[4].classList.remove("invisible")
                    document.getElementsByClassName("para")[5].classList.remove("invisible")
                })
                document.getElementsByClassName("card-image")[2].addEventListener("mouseover", () => {
                    document.getElementsByClassName("para")[6].classList.remove("invisible")
                    document.getElementsByClassName("para")[7].classList.remove("invisible")
                    document.getElementsByClassName("para")[8].classList.remove("invisible")
                })
                document.getElementsByClassName("card-image")[3].addEventListener("mouseover", () => {
                    document.getElementsByClassName("para")[9].classList.remove("invisible")
                    document.getElementsByClassName("para")[10].classList.remove("invisible")
                    document.getElementsByClassName("para")[11].classList.remove("invisible")
                })

                document.getElementsByClassName("card-image")[0].addEventListener("mouseout", () => {
                    document.getElementsByClassName("para")[0].classList.add("invisible")
                    document.getElementsByClassName("para")[1].classList.add("invisible")
                    document.getElementsByClassName("para")[2].classList.add("invisible")
                })
                document.getElementsByClassName("card-image")[1].addEventListener("mouseout", () => {
                    document.getElementsByClassName("para")[3].classList.add("invisible")
                    document.getElementsByClassName("para")[4].classList.add("invisible")
                    document.getElementsByClassName("para")[5].classList.add("invisible")
                })
                document.getElementsByClassName("card-image")[2].addEventListener("mouseout", () => {
                    document.getElementsByClassName("para")[6].classList.add("invisible")
                    document.getElementsByClassName("para")[7].classList.add("invisible")
                    document.getElementsByClassName("para")[8].classList.add("invisible")
                })
                document.getElementsByClassName("card-image")[3].addEventListener("mouseout", () => {
                    document.getElementsByClassName("para")[9].classList.add("invisible")
                    document.getElementsByClassName("para")[10].classList.add("invisible")
                    document.getElementsByClassName("para")[11].classList.add("invisible")
                })
            `}
        </Script>
        </>
    )
}

export default Card;