const heapSort = a => {
    buildMaxHeap(a);
    for (let len = a.length - 1; len >= 0; len--) {
        swap(a, 0, len);
        maxHeapify(a, 0, len);
    }
};

const buildMaxHeap = a => {
    const lastParentIndex = Math.floor(a.length / 2) - 1;
    for (let p = lastParentIndex; p >= 0; p--) {
        maxHeapify(a, p, a.length);
    }
};

const maxHeapify = (tree, i, len) => {
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    let largest = i;

    if (l < len && tree[l] > tree[largest]) {
        largest = l;
    }

    if (r < len && tree[r] > tree[largest]) {
        largest = r;
    }

    if (largest !== i) {
        swap(tree, i, largest);
        maxHeapify(tree, largest, len);
    }
};

const swap = (tree, i, j) => {
    const tmp = tree[i];
    tree[i] = tree[j];
    tree[j] = tmp;
};

const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
heapSort(arr);
console.log(arr);
