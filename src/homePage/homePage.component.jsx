import React from 'react';
import HomePageHeader from './header.component';
import { Link } from 'react-router-dom';
import './homepage.styles.css';
export default function Home() {
    return (
        <div className='home'>
            <HomePageHeader />
            <div className='body'>
                <p> Hello everyone , welcome to my repository here you can visualize almost every famous algorithms related to <Link to='/sorting'>#Sorting</Link> and <Link to='/pathFinding'>#Shortest Path</Link> </p>

                <p>
                    I created this web app because i was not feeling comfortable with algorithms so i decided to create this tool to better understand the algorithms in general and stay away from #imposter syndrome.
</p>
                <p>Hope you enjoy</p>
                <br />
                <h2>Please select an algorithm that you want to visualize  </h2>
                <h3> <Link to='/sorting'>#Sorting</Link> ||
                <Link to='/pathFinding'>#Shortest Path</Link></h3>
            </div>
        </div>
    );
}
