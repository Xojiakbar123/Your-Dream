
import { use } from 'react'
import './Wrapper.css'
import { useTranslation } from 'react-i18next'
import mental from "../Wrapper/Images/mental.jpg"
import chess from "../Wrapper/Images/chess.jpg"
import bugalter from "../Wrapper/Images/bugalter.jpg"
import logoped from "../Wrapper/Images/Logoped1.png"
import Ariza from '../Ariza/Ariza'





export default function Wrapper(){
    const {t, i18n} = useTranslation();


    return(
        <div className="wrapper">
            <div className="container">
                <div className="wrapper-btn">
                    <Ariza/>
                </div>
                <ul className="wrapper-list">
                    <li className="wrapper-item">
                        <img className='wrapper-img' src={mental} alt="" />
                        <h2 className="wrapper-title">
                            {t('Mental Arifmetika')}
                        </h2>
                    </li>
                    <li className="wrapper-item">
                        <img className='wrapper-img' src={chess} alt="" />
                        <h2 className="wrapper-title">
                            {t('Shaxmat')}
                        </h2>
                        
                    </li>
                    <li className="wrapper-item">
                        <img className='wrapper-img' src={bugalter} alt="" />
                        <h2 className="wrapper-title">
                            {t('Buxgalteriya')}
                        </h2>
                        
                    </li>
                    <li className="wrapper-item">
                        <img className='wrapper-img' src={logoped} alt="" />
                        <h2 className="wrapper-title">
                            {t('Logoped')}
                        </h2>
                        
                    </li>
                </ul>
                
            </div>
        </div>
    )
}