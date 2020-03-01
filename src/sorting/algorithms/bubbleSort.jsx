

export default function BubbleSort(data) {

    let animation = [];


    let flag = true;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length - 1 - i; j++) {
            animation.push([j, j + 1]);
            if (data[j] > data[j + 1]) {
                animation.push([data[j], data[j + 1]]);
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
                flag = false;
            } else {
                animation.push([data[j], data[j + 1]]);
            }
        }

        if (flag) {
            return animation;
        }
    }
    return animation;
}
