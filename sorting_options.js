//Сортировка выбором

const select_sort = arr => {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        
        let index_min = i;
        
        for (let j = i + 1; j < l; j++) { 
            if (arr[index_min] > arr[j]) {
                index_min = j;
            }
        }
        
        if (index_min !== i) {
            [arr[i], arr[index_min]] = [arr[index_min], arr[i]];
        }
    }
    
    return arr;
};



//Сортировка пузырьком

const bubble_sort = arr => {
	for (let i = 0, index_first = arr.length - 1; i < index_first; i++) {
        
        let swapped = false;
        
        for (let j = 0, index_second = index_first - i; j < index_second; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        if (!swapped) break;
    }

    return arr;
}