import './Button.css'

import { Link } from 'react-router-dom'

const Button = ({ LinkTo, TargetChecking, Btntext }) => {
    return (
        <>
            <Link to={LinkTo} target={TargetChecking} className="btn">{Btntext}</Link>
        </>
    )
}

export default Button