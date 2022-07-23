import Image from 'next/image'
import CardImage from "../public/img/truckPic.jpg"


const Card = () => {
    return(
        <div>
            <div className="card w-3/5 h-86 mx-auto bg-base-100 shadow-xl flex flex-row space-x-0">
                <div className="card-body">
                    <h2 className="card-title">C-G2654</h2>
                    <Image src={CardImage} className="card-image hover:brightness-50 "/>
                    <div>
                        <p className="invisible relative bottom-40 left-28 p-1 para">Over weight: 50</p>
                        <p className="invisible relative bottom-40 left-28 p-1 para">Vehicle Owner: Joe Mama</p>
                        <p className="invisible relative bottom-40 left-28 p-1 para">Status: Stopped</p>
                    </div>
                </div>

                <div className="card-body">
                    <h2 className="card-title">C-G2654</h2>
                    <Image src={CardImage} className="card-image hover:brightness-50"/>
                    <div>
                        <p className="invisible relative bottom-40 left-28 p-1 para">Over weight: 50</p>
                        <p className="invisible relative bottom-40 left-28 p-1 para">Vehicle Owner: Joe Mama</p>
                        <p className="invisible relative bottom-40 left-28 p-1 para">Status: Stopped</p>
                    </div>
                </div>
            </div>
            <div className="card w-3/5 h-86 mx-auto bg-base-100 shadow-xl flex flex-row space-x-0">
                <div className="card-body">
                    <h2 className="card-title">C-G2654</h2>
                    <Image src={CardImage} className="card-image hover:brightness-50"/>
                    <div>
                        <p className="invisible relative bottom-40 left-28 p-1 para">Over weight: 50</p>
                        <p className="invisible relative bottom-40 left-28 p-1 para">Vehicle Owner: Joe Mama</p>
                        <p className="invisible relative bottom-40 left-28 p-1 para">Status: Stopped</p>
                    </div>
                </div>

                <div className="card-body">
                    <h2 className="card-title">C-G2654</h2>
                    <Image src={CardImage} className="card-image hover:brightness-50"/>
                    <div>
                        <p className="invisible relative bottom-40 left-28 p-1 para">Over weight: 50</p>
                        <p className="invisible relative bottom-40 left-28 p-1 para">Vehicle Owner: Joe Mama</p>
                        <p className="invisible relative bottom-40 left-28 p-1 para">Status: Stopped</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;