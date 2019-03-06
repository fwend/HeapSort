const heapSort = a => {
    buildMaxHeap(a);
    for (let i = a.length - 1; i >= 0; i--) {
        swap(a, 0, i);
        maxHeapify(a, 0, i);
    }
};

const buildMaxHeap = a => {
    const lastParentIndex = Math.floor(a.length / 2) - 1;
    for (let i = lastParentIndex; i >= 0; i--) {
        maxHeapify(a, i, a.length);
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
