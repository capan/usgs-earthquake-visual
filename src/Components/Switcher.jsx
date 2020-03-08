import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';

export default function Switcher(props) {
    const [state, setState] = React.useState({
        checked: true,
    });

    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.checked });
        props.onSwitcherChanged(state.checked);
    };

    return (
        <div>
            <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="start"
                        control={(
                            <Switch
                                checked={state.checked}
                                onChange={handleChange('checked')}
                                value="checked"
                                color="primary"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        )}
                        label="Search as I move the map"
                        labelPlacement="start"
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
