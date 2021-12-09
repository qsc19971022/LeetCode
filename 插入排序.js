const arr = [4, 1, 2, 5, 3, 6, 8, 7];

const sort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i];
    let j = i;
    while (j > 0) {
      if (nums[j - 1] > temp) {
        nums[j] = nums[j - 1];
      } else {
        break;
      }
      j--;
    }
    nums[j] = temp;
  }
  return nums;
};

console.log(sort(arr));
