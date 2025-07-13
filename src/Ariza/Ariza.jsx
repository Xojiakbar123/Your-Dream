import { useTranslation } from "react-i18next";
import './Ariza.css'



export default function Ariza(){
    const {t, i18n} = useTranslation();



    return(
        <a href="https://t.me/Yourdreamlearningcenter_bot" target="_blank" className="ariza-link">
            <button className="ariza-btn">
                {t('Ariza topshirish')}
            </button>
        </a>
    )
}