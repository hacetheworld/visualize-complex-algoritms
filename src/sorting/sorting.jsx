import React, { Component } from 'react';
import './main.style.scss';
import { connect } from 'react-redux';
import { generateBars, algoInfo } from '../redux/action/actions';
import Header from './component/header.component';
import ControlButton from './component/controlButton';
import Bars from './component/bars';
import { InfoAlgo } from './algorithms/information'

class SortingAlgo extends Component {

    componentDidMount() {
        const { generateBars, algoInfo } = this.props;
        algoInfo(InfoAlgo);
        generateBars();
    }

    render() {
        const { bars, aboutAlgos, currentAlgo, sortingSpeed } = this.props;
        return (
            <div className='main'>
                <Header sortingSpeed={sortingSpeed} />
                <ControlButton />
                <div className='algo-info'>
                    {currentAlgo ? (<p>{`${currentAlgo.toUpperCase()} : ${aboutAlgos[currentAlgo].algoInfo}`}</p>) : ''}

                </div>
                <Bars bars={bars} />
            </div>
        )
    }
}



const mapStateToProps = ({ bars, aboutAlgos, currentAlgo, sortingSpeed }) => ({
    bars, aboutAlgos, currentAlgo, sortingSpeed
});
//
//generateBars

const mapDispatchToState = (dispatch) => ({
    generateBars: (bars) => dispatch(generateBars(bars)),
    algoInfo: (InfoAlgo) => dispatch(algoInfo(InfoAlgo))
})
export default connect(mapStateToProps, mapDispatchToState)(SortingAlgo)