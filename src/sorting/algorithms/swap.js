export const swap = async (el1, el2, container) => {
    return new Promise(resolve => {
        // const style1 = window.getComputedStyle(el1);
        // const style2 = window.getComputedStyle(el2);

        // const transform1 = style1.getPropertyValue("transform");
        // const transform2 = style2.getPropertyValue("transform");

        // el1.style.transform = transform2;
        // el2.style.transform = transform1;
        // el1.style.transition = 'transform .1s ease';
        // el2.style.transition = 'transform .1s ease';

        // console.log(el2, el1);

        window.requestAnimationFrame(
            () => {
                setTimeout(() => {
                    container.insertBefore(el2, el1);
                    resolve();
                }, 250)
            }
        )



    });
}