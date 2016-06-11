function split(array){
  var firstHalf = array.slice(0, Math.floor(array.length/2));
  var secondHalf = array.slice(Math.floor(array.length/2), array.length)
  return [firstHalf, secondHalf]
}

function mergeSorted(arr1, arr2, sortedArr){
  var sortedArr = []
  while(arr1.length > 0 && arr2.length > 0){
    if(arr1[0]<arr2[0]){
      sortedArr.push(arr1.shift())
    } else {
      sortedArr.push(arr2.shift())
    }
    console.log(arr1.length, arr2.length)
  }
  if(arr1.length ==0){
    sortedArr = sortedArr.concat(arr2)
  }
  else {
    sortedArr = sortedArr.concat(arr1)
  }
  return sortedArr
}

function mergeSort(array) {
  // console.log('this is array at beginning', array)
  if(array.length == 1){

    return array;
  }
    var splitArr = split(array);
    var mergeSortedArr1 = mergeSort(splitArr[0])
    // console.log('this is mergesortedarr1', mergeSortedArr1)
    var mergeSortedArr2 = mergeSort(splitArr[1])
    // console.log('this is mergesortedarr2', mergeSortedArr2)
    return mergeSorted(mergeSortedArr1, mergeSortedArr2)


}
