const INTILIZE_STATE = {
    bars: [],
    aboutAlgos: [],
    currentAlgo: '',
    isSorting: false,
    sortingSpeed: 100
}

export const rootReducer = (state = INTILIZE_STATE, action) => {
    switch (action.type) {
        case 'GENERATE_BARS':
            return {
                ...state,
                bars: action.payload
            };

        case 'ALGO_INFO':
            return {
                ...state,
                aboutAlgos: action.payload
            };

        case 'CURRENT_ALGO':
            return {
                ...state,
                currentAlgo: action.payload
            };

        case 'INCREASE_CURRENT_ALGO_SPEED':
            return {
                ...state,
                sortingSpeed: state.sortingSpeed > 20 ? state.sortingSpeed - 30 : state.sortingSpeed
            };

        case 'DECREASE_CURRENT_ALGO_SPEED':
            return {
                ...state,
                sortingSpeed: state.sortingSpeed + 100
            };

        case 'IS_SORTING':
            return {
                ...state,
                isSorting: !state.isSorting
            };


        default:
            return state;
    }
}