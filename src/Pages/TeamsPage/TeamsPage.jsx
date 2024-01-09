import './TeamsPage.css'
import { useEffect } from 'react'

// For Components
import MainBg from '../../Components/MainBg/MainBg'

const TeamsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <MainBg MainBg_ImgUrl={"https://cdn.pixabay.com/photo/2023/10/30/17/25/animal-8353360_640.png"} LinkToLink={"/"} BtnTextMain={"Get Back To Home"} MainBg_h6Content={"FurEver Family"} MainBg_h5Content={"United by Love for Pets."} />

            <div className="TeamsMain container">
                <h6>Sorry For Inconvenience</h6>
                <h5>Teams Page is Coming Soon</h5>
            </div>
        </>
    )
}

export default TeamsPage