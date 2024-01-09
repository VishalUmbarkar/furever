import './Home.css'
import { useEffect } from 'react'
// For Components
import MainBg from '../../Components/MainBg/MainBg'
import Content from '../../Components/Content/Content'
import Category from '../../Components/Category/Category'
import AdoptPet from '../../Components/AdoptPet/AdoptPet'
import OurBlogs from '../../Components/OurBlogs/OurBlogs'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            {/* For Home */}
            <MainBg MainBg_ImgUrl={"/assets/Home.jpg"} MainBg_h6Content={"FurEver..."} BtnTextMain={"About us"} LinkToLink={"/AboutPage"} MainBg_h5Content={"Where Love and Pow's Meet in Perfect Harmony!"} />

            {/* For Categories */}
            {/* <div className="Categories container">
                <Content Content_h6Text={"Adopt by Category"} Content_LinkTo={"/"} Content_LinkText={"View All"} />
                <Category />
            </div> */}
            {/* For Categories */}

            {/* To Adopt a Pet */}
            <div className="AdoptPet container">
                <Content Content_h6Text={"Adopt Pet Now"} Content_LinkTo={"/AdoptPetPage"} Content_LinkText={"View All"} />
                <AdoptPet />
            </div>

            {/* For Blogs  */}
            <div className="OurBlogs container">
                <Content Content_h6Text={"Our Products"} Content_LinkTo={"/BlogsPage "} Content_LinkText={"View All"} />
                <OurBlogs />
            </div>


        </>
    )
}

export default Home