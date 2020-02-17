import React from 'react';
import PropTypes from 'prop-types';
import './EventCard.scss';
import 'react-bootstrap';

const EventCard = (props) => {
    const { detail: { properties: { mag, place, time }, id }, onCardMouseOver } = props;
    return (
        <div key={id} data-key={id} className="event-card" onFocus={() => undefined} onMouseOver={(e) => onCardMouseOver(e)}>
            <div className="row">
                <div className="col-md-4">
                    <p>{new Date(time).toLocaleString('se-SV')}</p>
                </div>
                <div className="col-md-4">
                    <p>{place}</p>
                </div>
                <div className="col-md-4">
                    <p>{mag}</p>
                </div>
            </div>
        </div>
    );
};

EventCard.defaultProps = {
    detail: null,
    onCardMouseOver: () => { },
};

EventCard.propTypes = {
    detail: PropTypes.string,
    onCardMouseOver: PropTypes.func,
};

export default EventCard;
