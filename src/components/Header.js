import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className="outer-header-container">
                <div className="header-container">
                    <h1><Link to="/">СПК РФ</Link></h1>
                    <ul>
                        <li><Link to="/eqc">ЦОК</Link></li>
                        <li><Link to="/news">Новости</Link></li>
                        <li><Link to="/contact">Контакты</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}