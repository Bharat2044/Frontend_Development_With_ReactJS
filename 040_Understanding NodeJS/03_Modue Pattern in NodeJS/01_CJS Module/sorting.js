function insertionSort(arr) 
{ 
    let n = arr.length;
	let i, key, j; 
	for (i = 1; i < n; i++) 
	{ 
		key = arr[i]; 
		j = i - 1; 

		/* Move elements of arr[0..i-1], that are 
		greater than key, to one position ahead 
		of their current position */
		while (j >= 0 && arr[j] > key) 
		{ 
			arr[j + 1] = arr[j]; 
			j = j - 1; 
		} 
		arr[j + 1] = key; 
	} 
} 


function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
 
function selectionSort(arr)
{
    let n = arr.length;
    var i, j, min_idx;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
        swap(arr,min_idx, i);
    }
}


module.exports.bubbleSort = function bubbleSort(arr)
{
    let n = arr.length;
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++) 
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) 
        {
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
 
        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
}


module.exports.insertionSort = insertionSort;
module.exports.selectionSort = selectionSort;
