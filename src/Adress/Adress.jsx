

import { useTranslation } from "react-i18next";
import './Adress.css'


export default function Adress(){
    const {t, i18n} = useTranslation();



    return(
        <div className="adress" id="adress">
            <div className="container">
                <h1 className="adress-title">
                    {t('Bizning manzilimiz')}
                </h1>
                <p className="adress-text">
                    {t('Chilonzor tumani, Bunyodkor kochasi')}
                </p>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.6930221644952!2d69.19949267632744!3d41.27201937131482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b401737eb05%3A0x4d8c0c99b1aa72b5!2zWU9VUiBEUkVBTSDRg9GH0LXQsdC90YvQuSDRhtC10L3RgtGA!5e0!3m2!1sen!2s!4v1752431010677!5m2!1sen!2s"></iframe>
            </div>
        </div>
    )
}