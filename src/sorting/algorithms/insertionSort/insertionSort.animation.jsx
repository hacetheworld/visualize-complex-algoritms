import { swap } from '../swap';
export const insertionSortAnimation = async (sortingSpeed, isSorting) => {
    console.log(sortingSpeed, 'insert');
    isSorting();
    let container = document.querySelector('.bars');
    let blocks = document.querySelectorAll(".bar");
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
                }, sortingSpeed)
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
            }, sortingSpeed);
        });
        let temp = blocks[i];
        //let temp = blocks[i];
        await swap(blocks[Idx + 1], temp, container);
        blocks = document.querySelectorAll(".bar");
        await swap(temp, blocks[Idx + 1], container);
        blocks = document.querySelectorAll(".bar");
        blocks[Idx + 1].style.backgroundColor = "#13CE66";

        // blocks[i].style.backgroundColor = "#13CE66";
    }
    blocks[0].style.backgroundColor = "#13CE66";

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, sortingSpeed);
    });
    isSorting()

}
