import Link from 'next/link';
import style from "./Footer.module.scss"
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className={`${style.footer} bg-white`}>

    

            <div className={style.footer_credit}>
                <div className="container">
                    <div className="row ff-secondary">
                        <div className="col-lg">
                            <p className='mb-lg-0 fw-500 text-black'>Copyright © 2024 Edunest all rights reserved</p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;