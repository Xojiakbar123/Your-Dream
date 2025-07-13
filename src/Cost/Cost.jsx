import './Cost.css';
import { useTranslation } from 'react-i18next';
import { FaMoneyCheckAlt, FaCode, FaGlobe } from "react-icons/fa";
import Ariza from '../Ariza/Ariza';

export default function Cost() {
    const {t, i18n } = useTranslation();

    return (
        <div className="cost" id='cost'>
            <div className="container">
                <h1 className="cost-title">{t('Narxlar')}</h1>
                <div className="cost-cards">
                    <div className="cost-card">
                        <FaGlobe className='cost-icon' />
                        <h3 className="cost-name">{t('Xohlagan til kurslari')}</h3>
                        <p className="cost-price">600 000 so'm</p>
                        <Ariza/>
                    </div>
                    <div className="cost-card">
                        <FaCode className='cost-icon' />
                        <h3 className="cost-name">Frontend</h3>
                        <p className="cost-price">1 200 000 so'm</p>
                        <Ariza/>
                    </div>
                    <div className="cost-card">
                        <FaMoneyCheckAlt className='cost-icon' />
                        <h3 className="cost-name">{t('Boshqa barcha kurslar')}</h3>
                        <p className="cost-price">700 000 so'm</p>
                        <Ariza/>
                    </div>
                </div>
            </div>
        </div>
    );
}
