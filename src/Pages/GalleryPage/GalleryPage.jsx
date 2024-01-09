import './GalleryPage.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// For Data
import { GalleryData } from '../../Data'

// For Components
import Content from '../../Components/Content/Content'
import MainBg from '../../Components/MainBg/MainBg'

const GalleryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const GalleryDataFetch = GalleryData.map((GalleryMain) => (
        <div className="col-sm-3" key={GalleryMain.id}>
            <div className="box">
                <Link to={GalleryMain.GalleryImg} target='_blank'>
                    <img src={GalleryMain.GalleryImg} className='img-fluid' alt={GalleryMain.id} />
                </Link>
            </div>
        </div>
    ))
    return (
        <>
            <MainBg MainBg_ImgUrl={"https://cdn.pixabay.com/photo/2023/11/22/13/29/ai-generated-8405510_640.jpg"} LinkToLink={"/AdoptPetPage"} BtnTextMain={"Time To Adopt Your Pet"} MainBg_h6Content={"Our Gallery..."} MainBg_h5Content={"Paw-some Moments, Captured FurEver."} />

            <div className="OurGallery container" id='GalleryMainId'>
                <Content Content_h6Text={"Our Gallery"} />
                <div className="row">
                    {GalleryDataFetch}
                </div>
            </div>

        </>
    )
}

export default GalleryPage