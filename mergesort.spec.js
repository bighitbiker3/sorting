describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,3]) ).toEqual( [[1], [3]] );
  });
  it('is able to split a longer array into two halves', function() {
    expect(split([1,3,3,2,3,5,34,3,4,3]) ).toEqual( [[1,3,3,2,3], [5,34,3,4,3]] );
  });
  it('is able to split an uneven array into two halves', function() {
    expect(split([1,3,4,3,2,]) ).toEqual( [[1,3], [4,3,2]] );
  });
  it('is able to split an uneven array into two halves', function() {
    expect(split([1,3,4,3,2,]) ).toEqual( [[1,3], [4,3,2]] );
  });
});
describe('Merge Sorted', function(){
  it('is able to merge two sorted odd arrays into one sorted array', function(){
    expect(mergeSorted([1,5,8,29], [3,4,9,20,54])).toEqual([1,3,4,5,8,9,20,29,54])
  });
  it('is able to merge two sorted even arrays into one sorted array', function(){
    expect(mergeSorted([1,2,5,6,8,29], [3,4,9,20,44,54])).toEqual([1,2,3,4,5,6,8,9,20,29,44,54])
  });
  it('is able to merge two sorted odd arrays into one sorted array', function(){
    expect(mergeSorted([1,2,5,6,8,29,39], [3,4,9,20,44,54])).toEqual([1,2,3,4,5,6,8,9,20,29,39,44,54])
  });
});
describe('Merge Sort', function(){
  it('is able to sort array', function(){
    expect(mergeSort([1,5,8,29,3,4,9,20,30,54])).toEqual([1,3,4,5,8,9,20,29,30,54])
  });
  it('is able to sort array', function(){
    expect(mergeSort([1,8,28,2])).toEqual([1,2,8,28])
  });
  it('is able to sort array', function(){
    expect(mergeSort([1,8,28,2,7])).toEqual([1,2,7,8,28])
  });
  it('is able to sort array', function(){
    expect(mergeSort([1,8,28,2,7,9,])).toEqual([1,2,7,8,9,28])
  });
});
