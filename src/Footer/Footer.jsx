


import './Footer.css'
import logo from "../Header/Images/yourdream.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import Ariza from "../Ariza/Ariza";









export default function Footer(){

    return(
        <div className="footer">
            <div className="container">
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="#" className="footer-logo-link">
                            <img src={logo} alt="" className="header-img" />
                            <h4 className="logo-title">Your Dream</h4>
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="https://www.instagram.com/yourdream_lc/" target="_blank" className="instagram">
                            <FaInstagram className="footer-icon" />
                        </a>
                        <a href="https://t.me/Yourdream6677" target="_blank" className="telegram">
                            <FaTelegram className="footer-icon" />
                        </a>
                        <a href="tel:+998911916333" className="phone">
                            <IoCallOutline className="footer-icon" />
                        </a>
                        <Ariza/>
                    </li>
                </ul>
            </div>
        </div>
    )
}