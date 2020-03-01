import React from 'react';
export default function ControlButton({ generateBalls, updateSpeed, speed }) {

    return (
        <div className='controlButton'>
            <button onClick={() => generateBalls()}>Generate Balls</button>
            <button onClick={() => updateSpeed(speed -= 100)}>fast</button>
            <button onClick={() => updateSpeed(speed += 50)}>slow</button>
        </div>
    );
}
