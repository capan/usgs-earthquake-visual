import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: 12,
        border: '2px solid',
        '&:hover': {
            boxShadow: '10px 10px 5px #459880',
          },
        cursor: 'pointer',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatarsmall: {
        backgroundColor: '#e49487',
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    avatarmedium: {
        backgroundColor: '#e49487',
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    avatarlarge: {
        backgroundColor: '#e49487',
        width: theme.spacing(8),
        height: theme.spacing(8),
    },
}));

export default function EventCard(props) {
    const {
        detail: {
            properties: { mag, place, time }, id,
            geometry: { coordinates },
        }, onCardMouseOver, onCardMouseOut,
    } = props;
    const classes = useStyles();

    const avatarClassname = (magnitude) => {
        if (magnitude <= 4) {
            return classes.avatarsmall;
        } if (magnitude > 4 && magnitude <= 6) {
            return classes.avatarmedium;
        }
        return classes.avatarlarge;
    };

    return (
        <Card
            id={id}
            className={classes.root}
            onMouseOver={() => onCardMouseOver(id)}
            onFocus={() => { }}
            onMouseOut={() => onCardMouseOut(id)}
            onBlur={() => { }}
            style={{ zIndex: '100' }}
            onClick={() => props.onCardClick(coordinates)}
            onKeyDown={() => props.onCardClick}
        >
            <CardHeader
                avatar={(
                    <Avatar aria-label="recipe" className={avatarClassname(mag)}>
                        {mag}
                    </Avatar>
                )}
                title={place}
                subheader={new Date(time).toLocaleString('tr-TR')}
            />
        </Card>
    );
}

EventCard.defaultProps = {
    detail: null,
    onCardMouseOver: () => { },
    onCardMouseOut: () => { },
    onCardClick: () => { },
};

EventCard.propTypes = {
    detail: PropTypes.object,
    onCardMouseOver: PropTypes.func,
    onCardClick: PropTypes.func,
    onCardMouseOut: PropTypes.func,
};
