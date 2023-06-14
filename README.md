"# first-home.work.js" 
#  Task 1
```js
function rezult(a,b) {
    return a+b;
}
console.log(rezult(2,3));
```
# Task 2
```js
function rezult(a,b,c) {
    if (a>b && a>c) {
        return a;
    }else if (b>a && b>c) {
        return b;
    }else return c;
}
console.log(rezult(1,2,3);
```
# Task 3
```js
function sum(a) {
 return y = a + 2 - a % 2;
}
console.log(sum(7));
```
# Task 4
```js
function summa(a,b) {
    let sum = 0
    for (let i = a; i <=b; i++) {
        sum+=i
    }
    return sum
}
console.log(summa(1,4)); 
```
# Task 5
```js
function rezult(x) {
    let a =parseInt(x/100);
    let b =parseInt(x/10)%10;
    let c =parseInt(x%10);
    let d =a+b+c
    return d
}
console.log(rezult(123));
```
# Task 6
```js
function summa(a,b) {
    for (let i = a; i <= b; i++) {
       if (i % 2 == 0) {
        console.log(i+" ");
       }
    }
 
}
summa(10,20); 
```
# Task 7
```js
function sum(a, b) {  
    for (let i = a; i <= b; i++) {
      if (Math.sqrt(i) % 1 === 0) {
        console.log(i+" ");
      }
    }
  }
sum(1,20);
```
# Task 8
```js
function rezult(a,b) {
   
    return c = Math.sqrt(a*a + b*b);
}
console.log(rezult(3,4));
```
# Task 9
```js
function rezult(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;   
    }
    return fact;
}
console.log(rezult(5));
```
# Task 10
```js
function rezult(x) {
    let a = parseInt(x/1000);
    let b = parseInt((x/100)%10);
    let c = parseInt((x/10)%10);
    let d = parseInt(x%10);
    if (a == d && b == c) {
        return true
    }else  return false
}
console.log(rezult(1331));
```
# Task 11
```js
function rezult(x, d) {
    let cnt = 0;
    for (let i = x; i > 0; i = Math.floor(i / 10)) {
      if (i % 10 === d) {
        cnt++;
      }
    }
    return cnt;
  }
  console.log(rezult(12334,3));
  ```