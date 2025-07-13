
import './Header.css'
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import Ariza from '../Ariza/Ariza';
import { RiMenuFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


import logo from "../Header/Images/yourdream.jpg";




export default function Header(){
    const [toogleControl, setToogleControl] = useState(true);


    const {t, i18n} = useTranslation();
    const handleChange = (event)=>{
        const selectedLanguage = event.target.value
        i18n.changeLanguage(selectedLanguage);
    };


    return(
        <div className="header">
            <div className="container">
                <ul className="header-list">
                    <li className="header-item">
                        <a href="#" className="header-logo-link">
                            <img src={logo} alt="" className="header-img" />
                            <h4 className="logo-title">Your Dream</h4>
                        </a>
                    </li>
                    <li className="header-item">
                        <a href="#" className="header-link">{t('Asosiy')}</a>
                        <a href="#about" className="header-link">{t('Biz haqimizda')}</a>
                        <a href="#cost" className="header-link">{t('Narxlar')}</a>
                        <a href="#adress" className="header-link">{t('Manzil')}</a>
                        <select name="lng" id="lng" onChange={handleChange}>
                            <option value="uz">Uzbek</option>
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                        </select>
                        <Ariza/>
                        <nav>
                            {
                                toogleControl ? <RiMenuFill onClick={()=> setToogleControl(false)} className="menu" /> : <IoClose className="close" onClick={()=>setToogleControl(true)}/>
                            }
                        </nav>
                    </li>
                </ul>



                <div className={`mobile-menu ${toogleControl ? '' : 'active'}`}>
                    <a href="#" className="menu-link">{t('Asosiy')}</a>
                    <a href="#about" className="menu-link">{t('Biz haqimizda')}</a>
                    <a href="#cost" className="menu-link">{t('Narxlar')}</a>
                    <a href="#adress" className="menu-link">{t('Manzil')}</a>
                </div>
            </div>
        </div>
    )
}