import './mainPage.css';
import Slider from '@mui/material/Slider';
import * as React from 'react';


function MySlider({ getValueAge }) {

    const [value, setValue] = React.useState([18, 80]);

    function valuetext(value) {
        return `${value}`;
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
        getValueAge(value);
    };

    return <>

        <Slider
            value={value}
            onChange={handleChange}
            min={18}
            max={80}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
        />
    </>

}

export default MySlider