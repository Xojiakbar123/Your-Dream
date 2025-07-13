


import './About.css'
import { useTranslation } from 'react-i18next'
import Flag from 'react-world-flags';
import { FaLaptopCode } from "react-icons/fa6";

import word from "../About/Images/word.png"
import excel from "../About/Images/excel.png"
import ppt from "../About/Images/ppt.png"




export default function About(){
    const {t, i18n} = useTranslation();


    return(
        <div className="about" id='about'>
            <div className="container">
                <h1 className="about-title">
                    {t('Biz haqimizda')}
                </h1>
                <div className="top">
                    <ul className="top-list">
                        <li className="top-item">
                            <h3 className="top-title">
                                {('Tillar')}
                            </h3>
                            <p className="top-text">
                                {t('Bizda IELTS va CEFR dan tashqari tajribali oqituvchilar tomonidan boshqa 10 ga yaqin tillarni ham organib sertifikatlar olsa boladi.')}
                            </p>
                            <div className="languages">
                                <nav className="language">
                                    <Flag className='flag' code='GB'/>
                                    <h4 className="lng-title">{t('Ingliz')}</h4>
                                </nav>
                                <nav className="language">
                                    <Flag className='flag' code='RU'/>
                                    <h4 className="lng-title">{t('Rus')}</h4>
                                </nav>
                                <nav className="language">
                                    <Flag className='flag' code='KR'/>
                                    <h4 className="lng-title">{t('Koreys')}</h4>
                                </nav>
                                <nav className="language">
                                    <Flag className='flag' code='JP'/>
                                    <h4 className="lng-title">{t('Yapon')}</h4>
                                </nav>
                                <nav className="language">
                                    <Flag className='flag' code='CN'/>
                                    <h4 className="lng-title">{t('Xitoy')}</h4>
                                </nav>
                                <nav className="language">
                                    <Flag className='flag' code='ES'/>
                                    <h4 className="lng-title">{t('Ispan')}</h4>
                                </nav>
                                <nav className="language">
                                    <Flag className='flag' code='DE'/>
                                    <h4 className="lng-title">{t('Nemis')}</h4>
                                </nav>
                                <nav className="language">
                                    <Flag className='flag' code='TR'/>
                                    <h4 className="lng-title">{t('Turk')}</h4>
                                </nav>
                            </div>
                        </li>
                        <li className="top-item">
                            <h3 className="top-title">{t('Kompyuter')}</h3>
                            <p className="top-text">
                                {t('Bizda Kompyuter boyicha ham oquv dasturlari mavjud.va bu kurslar sizga ishda va hayotda yangi imkoniyatlara eshigini ochadi.')}
                            </p>
                            <div className="body">
                                <h4 className="body-title">
                                    {t('Komyuter savodxonligi')}
                                </h4>
                                <div className="body-texts">
                                    <nav className="body-bar">
                                        <img className='body-img' src={word} alt="" />
                                        <p className="body-text">
                                            Word
                                        </p>
                                    </nav>
                                    <nav className="body-bar">
                                        <img className='body-img' src={excel} alt="" />
                                        <p className="body-text">
                                            Excel
                                        </p>
                                    </nav>
                                    <nav className="body-bar">
                                        <img className='body-img' src={ppt} alt="" />
                                        <p className="body-text">
                                            Power Point
                                        </p>
                                    </nav>
                                </div>
                                <nav className="frontend">
                                    <h4 className="body-title">
                                        Frontend
                                    </h4>
                                    <FaLaptopCode className='front' />
                                </nav>
                                <div className="front-bar">
                                    <p className="body-text">
                                        HTML
                                    </p>
                                    <p className="body-text">
                                        CSS
                                    </p>
                                    <p className="body-text">
                                        Java Script
                                    </p>
                                    <p className="body-text">
                                        React
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}