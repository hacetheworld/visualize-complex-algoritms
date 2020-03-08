import React from 'react';
import { connect } from 'react-redux';
import { setCurrentAlgo, isSorting } from '../../redux/action/actions';
import { Link } from 'react-router-dom';

import bubblesortAnimation from '../algorithms/bubbleSort/bubbleSort.animation';
import { selectionSortAnimation } from '../algorithms/selectionSort/selectionSort.animation';
import { insertionSortAnimation } from '../algorithms/insertionSort/insertionSort.animation';
import { mergeSortAnimation } from '../algorithms/mergeSort/mergeSort.animation';
import { quickSortAnimation } from '../algorithms/quickSort/quickSort.animation';

function Header({ setCurrentAlgo, isSorting, sortingSpeed, isCurrentlySorting, bars }) {

    return (
        <header className='header'>
            <ul className='header__list'>
                <li className
                    ={`header__list--item ${isSorting ? 'sorting' : ''}`} onClick={() => {
                        setCurrentAlgo('bubbleSort');
                        bubblesortAnimation(sortingSpeed, isCurrentlySorting);
                    }}>Bubble Sort</li>
                <li className
                    ={`header__list--item ${isSorting ? 'sorting' : ''}`} onClick={() => {
                        setCurrentAlgo('selectionSort');
                        selectionSortAnimation(sortingSpeed, isCurrentlySorting)
                    }}>Selection Sort</li>
                <li className
                    ={`header__list--item ${isSorting ? 'sorting' : ''}`} onClick={() => {
                        setCurrentAlgo('insertionSort');
                        insertionSortAnimation(sortingSpeed, isCurrentlySorting)
                    }}>Insertion Sort</li>
            </ul>
            <Link to='/' className='logo'>Visualize Complex Algorithms</Link>
            <ul className='header__list'>
                <li className
                    ={`header__list--item ${isSorting ? 'sorting' : ''}`} onClick={() => {
                        setCurrentAlgo('mergeSort');
                        mergeSortAnimation(sortingSpeed, isCurrentlySorting, bars)
                    }}>Merge Sort</li>
                <li className
                    ={`header__list--item ${isSorting ? 'sorting' : ''}`} onClick={() => { setCurrentAlgo('quickSort'); quickSortAnimation(sortingSpeed, isCurrentlySorting, bars) }}>Quick Sort</li>

            </ul>
        </header >
    );
}

const mapStateToProps = ({ bars, isSorting }) => ({
    isSorting, bars

});

const mapDispatchToState = (dispatch) => ({
    setCurrentAlgo: (currentAlgo) => dispatch(setCurrentAlgo(currentAlgo)),
    isCurrentlySorting: () => dispatch(isSorting())
});

export default connect(mapStateToProps, mapDispatchToState)(Header);
