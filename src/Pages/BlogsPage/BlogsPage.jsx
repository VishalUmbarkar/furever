import './BlogsPage.css'
import { useEffect } from 'react'
// For Components
import MainBg from '../../Components/MainBg/MainBg'
import Content from '../../Components/Content/Content'
import AllOurBlogs from '../../Components/OurBlogs/AllOurBlogs'



const BlogsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <MainBg MainBg_ImgUrl={"https://cdn.pixabay.com/photo/2023/01/10/22/48/ai-generated-7710624_640.jpg"} BtnTextMain={"Adopt Pet Now"} LinkToLink={"/AdoptPetPage"} MainBg_h6Content={"Paws and Fun"} MainBg_h5Content={"Explore the World of FurEver Products And Toys."} />

            {/* For Blogs  */}
            <div className="OurBlogs container">
                <Content Content_h6Text={"Our Products"} />
                <AllOurBlogs />
            </div>


        </>
    )
}

export default BlogsPage