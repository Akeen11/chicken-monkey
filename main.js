// function range(start, end) {
//     var ans = [];
//     for (let i = start; i <= end; i++) {
//         ans.push(i);
//     }
//     return ans;
// }

// console.log(range(1,100))

for (let i = 0; i <= 100; i++) {
    
    if (i % 5 == 0 && i % 7 === 0) {
        console.log("chickenmonkey")
    }
    else if (i % 5 == 0) { 
        console.log("chicken")
    }
    else if (i % 7 == 0) { 
        console.log("monkey")
    }
    else {
    console.log(i)
    }

}