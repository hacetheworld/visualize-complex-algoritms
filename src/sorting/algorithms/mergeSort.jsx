
export default function MergeSort(data) {
    let animation = [];
    let l = 0, h = data.length - 1;
    MergeSortAnimation(animation, data, l, h);

    return animation;
}

function MergeSortAnimation(animation, data, l, h) {
    if (l < h) {
        let mid = Math.floor((l + h) / 2);
        MergeSortAnimation(animation, data, l, mid)
        MergeSortAnimation(animation, data, mid + 1, h)
        return mergeSortHelper(
            animation,
            data,
            l,
            mid,
            h
        );
    }
    //return data;

}

function mergeSortHelper(animation, arr, l, mid, h) {
    let aux = [];
    let i = l;
    let k = l;
    let j = mid + 1;

    while (i <= mid && j <= h) {
        animation.push([i, j]);

        if (arr[i] < arr[j]) {
            animation.push([true, k, arr[i]]);

            aux[k++] = arr[i++];

        } else {
            animation.push([true, k, arr[j]]);
            aux[k++] = arr[j++];

        }
    }

    while (i <= mid) {
        animation.push([i, i]);
        animation.push([true, k, arr[i]]);
        aux[k++] = arr[i++];
    }

    while (j <= h) {
        animation.push([j, j]);
        animation.push([true, k, arr[j]]);
        aux[k++] = arr[j++];
    }
    for (i = l; i <= h; i++) {
        arr[i] = aux[i];
    }
    return arr;
}