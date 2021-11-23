import React from "react";
import '../styles/contact.css'

export default class ContactComp extends React.Component {
    render() {
        return (
            <div className="contact-box">
                <div>
                    <p>Адрес:</p><a href="https://yandex.ru/maps/-/CCUuNAX0lA" target="_blank">109240, Москва, Котельническая набережная д.17(В РСПП для АНО «НАРК»)</a>
                </div>
                <div>
                    <p>E-mail:</p><a href="mailto:nok-nark@nark.ru" target="_blank">nok-nark@nark.ru</a>
                </div>
                <div>
                    <p>Пресс-служба:</p><a href="mailto:pr@nark.ru" target="_blank">pr@nark.ru</a>
                </div>
                <div>
                    <p>Телефон:</p><a href="tel:+74959661686" target="_blank">+7 (495) 966-16-86</a>
                </div>
            </div>
        )
    }
}