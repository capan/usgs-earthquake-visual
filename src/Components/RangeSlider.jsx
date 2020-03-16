/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root1: {
        width: 300,
        zIndex: 1002,
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '10px',
    },
    root: {
        display: 'fixed',
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));

const theme = createMuiTheme({
    typography: {
        h5: {
            fontSize: 18,
            fontWeight: 500,
            fontStyle: 'bold',
            fontFamily: 'times new roman',
        },
    },
});

function valueLabelFormat(value) {
    const newValue = value - 180;
    if (newValue === 0) {
        return 'Today';
    }
    return `${newValue}`;
}

function valuetext(value) {
    const ret = value + 10;
    return `${ret}`;
}

const dates = (firstDraft, secondDraft) => {
    const firstDate = new Date();
    const secondDate = new Date();
    firstDate.setHours(0);
    firstDate.setMinutes(0);
    firstDate.setSeconds(0);
    firstDate.setMilliseconds(0);
    secondDate.setHours(23);
    secondDate.setMinutes(59);
    secondDate.setSeconds(59);
    secondDate.setMilliseconds(999);
    firstDate.setDate(firstDate.getDate() + (firstDraft - 180));
    secondDate.setDate(secondDate.getDate() + (secondDraft - 180));
    return [firstDate, secondDate];
};

function rangeTypography(value) {
    if (JSON.stringify(value) !== JSON.stringify([0, 180])) {
        const [firstDraft, secondDraft] = value;
        const [firstDate, secondDate] = dates(firstDraft, secondDraft);
        return `${firstDate.toLocaleString()} - ${secondDate.toLocaleString()}`;
    }
    return 'Data for the last six months';
}

export default function RangeSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([0, 180]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeCommit = (val) => {
        const [firstDraft, secondDraft] = val;
        const [firstDate, secondDate] = dates(firstDraft, secondDraft);
        // eslint-disable-next-line react/prop-types
        props.onSliderChange([firstDate.toISOString(), secondDate.toISOString()]);
    };

    function buttonGroupHandler(month) {
        if (month === 1) {
            setValue([150, 180]);
            handleChangeCommit([150, 180]);
        }
        if (month === 2) {
            setValue([120, 180]);
            handleChangeCommit([120, 180]);
        }
        if (month === 3) {
            setValue([90, 180]);
            handleChangeCommit([90, 180]);
        }
    }

    return (
        <>
            <div className={classes.root1}>
                <ThemeProvider theme={theme}>
                    <div className={classes.root}>
                        <ButtonGroup size="small" aria-label="small outlined button group" variant="contained">
                            <Button style={{ backgroundColor: '#459880' }} onClick={() => buttonGroupHandler(1)}>1 Month</Button>
                            <Button style={{ backgroundColor: '#459880' }} onClick={() => buttonGroupHandler(2)}>2 Months</Button>
                            <Button style={{ backgroundColor: '#459880' }} onClick={() => buttonGroupHandler(3)}>3 Months</Button>
                        </ButtonGroup>
                    </div>
                    <Typography id="range-slider" variant="h6">
                        {rangeTypography(value)}
                    </Typography>
                </ThemeProvider>
                <Slider
                    max={180}
                    min={0}
                    value={value}
                    onChangeCommitted={() => handleChangeCommit(value)}
                    onChange={(event, newValue) => handleChange(event, newValue)}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(val) => valueLabelFormat(val)}
                    aria-labelledby="range-slider"
                    getAriaValueText={(val) => valuetext(val)}
                    style={{ color: '#459880' }}
                />
            </div>
        </>
    );
}
