/**
 * @param {number} num
 * @return {boolean}
 */
var arr = [2,3,5]
var isUgly = function(num) {
    let remBool = getRem(num)
    return remBool
};

function getRem(num){
    if(num == 0){
        return false
    }
    if(arr.indexOf(num) > -1 || num == 1){
        return true
    }
    for(v of arr){
        if(num % v == 0){
            return getRem(num / v)
        }
    }
    return false
}

isUgly(14)