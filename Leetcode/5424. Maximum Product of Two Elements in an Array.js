/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {

    function product(a, b) {
        return (a - 1) * (b - 1);
    }

    const n = nums.length;
    if (n < 2) {
        throw new Error("Error");
    }

    let max = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let currentProduct = product(nums[i], nums[j]);
            if (max < currentProduct) {
                max = currentProduct;
            }
        }
    }
    return max
};

module.exports = maxProduct;