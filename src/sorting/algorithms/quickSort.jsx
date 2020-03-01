
export default function QuickSort(data) {
    let animation = [];
    QuickSortAnimation(animation, data, 0, data.length);
    return animation;
}

function QuickSortAnimation(animation, data, l, h) {
    if (l < h) {
        let mid = QuickSortHelper(animation, data, l, h);
        QuickSortAnimation(animation, data, l, mid)
        QuickSortAnimation(animation, data, mid + 1, h)
    }
    return data;
}

function QuickSortHelper(animation, data, l, h) {
    let pivot = data[l];
    let i = l;
    let j = h;
    //select pivot
    animation.push(['pivot', l]);
    let currAnimation = [];
    while (i < j) {
        i++;
        // find smaller values
        let newItem1 = [];
        newItem1.push(i);
        while (i < h && pivot >= data[i]) {
            i++;
            newItem1.push(i);
        };
        currAnimation.push(newItem1);
        j--;

        // find larger  values

        let newItem2 = [];
        newItem2.push(j);
        while (j > 0 && pivot < data[j]) {

            j--;
            newItem2.push(j);
        };
        currAnimation.push(newItem2);
        animation.push(currAnimation);
        if (i < j) {
            //swap i,j
            animation.push(['swap', i, j]);
            swap(data, i, j);
        }
    }
    animation.push(['swap', l, j]);
    //swap  correct postions that value will be sorted postions
    swap(data, l, j);
    return j;
}

function swap(data, i, j) {
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}