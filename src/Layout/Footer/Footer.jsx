import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container newsletter">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form action="#">
                                <h6>Subscribe To Our Newsletter</h6>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Enter Your Email Id" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* For Main Footer */}
                <div className="MainFooter container">
                    <div className="row">

                        <div className="col-lg-4">
                            <h6>Important Links</h6>
                            <ul>
                                <li>Gallery</li>
                                <li>All Pets</li>
                                <li>Faq</li>
                                <li>Checking</li>
                            </ul>
                        </div>    <div className="col-lg-4">
                            <h6>Important Dates</h6>
                            <ul>
                                <li>20 Jan 2024</li>
                                <li>25 Jan 2024</li>
                                <li>01 Feb 2024</li>
                                <li>20 Feb 2024</li>
                            </ul>
                        </div>    <div className="col-lg-4">
                            <h6>Social Links</h6>
                            <ul>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Meta</li>
                                <li>Youtube</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <h6 className='mainMess'>&copy; <span>FurEver</span> || All Right Reserved || From 2023</h6>


            </footer>
        </>
    )
}

export default Footer