import React from 'react';
import PropTypes from 'prop-types';
import './EventCard.scss';
import 'react-bootstrap';

const EventCard = (props) => {
    const {
        detail: {
            properties: { mag, place, time }, id,
            geometry: { coordinates },
        }, onCardMouseOver,
    } = props;
    return (
        <div
            id={id}
            data-key={id}
            className="event-card"
            onClick={() => props.onCardClick(coordinates)}
            onKeyDown={() => props.onCardClick}
            onFocus={() => undefined}
            onMouseOver={(e) => onCardMouseOver(e)}
            role="button"
            tabIndex={0}
        >
            <div key={id} className="row">
                <div className="col-md-4">
                    <p>{new Date(time).toLocaleString('se-SV')}</p>
                </div>
                <div className="col-md-4">
                    <p>{place}</p>
                </div>
                <div className="col-md-4">
                    <div
                        className="magnitude"
                        style={{ height: `${mag * 10}px`, width: `${mag * 10}px` }}
                    >
                        <p className="magnitude-text" style={{ transform: `translate(0px, ${10 + Math.ceil(mag / 2)}px)` }}>{mag}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

EventCard.defaultProps = {
    detail: null,
    onCardMouseOver: () => { },
    onCardClick: () => { },
};

EventCard.propTypes = {
    detail: PropTypes.object,
    onCardMouseOver: PropTypes.func,
    onCardClick: PropTypes.func,
};

export default EventCard;
