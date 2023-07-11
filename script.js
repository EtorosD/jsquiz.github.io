function solution(blocks) {
    let left = 0;
    let right = blocks.length - 1;
    let maxDistance = 0;
  
    while (left < right) {
      if (blocks[left] >= blocks[right]) {
        maxDistance = Math.max(maxDistance, right - left);
        right--;
      } else {
        left++;
      }
    }
  
    return maxDistance;
  }
  console.log(solution([2, 6, 8, 5])); 
  console.log(solution([1, 5, 5, 2, 6])); 
    