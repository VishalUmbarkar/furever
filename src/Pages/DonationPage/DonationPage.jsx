import './DonationPage.css'
import { useEffect } from 'react'
// For Components
import MainBg from '../../Components/MainBg/MainBg'

const DonationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <MainBg MainBg_ImgUrl={"https://cdn.pixabay.com/photo/2023/11/14/23/35/animal-8388934_640.jpg"} MainBg_h6Content={"Gift a Paw"} MainBg_h5Content={"Donate to Make FurEver Dreams Come True."} />

            <div className="Donation container">
                <h6>We Are Not Taking Payments Till Now </h6>
                <h5>Sorry For Inconvenience</h5>

            </div>

        </>
    )
}

export default DonationPage