import React from 'react';

export default function Balls({ balls }) {

    return (
        <div className='balls'>
            {
                balls.map((ball, idx) => (<div key={idx} style={{
                    height: `${ball * 4}px`,
                    width: `25px`,
                    marginLeft: '10px'
                }} className='ball'>{ball}</div>))
            }
        </div>
    );
}
