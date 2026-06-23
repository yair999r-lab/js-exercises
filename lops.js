// # תרגילים – לולאות ב-JavaScript

// ## חלק 1 – תרגילי FOR (חובה להשתמש ב-for)

// ---

// ### תרגיל 1 – הדפסת מספרים 1–10

// הדפס את כל המספרים מ-1 עד 10.

// for (let i = 1; i < 11; i ++) {console.log(i)}

// ### תרגיל 2 – ספירה אחורה

// הדפס מ-10 עד 1 בסדר יורד.

// for (let i = 10; i > 0; i --) {console.log(i)}

// ### תרגיל 3 – סכום מספרים

// חשב את סכום כל המספרים במערך.

// ---
// const numbers = [1, 2, 3, 4, 5];
// let total = 0
// for(const num of numbers){total += num}
// console.log(total)

// ### תרגיל 4 – הדפסת שמות
// הדפס כל שם בנפרד.

// const names = ["דנה", "יוסי", "מיכל", "רון"];

// for(const name of names) {console.log(name)}

// ### תרגיל 5 – הדפסת רק מספרים זוגיים
// הדפס רק את המספרים הזוגיים.

// const numbers = [2, 5, 8, 11, 14, 17, 20];

// for(const num of numbers)
//     {if (num % 2 ==0)
//          {console.log(num)}}

// ---

// ### תרגיל 6 – מציאת המספר הכי גדול

// מצא והדפס את המספר הגדול ביותר במערך.
// const numbers = [3, 99, 12, 45, 78];

// let x = numbers[0]

// for(num of numbers){if (num > x){x = num}}
// console.log(x)

// ### תרגיל 7 – הפיכת מחרוזת לרשימה

// const word = "javascript";

// let list = []
// for(let leteter of word){list.push(leteter)}
// for(item of list){console.log(item)}
// הדפס כל אות בנפרד.

// ---

// ### תרגיל 8 – כפל כל איבר ב-2

// הדפס כל מספר כשהוא מוכפל ב-2.
// const numbers = [1, 2, 3, 4];

// for(let num of numbers) {console.log(num * 2)}
// ---

// ## חלק 2 – תרגילי WHILE (חובה להשתמש ב-while)

// ---

// ### תרגיל 9 – ספירה עד 10

// הדפס מספרים מ-1 עד 10 בעזרת `while`.
// let i = 1;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// ### תרגיל 10 – קלט עד עצירה

// let input = "";

// while (input != 'stop'){console.log("plase enter input")}
// כל עוד המשתמש לא כותב `"stop"` — המשך לבקש קלט.

// ### תרגיל 11 – חישוב סכום עד 0

// קבל מספרים מהמשתמש עד שהוא מכניס 0, וסכם את כולם.
// let input = ""

// let total = 0
// while (input != 0){total += input}

// ### תרגיל 12 – ניחוש מספר

// בקש מהמשתמש לנחש עד שיצליח.

// const secret = 7;

// let input = ""

// while(input != secret){console.log("plase enter your guuse")}

// ### תרגיל 13 – ספירה עם תנאי

// let x = 1;

// כל עוד `x` קטן מ-20 — הדפס את הערך והגדל ב-1.

// while(x < 20){console.log(x); x++}

// ### תרגיל 14 – עצירה לפי תנאי

// let password = "";

// המשך לבקש סיסמה עד שהמשתמש מכניס `"1234"`.

// while (password !== "1234") {
//   console.log("plase enter a password");
// }
// console.log("welcom");

// ## חלק 3 – תרגילי DO-WHILE (חובה להשתמש ב-do-while)

// ### תרגיל 15 – לפחות ריצה אחת

// הדפס לפחות פעם אחת גם אם התנאי לא מתקיים.

// let count = 0;

// do {
//   console.log(count);
// } while (count != 0);

// ### תרגיל 16 – תפריט משתמש

// let choice;

// do {
//   console.log(choice);
// } while (choice != "exit");

// הרץ תפריט עד שהמשתמש בוחר `"exit"`.

// ## חלק 4 – תרגילי BREAK ו-CONTINUE

// ### תרגיל 17 – עצירה כשנמצא מספר גדול

// const numbers = [1, 3, 7, 9, 15, 2];

// for(num of numbers){if (num > 10) break; console.log(num)}

// עצור בלולאה כשנמצא מספר גדול מ-10.

// ### תרגיל 18 – דילוג על שליליים

// הדפס רק מספרים חיוביים (דלג על שליליים עם `continue`).

// const numbers = [5, -1, 8, -3, 10];

// for(num of numbers){if(num % 2 == 0) console.log(num)}

// ### תרגיל 19 – מציאת הראשון שעומד בתנאי

// const ages = [12, 15, 18, 21, 25];
// for (const age of ages) {
//   if (age >= 18) {
//     console.log(age);
//     break;
//   }
// }

// מצא את הגיל הראשון שגדול או שווה ל-18.

// ---

// ## חלק 5 – תרגילים חופשיים (בחירת לולאה)

// ---

// ### תרגיל 20 – בחירת סוג לולאה
// בחר בעצמך איזו לולאה מתאימה (`for` / `while` / `do-while`) והדפס את כל הערכים.


// const arr = [10, 20, 30, 40, 50];


// for(const item of arr) {console.log(item)}

// ### תרגיל 21 – סכום רק מספרים זוגיים

// const numbers = [1, 2, 3, 4, 5, 6];

// בחר לולאה מתאימה וסכם רק את המספרים הזוגיים.

// for (const num of numbers) {
//   if (num % 2 == 0) {
//     console.log(num);
//   }
// }

// ### תרגיל 22 – חיפוש ערך במערך

// const target = 25;
// const numbers = [10, 15, 20, 25, 30];

// for (const num of numbers) {
//   if (num == target) {
//     console.log(target);
//     break;
//   }
// }

// מצא אם המספר `target` קיים במערך והדפס בהתאם.

// ### תרגיל 23 – הדפסת כל אות גדולה

// const word = "hello world"

// הדפס כל אות באותיות גדולות.
// const upword = word.toUpperCase()
// for(const letter of upword) {console.log(letter)}

// ### תרגיל 24 – עצירה לפי תנאי מורכב

// const numbers = [2, 4, 6, 8, 10, 12];

// for(const num of numbers){console.log(num)
//   if(num > 8 && num % 2 ==0) break
// }
// עצור כשמספר גדול מ-8 **וגם** זוגי.

// ### תרגיל 25 – אתגר מסכם (בחירה חופשית)

// const students = [
//   { name: "דנה", grade: 55 },
//   { name: "יוסי", grade: 100 },
//   { name: "מיכל", grade: 78 },
//   { name: "רון", grade: 45 },
// ];

// דרישות:

// - מצא את כל התלמידים שעברו (מעל 60)
// - עצור אם נמצא תלמיד עם ציון 100
// - הדפס שמות בלבד

// for (student of students) {
//   if (student["grade"] >= 100) {
//     console.log(student["name"]);
//     break;
//   } else if (student["grade"] >= 60) console.log(student["name"]);
// }
