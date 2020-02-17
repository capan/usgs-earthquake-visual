/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './EventCardsHolder.scss';

const EventCardsHolder = (props) => (
    <div className="card-holder">
        {props.children}
    </div>
);

export default EventCardsHolder;
