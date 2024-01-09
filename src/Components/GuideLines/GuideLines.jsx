import './GuideLines.css'

// For Data
import { GuideLinesData } from '../../Data'

const GuideLines = () => {
    const GuideLinesDataFetch = GuideLinesData.map((MainGuidelines) => (
        <>
            <div className="col-lg-6">
                <h6>Simple Guidelines To Adopt The Pet</h6>

                <div className="box">
                    <p>
                        {MainGuidelines.SimpleGuideLines.map((SimpleGuidelines_C, index) => (
                            <p className='mainGp' key={index}>
                                <p className="SimpleGuidelines_C_Header">{SimpleGuidelines_C.SimpleGuideLines_Header}</p>
                                <p className="SimpleGuidelines_C_Desc">{SimpleGuidelines_C.SimpleGuideLines_Desc}</p>
                            </p>
                        ))}
                        <p className="FinalMess">{MainGuidelines.FinalMessFor_SimpleGuideLines}</p>
                    </p>
                </div>

            </div>
            <div className="col-lg-6">
                <h6>Must Follow Guidelines To Adopt The Pet</h6>
                <div className="box">
                    <p>
                        {MainGuidelines.MustFollowGuideLines.map((MustFollowGuideLines_C, index) => (
                            <p className='mainGp' key={index}>
                                <p className="MustFollowGuideLines_C_Header">{MustFollowGuideLines_C.MustFollowGuideLines_Header}</p>
                                <p className="MustFollowGuideLines_C_Desc">{MustFollowGuideLines_C.MustFollowGuideLines_Desc}</p>
                            </p>
                        ))}
                        <p className="FinalMess">{MainGuidelines.FinalMessFor_MustFollowGuideLines}</p>
                    </p>
                </div>
            </div>
        </>
    ))
    return (
        <>
            <div className="GuidelinesMainConta contianer">
                <div className="row">
                    {GuideLinesDataFetch}
                </div>
            </div>
        </>
    )
}

export default GuideLines