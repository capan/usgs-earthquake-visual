import React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';

export default function Switcher({ onSwitcherChanged = () => {} }) {
    const [state, setState] = React.useState({
        checked: true,
    });

    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.checked });
        onSwitcherChanged(state.checked);
    };

    const GreenSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase': {
            color: green[300],
            '&.Mui-checked': {
                color: green[500],
                '& + .MuiSwitch-track': {
                    backgroundColor: green[500],
                },
            },
        },
    }));

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

Switcher.propTypes = {
    onSwitcherChanged: PropTypes.func,
};
