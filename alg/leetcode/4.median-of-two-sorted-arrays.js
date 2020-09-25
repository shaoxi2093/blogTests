/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let mid = (m + n) / 2;

  while (true) {
    if (nums1[Math.floor(m / 2)] <= nums2[Math.floor(n / 2)]) {
      nums1.splice(0, Math.max(Math.floor(m / 2) - 1, 1));
    } else {
      nums2.splice(0, Math.max(Math.floor(m / 2) - 1, 1));
    }
    m = nums1.length;
    n = nums2.length;
    mid = (m + n) / 2;


    console.log(nums1, nums2, m, n);
    if (m == 0) {
      return (m + n) % 2 == 0 ? (nums2[mid - 1] + nums2[mid]) / 2 : nums2[mid];
    }
    if (n == 0) {
      return (m + n) % 2 == 0 ? (nums1[mid - 1] + nums1[mid]) / 2 : nums1[mid];
    }
  }
};



const res = findMedianSortedArrays([1,3,4,6,11,18], [2,3,4,6])
console.log(res)

const findMedianSortedArrays2 = (nums1, nums2) => {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b > 0)
  console.log('arr===>', arr)
  const mid = Math.ceil(arr.length / 2)
  return arr.length % 2 == 0 ? (arr[mid - 1] + arr[mid]) / 2 : arr[mid]
}

const res2 = findMedianSortedArrays2([1,3,4,6,11,18], [2,3,4,6])
console.log(res2)
// @lc code=end
