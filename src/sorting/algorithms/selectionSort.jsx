
export default function SelectionSort(data) {
    let animation = [];
    let minIdx, min;
    for (let i = 0; i < data.length - 1; i++) {
        minIdx = i;
        min = data[i];
        for (let j = i + 1; j < data.length; j++) {
            animation.push([i, j]);
            if (min > data[j]) {
                minIdx = j;
                min = data[j];
            }
        }

        let temp = data[i];

        animation.push([true, [temp, data[minIdx]], [i, minIdx]]);
        data[i] = data[minIdx];
        data[minIdx] = temp;
    }
    return animation;
}
