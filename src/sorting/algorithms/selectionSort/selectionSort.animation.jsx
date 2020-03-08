import { swap } from '../swap';
export const selectionSortAnimation = async (sortingSpeed, isSorting) => {
    isSorting();
    let container = document.querySelector('.bars');
    let blocks = document.querySelectorAll(".bar");
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
                }, sortingSpeed)
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
            }, sortingSpeed);
        });
        let temp = blocks[i];
        //let temp = blocks[i];
        await swap(blocks[minIdx], temp, container);

        blocks = document.querySelectorAll(".bar");
        await swap(blocks[i], blocks[minIdx], container);
        blocks = document.querySelectorAll(".bar");

        blocks[minIdx].style.backgroundColor = "#d20ce4";
        blocks[i].style.backgroundColor = "#13CE66";
    }
    blocks[blocks.length - 1].style.backgroundColor = "#13CE66";

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, sortingSpeed);
    });
    isSorting()

}