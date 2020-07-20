import React from 'react';

const Card = props => {

    return (
        <div className={props.className}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{props.suit}</span>
        </div>
    );
};

export default Card;