// 1
// function rezult(a,b) {
//     return a+b;
// }
// console.log(rezult(2,3));

// 2
// function rezult(a,b,c) {
//     if (a>b && a>c) {
//         return a;
//     }else if (b>a && b>c) {
//         return b;
//     }else return c;
// }
// console.log(rezult(1,2,3));

// 3
// function sum(a) {
//  return y = a + 2 - a % 2;
// }
// console.log(sum(7));

// 4
// function summa(a,b) {
//     let sum = 0
//     for (let i = a; i <=b; i++) {
//         sum+=i
//     }
//     return sum
// }
// console.log(summa(1,4)); 

// 5
// function rezult(x) {
//     let a =parseInt(x/100);
//     let b =parseInt(x/10)%10;
//     let c =parseInt(x%10);
//     let d =a+b+c
//     return d
// }
// console.log(rezult(123));

// 6
// function summa(a,b) {
//     for (let i = a; i <= b; i++) {
//        if (i % 2 == 0) {
//         //    return i
//         console.log(i+" ");
//        }
//     }
 
// }
// summa(10,20); 

// 7
// function sum(a, b) {  
//     for (let i = a; i <= b; i++) {
//       if (Math.sqrt(i) % 1 === 0) {
//         console.log(i+" ");
//       }
//     }
//   }
// sum(1,20);

// 8
// function rezult(a,b) {
   
//     return c = Math.sqrt(a*a + b*b);
// }
// console.log(rezult(3,4));

// 9
// function rezult(n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact *= i;   
//     }
//     return fact;
// }
// console.log(rezult(5));

// 10
// function rezult(x) {
//     let a = parseInt(x/1000);
//     let b = parseInt((x/100)%10);
//     let c = parseInt((x/10)%10);
//     let d = parseInt(x%10);
//     if (a == d && b == c) {
//         return true
//     }else  return false
// }
// console.log(rezult(1331));

// 11
// function rezult(x, d) {
//     let cnt = 0;
//     for (let i = x; i > 0; i = Math.floor(i / 10)) {
//       if (i % 10 === d) {
//         cnt++;
//       }
//     }
//     return cnt;
//   }
//   console.log(rezult(12334,3));
