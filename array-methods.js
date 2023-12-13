let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 54, 87];
nums.sort((a, b) => a - b);
console.log(nums);

let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 54, 87];
nums1.sort((a, b) => b - a);
console.log(nums1);

nums[nums.length] = 100;
console.log(nums);

const fruits = ["apple", "banana", "mango", "pine"];
fruits;
