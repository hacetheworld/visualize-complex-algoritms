import React from 'react';

export default function Bars({ bars }) {

    return (
        <div className='bars'>
            {
                bars.map((bar, idx) => (<div key={idx} style={{
                    height: `${bar * 4}px`,
                    width: `25px`,

                }} className='bar'>{bar}</div>))
            }
        </div>
    );
}

