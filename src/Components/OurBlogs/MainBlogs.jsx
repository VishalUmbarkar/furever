import './OurBlogs.css';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MainBg from '../MainBg/MainBg';
import { BlogsData } from '../../Data';

const MainBlogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { OurBlogsMainId } = useParams();
    const thisOurBlogsMainId = parseInt(OurBlogsMainId);
    const thisOurBlogsMain = BlogsData.find((customPet) => customPet.id === thisOurBlogsMainId);

    if (!thisOurBlogsMain) {
        return (
            <>
                <MainBg MainBg_ImgUrl={"/assets/Home.jpg"} MainBg_h5Content={"Sorry Blog Not Found"} />
                <div className="thisOurBlogsMainError container">
                    <h6>Sorry, the blog you are looking for is not found</h6>
                </div>
            </>
        );
    }

    const blogsDataFetch = BlogsData.filter((CustomFilterChecking) => CustomFilterChecking.id !== thisOurBlogsMainId).map((blogData) => (
        <Link to={`/OurBlogs/${blogData.id}`}>
            <div className="box" key={blogData.id}>
                <img src={blogData.BlogImg} className='img-fluid' alt={blogData.BlogTitle} />
                <p>{blogData.BlogTitle}</p>
            </div>
        </Link>
    ));

    return (
        <>
            <MainBg MainBg_ImgUrl={thisOurBlogsMain.BlogBgImg} BtnTextMain={"Read Other Blogs"} LinkToLink={"/BlogsPage"} MainBg_h5Content={thisOurBlogsMain.BlogTitle} />

            <div className="container thisOurBlogsMain">
                <div className="row">
                    <div className="col-lg-8">
                        <img src={thisOurBlogsMain.BlogImg} className='img-fluid' alt={thisOurBlogsMain.BlogTitle} />

                        <div className="boxContent">
                            <h6>Title: <span>{thisOurBlogsMain.BlogTitle}</span></h6>
                            <h5>Blog Intro</h5>
                            <p className="Intro">{thisOurBlogsMain.BlogIntro}</p>
                            <h5>Blog Description</h5>
                            <p className="desc">{thisOurBlogsMain.BlogDescription}</p>

                            <h5>More Specifications About <span>{thisOurBlogsMain.BlogTitle}</span></h5>
                            {thisOurBlogsMain.BlogDescription_Specification.map((specification, index) => (
                                <div className="mainP" key={index}>
                                    <p className="Specification_Header">{specification.BlogDescription_Specification_Header}</p>
                                    <p className="Specification_Desc">{specification.BlogDescription_Specification_Desc}</p>
                                </div>
                            ))}
                            <p className="FinalMessage">{thisOurBlogsMain.BlogFinalMessage}</p>
                        </div>
                    </div>

                    <div className="offset-lg-1 col-lg-3">
                        <div className="col-lg-12">
                            <h6>Similar Blogs</h6>
                            {blogsDataFetch}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainBlogs;


