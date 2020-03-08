import QuickSort from './quickSort';
import { swap } from '../swap';
export const quickSortAnimation = async (sortingSpeed, isSorting, bars) => {
    isSorting();
    let data = JSON.parse(JSON.stringify(bars));
    let animation = QuickSort(data);
    let blocks = document.querySelector('.bars');
    let divs = document.querySelectorAll('.bar');
    for (let i = 0; i < animation.length; i++) {
        let currEl = animation[i];
        if (currEl[0] === 'pivot') {
            divs[currEl[1]].style.backgroundColor = '#000';
            await new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, sortingSpeed);
            });
            // divs[currEl[1]].style.backgroundColor = '#13CE66';
        } else if (currEl[0] === 'swap') {
            divs[currEl[1]].style.backgroundColor = '#000';
            divs[currEl[2]].style.backgroundColor = '#000';
            await new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, sortingSpeed);
            })

            let temp1 = divs[currEl[2]];
            await swap(divs[currEl[2]], divs[currEl[1]], blocks);
            divs = document.querySelectorAll('.bar');
            await swap(divs[currEl[1]], temp1, blocks);
            divs = document.querySelectorAll('.bar');
            // console.log('kkk');

            await new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, sortingSpeed);
            })
            divs[currEl[2]].style.backgroundColor = '#13CE66';
            divs[currEl[1]].style.backgroundColor = '#13CE66';
        } else {

            for (let i = 0; i < currEl[0].length; i++) {
                await new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, sortingSpeed);
                });
                divs[currEl[0][i] - 1].style.backgroundColor = '#red';

            }

            for (let j = 0; j < currEl[1].length; j++) {
                await new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, sortingSpeed);
                })
                divs[currEl[1][j]].style.backgroundColor = '#green';

            }
        }

    }
    divs[divs.length - 1].style.backgroundColor = '#13CE66';

    isSorting();

}