import React from 'react';
import { Link } from 'react-router-dom';
export default function Header({ getCurrentAlgo, isSorting, BubbleSort, SelectionSort, InsertionSort, MergeSort, QuickSort, HeapSort }) {
    return (
        <header className='header'>
            <ul className='header__list'>
                <li className
                    ={`header__list--item ${isSorting ? 'sorting' : ''}`} onClick={() => {
                        getCurrentAlgo('bubbleSort');
                        BubbleSort();
                    }}>Bubble Sort</li>
                <li className
                    ={`header__list--item ${isSorting ? 'sorting' : ''}`} onClick={() => {
                        getCurrentAlgo('selectionSort');
                        SelectionSort()
                    }}>Selection Sort</li>
                <li className
                    ={`header__list--item ${isSorting ? 'sorting' : ''}`} onClick={() => {
                        getCurrentAlgo('insertionSort');
                        InsertionSort()
                    }}>Insertion Sort</li>
            </ul>
            <Link to='/' className='logo'>Visualize Complex Algorithms</Link>
            <ul className='header__list'>
                <li className
                    ={`header__list--item ${isSorting ? 'sorting' : ''}`} onClick={() => {
                        getCurrentAlgo('mergeSort');
                        MergeSort()
                    }}>Merge Sort</li>
                <li className
                    ={`header__list--item ${isSorting ? 'sorting' : ''}`} onClick={() => { getCurrentAlgo('quickSort'); QuickSort() }}>Quick Sort</li>

            </ul>
        </header >
    );
}
