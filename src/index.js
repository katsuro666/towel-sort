
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortedArr = []
  if (matrix === undefined || matrix.length === 0) {
    return sortedArr
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 1) {
      sortedArr.push(matrix[i].sort((a,b) => b - a))
    } else {
      sortedArr.push(matrix[i])
    }
  }
  return sortedArr.join(',').split(',')
}
