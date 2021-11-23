import React from "react";
import '../styles/courses.css'

export default class Courses extends React.Component {
    render() {
        return (
            <div className="courses-box">
                <a href="#">
                    <div>
                        <h2>Обучение</h2>
                    </div>
                </a>
                <a href="#">
                    <div>
                        <h2>Тест</h2>
                    </div>
                </a>
                <a href="#">
                    <div>
                        <h2>Экзамен</h2>
                    </div>
                </a>
            </div>
        )
    }
}