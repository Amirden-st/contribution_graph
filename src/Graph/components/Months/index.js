import React from 'react';
import {MARGIN_UNIT} from "../../constants";

const Months = ({data, ...rest}) => {
    return (
        <g direction="ltr" {...rest}>
            {data.map(month => {
                return (
                    <text x={month.column * MARGIN_UNIT} y={10} className="graph__text" key={month.name}>
                        {month.name}
                    </text>
                )
            })}
        </g>
    );
};

export default Months;