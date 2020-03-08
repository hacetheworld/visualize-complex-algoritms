import React from 'react';
import { connect } from 'react-redux';
import { increaseSortingSpeed, decreaseSortingSpeed, generateBars } from '../../redux/action/actions';

function ControlButton({ increaseSortingSpeed, decreaseSortingSpeed, generateBars, sortingSpeed, isSorting }) {
    function resetBars() {
        window.location.reload();
    }

    return (
        <div className={`controlButton ${isSorting ? 'sorting' : ''}`} >
            <button onClick={() => generateBars()}>Generate Bars</button>
            <button onClick={() => resetBars()}>Reset </button>
            <button onClick={() => increaseSortingSpeed()}>fast </button>
            <button onClick={() => decreaseSortingSpeed()}>slow</button>
            <h3>Speed : {sortingSpeed}</h3>
        </ div>
    );
}

const mapStateToProps = ({ bars, aboutAlgos, currentAlgo, sortingSpeed, isSorting }) => ({
    bars, aboutAlgos, currentAlgo, sortingSpeed, isSorting
});

const mapDispatchToState = (dispatch) => ({
    increaseSortingSpeed: () => dispatch(increaseSortingSpeed()),
    decreaseSortingSpeed: () => dispatch(decreaseSortingSpeed()),
    generateBars: () => dispatch(generateBars())
});


export default connect(mapStateToProps, mapDispatchToState)(ControlButton);