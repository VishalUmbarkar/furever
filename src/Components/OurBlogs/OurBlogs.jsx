import './OurBlogs.css'

import { Link } from 'react-router-dom'

// For Data
import { BlogsData } from '../../Data'

// For Component
import Button from '../Button/Button'


const OurBlogs = () => {
    const BlogsDataFetch = BlogsData.slice(0, 4).map((BlogsDatamain) => (
        <div className="col-lg-3" key={BlogsDatamain.id}>
            <div className="box">
                <Link to={BlogsDatamain.BlogImg} target='_blank'>
                    <img src={BlogsDatamain.BlogImg} className='img-fluid' alt={BlogsDatamain.BlogTitle} />
                </Link>
                <div className="boxContent">
                    <h6>{BlogsDatamain.BlogTitle}</h6>
                    <p>{BlogsDatamain.BlogIntro}</p>
                    {/* <Button Btntext={"Buy"} LinkTo={`${BlogsDatamain.BlogUrl}`} /> */}
                    <Button LinkTo={BlogsDatamain.BlogUrl} TargetChecking="_blank" Btntext="Buy" />
                </div>
            </div>
        </div>
    ))
    return (
        <>
            <div className="row">
                {BlogsDataFetch}
            </div>
        </>
    )
}

export default OurBlogs