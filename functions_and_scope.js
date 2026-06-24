// # Functions & Scope – תרגילים

// ## תרגילים בסיסיים


// ### תרגיל 1

// כתוב פונקציה שמקבלת שם ומחזירה הודעת שלום.

// // input:  "Moshe"
// // output: "Hello Moshe"

// function greed(name) {
//   return (`hello ${name}`);
// }

// console.log(greed('yair'))

// ### תרגיל 2

// כתוב פונקציה שמקבלת שני מספרים ומחזירה את הסכום שלהם.

// const add = (num1, num2) => num1 + num2

// console.log(add(1, 4))

// ### תרגיל 3

// כתוב פונקציה שמחזירה `true` אם מספר זוגי, אחרת `false`.

// const bollean = (num) => num % 2 == 0

// console.log(bollean(2))

// ### תרגיל 4

// כתוב פונקציה שמקבלת מערך ומחזירה את האיבר הראשון.

// const arry = (arr) => arr[0]

// console.log(arry([112,3,4,5]))

// ### תרגיל 5

// כתוב פונקציה שמקבלת מחרוזת ומחזירה אותה באותיות גדולות.

// const uppers = (str) => str.toUpperCase()

// console.log(uppers("sssSs"))


// ## תרגילים – הבנת Scope

// ---

// ### תרגיל 6

// מה יודפס בקוד הבא? הסבר למה.

// let x = 5;

// function test() {
//   let x = 10;
//   console.log(x);
// }

// test();
// console.log(x);


// ### תרגיל 7

// מה הבעיה בקוד הבא? תקן אותו.


// function test() {
//   globalThis.y = 10;
// }
// test();
// console.log(y);

// ### תרגיל 8

// מה יודפס?

// let x = 1;

// function a() {
//   console.log(x);
// }

// function b() {
//   let x = 2;
//   a();
// }

// b();

// ### תרגיל 9

// כתוב פונקציה שמנסה לגשת למשתנה פנימי מחוץ לפונקציה — וגרום לשגיאה.

// function error() {
//   e();
//   x = 10;
//   return x;
// }

// function e() {
//   let x = 1;
// }

// console.log(error());

// ### תרגיל 10

// תקן את הקוד כך שלא תהיה תלות במשתנה גלובלי.

// let count = 0;

// function add(count) {
//    count++;
// }

// add(count)


// ## תרגילים בינוניים

// ### תרגיל 11

// כתוב פונקציה שמקבלת מערך מספרים ומחזירה סכום — **בלי להשתמש במשתנה גלובלי**.

// const arry = [1, 2, 3, 4, 5];

// function count(arr) {
//   let total = 0;
//   for (const num of arr) {
//     total += num;
//   }
//   return total;
// }
// console.log(count(arry));
// ---

// ### תרגיל 12

// כתוב פונקציה שמקבלת מספר ומחזירה את הריבוע שלו.

// לאחר מכן כתוב פונקציה נוספת שמשתמשת בה.

// const squre = (num) => num * num

// const getNum = (num) => squre(num)
// console.log(getNum(5))


// ### תרגיל 13

// מה יודפס? הסבר למה.

// let x = 10;

// function test(x) {
//   return x * 2;
// }

// console.log(test(5));

// ## תרגילים מתקדמים

// ### תרגיל 14

// כתוב פונקציה שמקבלת מערך ומחזירה רק מספרים זוגיים — **ללא שימוש במשתנים חיצוניים**.

// function even(arr) {
//   for (const num of arr) {
//     if (num % 2 == 0) {
//       console.log(num);
//     }
//   }
// }
// even([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// ---

// ### תרגיל 15

// מצא את הבאג והסבר:

// let total = 0;

// function addToTotal(num) {
//   total += num;
// }

// function reset() {
//   total = 0;
// }

// addToTotal(5);
// addToTotal(10);
// console.log(total);

// - למה זה מסוכן?
// - איך היית משפר את הקוד?
