import { swap } from '../swap'

const bubblesortAnimation = async (sortingSpeed, isSorting) => {
    isSorting();
    let container = document.querySelector('.bars');
    let blocks = document.querySelectorAll(".bar");

    for (let i = 0; i < blocks.length - 1; i += 1) {
        for (let j = 0; j < blocks.length - i - 1; j += 1) {

            // select two div and change their color so that we can see
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
            // wait here
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, sortingSpeed)
            );
            // extract value from dom in vars
            const value1 = Number(blocks[j].innerHTML);
            const value2 = Number(blocks[j + 1].innerHTML);

            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1], container);
                blocks = document.querySelectorAll(".bar");
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
        }, sortingSpeed);
    });
    isSorting();
}


export default bubblesortAnimation;