import React from 'react';
import "./index.css"

const Block = ({contributionsCount=0, ...rest}) => {
    const getBgColor = contributionsCount => {
        if (contributionsCount === 0) return '#EDEDED'
        else if (contributionsCount < 10) return '#ACD5F2'
        else if (contributionsCount < 20) return '#7FA8C9'
        else if (contributionsCount < 30) return '#527BA0'
        return '#254E77'
    }
    return (
        <rect className="block" fill={getBgColor(contributionsCount)} width={15} height={15} {...rest}/>
    );
};

export default Block;