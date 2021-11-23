import React from "react";
import '../styles/news.css'

export default class NewsComp extends React.Component {
    render() {
        return (
            <div className="news-box">
                <div>
                    <img src="https://via.placeholder.com/400x300?text=News+Image" alt="" />
                    <div className="text">
                        <h2>Title</h2>
                        <p>Description</p>
                    </div>
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300?text=News+Image" alt="" />
                    <div className="text">
                        <h2>Title</h2>
                        <p>Description</p>
                    </div>
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300?text=News+Image" alt="" />
                    <div className="text">
                        <h2>Title</h2>
                        <p>Description</p>
                    </div>
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300?text=News+Image" alt="" />
                    <div className="text">
                        <h2>Title</h2>
                        <p>Description</p>
                    </div>
                </div>
                <div>
                    <img src="https://via.placeholder.com/400x300?text=News+Image" alt="" />
                    <div className="text">
                        <h2>Title</h2>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        )
    }
}