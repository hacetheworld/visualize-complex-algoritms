import { randomBars } from '../../sorting/constants';

export const generateBars = bars => ({
    type: 'GENERATE_BARS',
    payload: randomBars()
});


export const algoInfo = (InfoAlgo) => ({
    type: 'ALGO_INFO',
    payload: InfoAlgo
});

export const setCurrentAlgo = currentAlgo => ({
    type: 'CURRENT_ALGO',
    payload: currentAlgo
});

export const increaseSortingSpeed = () => ({
    type: 'INCREASE_CURRENT_ALGO_SPEED'
});

export const decreaseSortingSpeed = () => ({
    type: 'DECREASE_CURRENT_ALGO_SPEED'
});

export const isSorting = () => ({
    type: 'IS_SORTING'
});

