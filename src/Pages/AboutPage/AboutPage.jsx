import './AboutPage.css'
import { useEffect } from 'react'
// For Components
import MainBg from '../../Components/MainBg/MainBg'
import Content from '../../Components/Content/Content'
import OurProcess from '../../Components/OurProcess/OurProcess'
import OurVisionMission from '../../Components/OurVisionMission/OurVisionMission'
const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <MainBg MainBg_ImgUrl={"https://cdn.pixabay.com/photo/2023/11/08/17/08/ai-generated-8375331_640.jpg"} LinkToLink={"/BlogsPage"} BtnTextMain={"Read Our Blogs"} MainBg_h6Content={"About us..."} MainBg_h5Content={" Where Love Meets Paws in Every Story."} />

            {/*  Custom About */}
            <div className="AboutMain container">
                <div className="row">
                    <div className="col-sm-6">
                        <img src="/assets/Custom.jpg" className='img-fluid' alt="" />
                    </div>
                    <div className="col-sm-6">
                        <h6>About us</h6>
                        <p>
                            Welcome to <span>FurEver</span>, a haven for hearts seeking the purest joy of companionship. At FurEver, our mission is simple yet profound – to unite every pet with a loving home, creating a lasting bond that weaves tales of love, loyalty, and shared adventures. <br /><br />

                            As a community-driven platform, <span>FurEver</span> stands as a testament to our commitment to simplicity, transparency, and the welfare of the pets we cherish. Our journey is fueled by the belief that the magic of a pet's love knows no bounds, and every adoption is a chance to transform lives.<br /><br />

                            Discover a world of furry friends at <span>FurEver</span>, where the warmth of a purr or the wag of a tail awaits. With open hearts and a dedication to creating lasting connections, we invite you to embark on a journey of joy, one adoption at a time.<br /><br />

                            Join us at <span>FurEver</span> – where every pawprint tells a story of love, and every home finds its furry heartbeat. Thank you for choosing FurEver <span>as</span> your partner in creating a world where pets and people come together in harmony.
                        </p>
                    </div>
                </div>
            </div>


            {/*  For Process */}
            <div className="OurProcess container">
                <Content Content_h6Text={"Our Process"} />
                <OurProcess />
            </div>

            {/* For Our Vision & Mission */}
            <OurVisionMission />


        </>
    )
}

export default AboutPage