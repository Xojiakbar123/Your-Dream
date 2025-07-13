

import './Main.css'
import dream from "../Main/Images/dreambig.avif";
import { useTranslation } from 'react-i18next';
import Ariza from '../Ariza/Ariza';



export default function Main(){
    const {t, i18n} = useTranslation();



    return(
        <div className="main">
            <div className="container">
                <ul className="main-list">
                    <li className="main-item">
                        <div className="main-box">
                            <div className="main-bar">
                                <h3 className="main-subtitle">
                                    +10
                                </h3>
                                <p className="main-text">
                                    {t('Chet tillari')}
                                </p>
                            </div>
                            <div className="main-bar">
                                <h3 className="main-subtitle">
                                    +10
                                </h3>
                                <p className="main-text">
                                    {t('Yillik tajriba')}
                                </p>
                            </div>
                        </div>
                        <h1 className="main-title">
                            {t('Qisqa muddatda - IELTS va CEFR')}
                        </h1>
                        <Ariza/>
                    </li>
                    <li className="main-item">
                        <img src={dream} alt="" className='main-img' />
                    </li>
                </ul>
            </div>
        </div>
    )
}