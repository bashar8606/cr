import React, { useState } from 'react';
import ReactSelect from 'react-select';
import style from "./Select.module.scss"

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function Select({type}) {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <ReactSelect
            id='asdasd'
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder="Car Type"
            className={`${style.select} ${type==="no-border"&&style.no_border}`}
            classNamePrefix="custom"
        />
    );
}