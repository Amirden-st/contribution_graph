import React from 'react';

const Weekdays = () => {
    return (
        <g>
            <text  textAnchor="middle" className="graph__text" x={8} y={33}>
                Пн
            </text>
            <text textAnchor="middle" className="graph__text" x={8} y={67}>
                Ср
            </text>
            <text textAnchor="middle" className="graph__text" x={8} y={101}>
                Пт
            </text>
        </g>
    );
};

export default Weekdays;