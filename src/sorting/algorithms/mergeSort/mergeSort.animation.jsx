import MergeSort from './mergeSort';
export const mergeSortAnimation = async (sortingSpeed, isSorting, bars) => {
    isSorting();
    let data = JSON.parse(JSON.stringify(bars));
    let animation = MergeSort(data);
    for (let i = 0; i < animation.length; i++) {
        let divs = document.querySelectorAll('.bar');
        if (animation[i][0] !== true) {
            const [ball1, ball2] = animation[i];
            await new Promise((resolve) => {
                setTimeout(() => {
                    divs[ball1].style.backgroundColor = '#000';
                    divs[ball2].style.backgroundColor = '#000';
                    resolve();
                }, sortingSpeed);
            });

            await new Promise((resolve) => {
                setTimeout(() => {
                    divs[ball1].style.backgroundColor = '#13CE66';
                    divs[ball2].style.backgroundColor = '#13CE66';
                    resolve()
                }, sortingSpeed);
            });

        } else {
            const curDiv = animation[i][1];
            await new Promise((resolve) => {
                setTimeout(() => {
                    divs[curDiv].style.height = `${animation[i][2] * 4}px`;
                    divs[curDiv].innerHTML = animation[i][2];
                    // console.log(animation[i][2]);
                    resolve();
                }, sortingSpeed);
            });
            divs[curDiv].style.backgroundColor = `#13CE66`;
        }


    }
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, sortingSpeed);
    });

    isSorting();

}
