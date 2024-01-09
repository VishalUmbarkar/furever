import './AdoptPet.css'


import { AdoptPetData } from '../../Data'
import { useParams } from 'react-router-dom'
import MainBg from '../MainBg/MainBg';
import Button from '../Button/Button';
import GuideLines from '../GuideLines/GuideLines';
import { useEffect } from 'react';

const MainAdoptPet = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { MainAdoptPet_MainId } = useParams();
    const thisMainAdoptPetId = parseInt(MainAdoptPet_MainId)
    const thisMainAdoptPet = AdoptPetData.find((CustomPetI) => CustomPetI.id === thisMainAdoptPetId)

    if (!thisMainAdoptPet) {
        return (
            <>
                <MainBg MainBg_ImgUrl={"/assets/Home.jpg"} MainBg_h5Content={"Sorry Pet Not Found"} />
                <div className="ThisMainAdoptPetError">
                    <h6>Sorry Pet is Not Found For Adoption</h6>
                </div>
            </>
        )
    }

    return (
        <>
            <MainBg MainBg_ImgUrl={thisMainAdoptPet.PetAdoptBGImg} BtnTextMain={"View More Pets"} LinkToLink={"/AdoptPetPage"} MainBg_h6Content={thisMainAdoptPet.PetAdoptName} />

            <div className="thisMainAdoptPet container">
                <div className="row">

                    <div className="col-lg-6">
                        <img src={thisMainAdoptPet.PetAdoptImg} className='img-fluid' alt={thisMainAdoptPet.PetAdoptName} />
                    </div>

                    <div className="col-lg-6">
                        <h6>{thisMainAdoptPet.PetAdoptName}</h6>
                        <p>
                            {thisMainAdoptPet.PetAdoptDescription}
                        </p>
                        <Button LinkTo={"https://forms.gle/c46CP3SPsKbXKfAn7"} TargetChecking={"_blank"} Btntext={"Adopt Pet"} />
                    </div>


                </div>

                <div className="row secondRow">

                    <h6>More Details About <span>{thisMainAdoptPet.PetAdoptName}</span></h6>
                    {thisMainAdoptPet.PetAdopt_Specification.map((Specification, index) => (
                        <p key={index} className='mainP'>
                            <p className="Specification_Header">{Specification.PetAdopt_Specification_Header}</p>
                            <p className="Specification_Desc">{Specification.PetAdopt_Specification_Desc}</p>
                        </p>
                    ))}
                </div>

                <div className="row ThirdRow">
                    <p>
                        {thisMainAdoptPet.PetAdopt_FinalMess}
                    </p>
                </div>

                <GuideLines />

            </div>

        </>
    )
}

export default MainAdoptPet