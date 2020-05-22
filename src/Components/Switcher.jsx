import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

export default function Switcher(props) {
    const [state, setState] = React.useState({
        checked: true,
    });

    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.checked });
        props.onSwitcherChanged(state.checked);
    };

    const GreenSwitch = withStyles({
        switchBase: {
            color: green[300],
            '&$checked': {
                color: green[500],
            },
            '&$checked + $track': {
                backgroundColor: green[500],
            },
        },
        checked: {},
        track: {},
    })(Switch);

    return (
        <div>
            <FormControl
                component="fieldset"
                style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '10px',
                }}
            >
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="start"
                        control={(
                            <Tooltip title={`${state.checked ? 'Close' : 'Open'} Auto Search`}>
                                <GreenSwitch
                                    checked={state.checked}
                                    onChange={handleChange('checked')}
                                    value="checked"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </Tooltip>
                        )}
                        label="Search as I move the map"
                        labelPlacement="top"
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}

Switcher.defaultProps = {
    onSwitcherChanged: () => { },
};

Switcher.propTypes = {
    onSwitcherChanged: PropTypes.func,
};
