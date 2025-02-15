const uniqueArray = (arr)=>{
    return arr.filter((val, index, num)=>num.indexOf(val) === index);
}

module.exports = {
    uniqueArray
}