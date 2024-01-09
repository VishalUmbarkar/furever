import './MainBg.css'

// For Components
import Button from '../Button/Button'

const MainBg = ({ LinkToLink, MainBg_ImgUrl, MainBg_h6Content, MainBg_h5Content, BtnTextMain }) => {
    return (
        <>
            <div className="MainBg">
                <div>
                    <div>
                        <img src={MainBg_ImgUrl} alt="" />
                    </div>
                    <div className="MainBgOverlay"></div>
                </div>
                <div className="MainBgContent">
                    <h6>{MainBg_h6Content}</h6>
                    <h5>{MainBg_h5Content}</h5>
                    <Button LinkTo={LinkToLink} Btntext={BtnTextMain} />
                </div>
            </div>
        </>
    )
}

export default MainBg