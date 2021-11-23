import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default () => (
    <Carousel autoPlay showThumbs={false}>
        <div>
            <img alt="" src="https://cdn.pixabay.com/photo/2021/11/17/15/07/paris-6803796_1280.jpg" />
            <p className="legend">News story 1</p>
        </div>
        <div>
            <img alt="" src="https://cdn.pixabay.com/photo/2016/12/26/13/28/taxi-1932107_1280.jpg" />
            <p className="legend">News story 2</p>
        </div>
        <div>
            <img alt="" src="https://cdn.pixabay.com/photo/2021/11/14/21/14/animals-6795732_1280.jpg" />
            <p className="legend">News story 3</p>
        </div>
        <div>
            <img alt="" src="https://cdn.pixabay.com/photo/2021/01/09/14/04/australian-shepherd-5902421_1280.jpg" />
            <p className="legend">News story 4</p>
        </div>
        <div>
            <img alt="" src="https://cdn.pixabay.com/photo/2021/08/26/15/39/cat-6576397_1280.jpg" />
            <p className="legend">News story 5</p>
        </div>
    </Carousel>
);
