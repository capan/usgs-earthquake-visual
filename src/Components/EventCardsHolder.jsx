/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import './EventCardsHolder.scss';


const EventCardsHolder = (props) => {
    let { currentPage, pageLimit } = props;
    if (!currentPage || !pageLimit) {
        currentPage = 1; pageLimit = 8;
    }
    return (
        <div className="card-holder">
            {props.children.map((el) => el)}
        </div>
    );
};

export default EventCardsHolder;
