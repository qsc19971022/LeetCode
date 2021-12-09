const arr = [4, 1, 2, 5, 3, 6, 8, 7];

const sort = (nums) => {
  for(let i = 0; i < nums.length; i ++ ) {
    for(let j = i; j < nums.length; j ++) {
      if (nums[i] < nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums;
}

console.log(sort(arr));