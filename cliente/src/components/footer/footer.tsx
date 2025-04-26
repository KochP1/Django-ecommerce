import './footer.css'

export const Footer = () => {

    return (
        <footer className="bg-dark text-light pt-5">
            <div className="container px-5">
                <div className="row">
                    <div className="col-6 col-lg-4">
                        <img src="/images/logo.svg" alt=""/>
                        <p className="pt-2">321, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="mb-2">0987654321</p>
                        <p>1234567890</p>
                    </div>
                    <div className="col">
                        <h4>About us</h4>
                        <ul className="list-unstyled pt-2">
                            <li className="py-1">About</li>
                            <li className="py-1">Contact</li>
                            <li className="py-1">Jobs</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>More</h4>
                        <ul className="list-unstyled pt-2">
                            <li className="py-1">Github</li>
                            <li className="py-1">FAQs</li>
                            <li className="py-1">Your orders</li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3 text-lg-end">
                        <h4>Social Media Links</h4>
                        <div className="social-media pt-2">
                            <a href="#" className="text-light fs-2 me-3"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#" className="text-light fs-2 me-3"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#" className="text-light fs-2 me-3"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="text-light fs-2"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="d-sm-flex justify-content-between py-1">
                    <p>2025 © Pixelated Paradise. All Rights Reserved. </p>
                    <p>
                        <a href="#" className="text-light text-decoration-none pe-4">Terms of use</a>
                        <a href="#" className="text-light text-decoration-none"> Privacy policy</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}