// vergil challenge 2024
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e


function countBy(x, n) {
    
    let z = [];

    for(i = 1; i <= n; i++){

        z.push(i * x)
    }
  
    return z;
  }

  console.log(countBy(2,5))