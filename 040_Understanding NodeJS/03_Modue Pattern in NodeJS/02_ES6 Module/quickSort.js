// Function to partition the array and return the partition index
function partition(arr, low, high) {
	// Choosing the pivot
	let pivot = arr[high];

	// Index of smaller element and indicates the right position of pivot found so far
	let i = low - 1;

	for (let j = low; j <= high - 1; j++) {
		// If current element is smaller than the pivot
		if (arr[j] < pivot) {
			// Increment index of smaller element
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
		}
	}

	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
	return i + 1; // Return the partition index
}

// The main function that implements QuickSort
function f(arr, low, high) {
	if (low < high) {
		// pi is the partitioning index, arr[pi] is now at the right place
		let pi = partition(arr, low, high);

		// Separately sort elements before partition and after partition
		f(arr, low, pi - 1);
		f(arr, pi + 1, high);
	}
}

function quickSort(arr) {
    return f(arr, 0, arr.length-1);
}



module.exports = quickSort;