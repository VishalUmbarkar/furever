import { Link } from 'react-router-dom'
import "./Content.css"

const Content = ({ Content_h6Text, Content_LinkTo, Content_LinkText }) => {
    return (
        <>
            <div className="Content container">
                <div>
                    <h6>{Content_h6Text}</h6>
                </div>
                <div>
                    <Link to={Content_LinkTo}>{Content_LinkText}</Link>
                </div>
            </div>
        </>
    )
}

export default Content