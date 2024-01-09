// For Components
import MainBg from '../../Components/MainBg/MainBg'
import Content from '../../Components/Content/Content'
import AllAdoptPet from '../../Components/AdoptPet/AllAdoptPet'
import { useEffect } from 'react'

const AdoptPetPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <MainBg MainBg_ImgUrl={"https://cdn.pixabay.com/photo/2023/11/24/17/13/ai-generated-8410330_640.png"} BtnTextMain={"Get Back To Home"} LinkToLink={"/"} MainBg_h6Content={"Adopt Now"} MainBg_h5Content={"Where FurEver Beginnings Happen, One Loving Home at a Time."} />

            <div className="AdoptPet container">
                <Content Content_h6Text={"Adopt Pet Now"} />
                <AllAdoptPet />
            </div>


        </>
    )
}

export default AdoptPetPage