import React from 'react';
import { Link } from 'react-router-dom';
export default function HomePageHeader() {
    return (
        <div className='header'>
            <Link to='/sorting'>Sorting Algorithms</Link>
            <Link className='logo' to='/'>Visualize Complex Algorithm</Link>
            <Link to='/pathFinding'>Path Finding Algorithms</Link>
        </div>
    );
}
