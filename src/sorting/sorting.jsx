import React, { Component } from 'react';
import './main.style.scss';
import { InfoAlgo } from './algorithms/information';
import Header from './component/header.component';
import ControlButton from './component/controlButton';
import Balls from './component/balls';
//Algorithms
import BubbleSort from './algorithms/bubbleSort';
import SelectionSort from './algorithms/selectionSort';
import InsertionSort from './algorithms/insertionSort';
import QuickSort from './algorithms/quickSort';
import MergeSort from './algorithms/mergeSort';

// How MANY Balls
const BALLS_NUM = 20;


export default class SortingAlgo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            balls: [90, 60, 30],
            aboutAlgos: InfoAlgo,
            currentAlgo: '',
            isSorting: false,
            sortingSpeed: 50
        }
    }
    // animation speed
    //ANIMATION_SPEED = () => this.state.sortingSpeed;
    updateSpeed = (speed) => {
        if (speed > 50) {
            this.setState({ sortingSpeed: speed })
        } else {
            this.setState({ sortingSpeed: 50 })
        }

    }
    generateBalls = () => {
        let data = [];

        for (let i = 0; i < BALLS_NUM; i++) {
            data.push(Math.floor(Math.random() * 50 + 50));
        }
        this.setState({ balls: data });
    }

    getCurrentAlgo = (currentAlgo) => {
        this.setState({ currentAlgo });
    }

    //BubbleSort

    // bubblesortAnimation = () => {

    bubblesortAnimation = async () => {
        this.setState({ isSorting: true })
        let container = document.querySelector('.balls');
        let blocks = document.querySelectorAll(".ball");

        for (let i = 0; i < blocks.length - 1; i += 1) {
            for (let j = 0; j < blocks.length - i - 1; j += 1) {
                // select two div and change their color so that we can see
                blocks[j].style.backgroundColor = "#FF4949";
                blocks[j + 1].style.backgroundColor = "#FF4949";
                // wait here
                await new Promise(resolve =>
                    setTimeout(() => {
                        resolve();
                    }, this.state.sortingSpeed * 2)
                );
                const value1 = Number(blocks[j].innerHTML);
                const value2 = Number(blocks[j + 1].innerHTML);

                if (value1 > value2) {
                    await this.swap(blocks[j], blocks[j + 1], container);
                    blocks = document.querySelectorAll(".ball");
                }
                blocks[j].style.backgroundColor = "#d20ce4";
                blocks[j + 1].style.backgroundColor = "#d20ce4";
            }

            blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
        }
        blocks[0].style.backgroundColor = "#13CE66";

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, this.state.sortingSpeed);
        });
        this.setState({ isSorting: false })
    }


    swap = (el1, el2, container) => {
        return new Promise(resolve => {
            const transform1 = el1.style.width;
            const transform2 = el2.style.width;
            el1.style.transform = transform2;
            el2.style.transform = transform1;
            el1.style.transition = "transform .2s ease";
            el2.style.transition = "transform .2s ease";
            // Wait for the transition to end!
            // console.log(el2, el1);

            container.insertBefore(el2, el1);

            resolve();

        });
    }
    // Selection sort

    selectionsortAnimation = async () => {

        this.setState({ isSorting: true })
        let container = document.querySelector('.balls');
        let blocks = document.querySelectorAll(".ball");
        let minIdx, minValue;
        for (let i = 0; i < blocks.length - 1; i += 1) {
            blocks[i].style.backgroundColor = "#FF4949";
            minIdx = i;
            minValue = Number(blocks[i].innerHTML);

            for (let j = i + 1; j < blocks.length; j += 1) {
                // select  div and change their color so that we can see
                blocks[j].style.backgroundColor = "#000";
                // wait here
                await new Promise(resolve =>
                    setTimeout(() => {
                        resolve();
                    }, this.state.sortingSpeed)
                );
                const value2 = Number(blocks[j].innerHTML);

                if (minValue > value2) {
                    minValue = value2;
                    minIdx = j;
                }

                blocks[j].style.backgroundColor = "#d20ce4";

            }
            blocks[minIdx].style.backgroundColor = "#13CE66";
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, this.state.sortingSpeed);
            });
            let temp = blocks[i];
            //let temp = blocks[i];
            await this.swap(blocks[minIdx], temp, container);

            blocks = document.querySelectorAll(".ball");
            await this.swap(blocks[i], blocks[minIdx], container);
            blocks = document.querySelectorAll(".ball");

            blocks[minIdx].style.backgroundColor = "#d20ce4";
            blocks[i].style.backgroundColor = "#13CE66";
        }
        blocks[blocks.length - 1].style.backgroundColor = "#13CE66";

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, this.state.sortingSpeed);
        });
        this.setState({ isSorting: false })

    }

    // Insertion sort

    insertionsortAnimation = async () => {

        this.setState({ isSorting: true })
        let container = document.querySelector('.balls');
        let blocks = document.querySelectorAll(".ball");
        let Idx;
        for (let i = 1; i < blocks.length; i += 1) {
            blocks[i].style.backgroundColor = "#FF4949";
            Idx = i - 1;
            let currentValue = Number(blocks[i].innerHTML);
            let value2 = Number(blocks[Idx].innerHTML);

            while (Idx >= 0 && value2 > currentValue) {
                // select  div and change their color so that we can see
                blocks[Idx].style.backgroundColor = "#000";
                // wait here
                await new Promise(resolve =>
                    setTimeout(() => {
                        resolve();
                    }, this.state.sortingSpeed)
                );
                blocks[Idx].style.backgroundColor = "#13CE66";
                Idx--;
                if (Idx >= 0) {
                    value2 = Number(blocks[Idx].innerHTML);
                }
            }

            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, this.state.sortingSpeed);
            });
            let temp = blocks[i];
            //let temp = blocks[i];
            await this.swap(blocks[Idx + 1], temp, container);
            blocks = document.querySelectorAll(".ball");
            await this.swap(temp, blocks[Idx + 1], container);
            blocks = document.querySelectorAll(".ball");
            blocks[Idx + 1].style.backgroundColor = "#13CE66";

            // blocks[i].style.backgroundColor = "#13CE66";
        }
        blocks[0].style.backgroundColor = "#13CE66";

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, this.state.sortingSpeed);
        });
        this.setState({ isSorting: false })

    }


    // MergeSort

    mergeSortAnimation = async () => {
        let data = JSON.parse(JSON.stringify(this.state.balls));
        let animation = MergeSort(data);
        for (let i = 0; i < animation.length; i++) {
            let divs = document.querySelectorAll('.ball');
            if (animation[i][0] !== true) {
                const [ball1, ball2] = animation[i];
                await new Promise((resolve) => {
                    setTimeout(() => {
                        divs[ball1].style.backgroundColor = '#000';
                        divs[ball2].style.backgroundColor = '#000';
                        resolve();
                    }, this.state.sortingSpeed);
                });

                await new Promise((resolve) => {
                    setTimeout(() => {
                        divs[ball1].style.backgroundColor = '#13CE66';
                        divs[ball2].style.backgroundColor = '#13CE66';
                        resolve()
                    }, this.state.sortingSpeed);
                });

            } else {
                const curDiv = animation[i][1];
                await new Promise((resolve) => {
                    setTimeout(() => {
                        divs[curDiv].style.height = `${animation[i][2] * 4}px`;
                        divs[curDiv].innerHTML = animation[i][2];
                        // console.log(animation[i][2]);
                        resolve();
                    }, this.state.sortingSpeed);
                });
                divs[curDiv].style.backgroundColor = `#13CE66`;
            }
        }
    }



    // QuickSort

    quickSortAnimation = async () => {
        let data = JSON.parse(JSON.stringify(this.state.balls));
        let animation = QuickSort(data);
        let blocks = document.querySelector('.balls');
        let divs = document.querySelectorAll('.ball');
        for (let i = 0; i < animation.length; i++) {
            let currEl = animation[i];
            if (currEl[0] === 'pivot') {
                divs[currEl[1]].style.backgroundColor = '#000';
                await new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, this.state.sortingSpeed);
                });
                // divs[currEl[1]].style.backgroundColor = '#13CE66';
            } else if (currEl[0] === 'swap') {
                await new Promise(resolve => {
                    setTimeout(() => {
                        divs[currEl[1]].style.backgroundColor = '#000';
                        divs[currEl[2]].style.backgroundColor = '#000';
                        resolve();
                    }, this.state.sortingSpeed);
                })

                let temp1 = divs[currEl[2]];
                await this.swap(divs[currEl[2]], divs[currEl[1]], blocks);
                divs = document.querySelectorAll('.ball');
                await this.swap(divs[currEl[1]], temp1, blocks);
                divs = document.querySelectorAll('.ball');
                // console.log('kkk');

                await new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, this.state.sortingSpeed);
                })
                divs[currEl[2]].style.backgroundColor = '#13CE66';

                divs[currEl[1]].style.backgroundColor = '#13CE66';
            } else {


                for (let i = 0; i < currEl[0].length; i++) {
                    await new Promise(resolve => {
                        setTimeout(() => {
                            divs[currEl[0][i] - 1].style.backgroundColor = '#red';
                            resolve();
                        }, this.state.sortingSpeed);
                    });
                }

                for (let j = 0; j < currEl[1].length; j++) {
                    await new Promise(resolve => {
                        setTimeout(() => {
                            divs[currEl[1][j]].style.backgroundColor = '#green';
                            resolve();
                        }, this.state.sortingSpeed);
                    })

                }
            }

        }
        divs[divs.length - 1].style.backgroundColor = '#13CE66';
    }

    componentDidMount() {
        this.generateBalls();
    }

    render() {
        const { balls, aboutAlgos, currentAlgo, isSorting } = this.state;

        return (
            <div className='main'>
                <Header
                    isSorting={isSorting}
                    getCurrentAlgo={this.getCurrentAlgo}
                    BubbleSort={this.bubblesortAnimation}
                    SelectionSort={this.selectionsortAnimation}
                    InsertionSort={this.insertionsortAnimation}
                    MergeSort={this.mergeSortAnimation}
                    QuickSort={this.quickSortAnimation}

                />
                <ControlButton generateBalls={this.generateBalls} updateSpeed={this.updateSpeed} speed={this.state.sortingSpeed} />
                <div className='algo-info'>
                    {currentAlgo ? (<p>{`${currentAlgo.toUpperCase()} : ${aboutAlgos[currentAlgo].algoInfo}`}</p>) : ''}

                </div>
                <Balls balls={balls} />
            </div>
        )
    }
}
