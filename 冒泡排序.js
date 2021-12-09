const arr = [4, 1, 2, 5, 3, 6, 8, 7];

const sort = (nums) => {
  for (let i = 0; i < nums.length - 1; i ++) {
    for(let j = 0; j < nums.length - 1 - i; j ++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

console.log(sort(arr));