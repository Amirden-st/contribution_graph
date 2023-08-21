import React from 'react';
import Block from "../Block";
import {MARGIN_UNIT} from "../../constants";

const Column = ({data, ...rest}) => {
    return (
        <g {...rest}>
            {data.map((block, idx) => (
                <Block
                    x={0}
                    y={idx * MARGIN_UNIT}
                    contributionsCount={block.contributions}
                    key={block.value}
                />
            ))}
        </g>
    );
};

export default Column;