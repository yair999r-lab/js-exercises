
// # String Methods – תרגילים

// ---

// ### תרגיל 1

// מחרוזת: `" hello world "`

// משימה: הסר רווחים מיותרים מהתחלה ומהסוף.

// יש להשתמש ב: `trim`

// פלט צפוי: `"hello world"`

// const hello = "    hello world   "
// const hell = hello.trim()
// console.log(hell);


// ---

// ### תרגיל 2

// מחרוזת: `"user@gmail.com"`

// משימה: בדוק האם המחרוזת מכילה את התו `"@"`.

// const email = "efeffefcdcdc"
// console.log(email.includes('@'));


// יש להשתמש ב: `includes`

// פלט צפוי: `true`

// ---

// ### תרגיל 3

// מחרוזת: `"javascript"`

// משימה: המר את כל האותיות לגדולות.

// יש להשתמש ב: `toUpperCase`

// const str = "javascript"

// const nstr = str.toUpperCase()
// console.log(nstr);

// פלט צפוי: `"JAVASCRIPT"`

// ---

// ### תרגיל 4

// מחרוזת: `"HELLO WORLD"`

// משימה: המר את כל האותיות לקטנות.

// יש להשתמש ב: `toLowerCase`

// const str = "HELLO WORLD"
// const nstr = str.toLowerCase()
// console.log(nstr);


// פלט צפוי: `"hello world"`

// ---

// ### תרגיל 6

// מחרוזת: `"JavaScript"`

// משימה: החזר את **4 התווים הראשונים**.

// יש להשתמש ב: `slice`

// פלט צפוי: `"Java"`

// const str = "JavaScript"
// const nstr = str.slice(0,4)
// console.log(nstr);



// ---

// ### תרגיל 7

// מחרוזת: `"JavaScript"`

// משימה: החזר את **6 התווים האחרונים**.

// יש להשתמש ב: `slice`

// פלט צפוי: `"Script"`

// const str = 'JavaScript'
// const nstr = str.slice(-6)
// console.log(nstr);

// ---

// ### תרגיל 8

// מחרוזת: `"https://example.com"`

// משימה: בדוק האם המחרוזת מתחילה ב-`"https"`.

// יש להשתמש ב: `startsWith`

// פלט צפוי: `true`

// const str = 'https://example.com'
// console.log(str.startsWith('https'));


// ---

// ### תרגיל 9

// מחרוזת: `"mywebsite.org"`

// משימה: בדוק האם המחרוזת מסתיימת ב-`".com"`.

// יש להשתמש ב: `endsWith`

// פלט צפוי: `false`

// const str = 'mywebsite.org'
// console.log(str.endsWith('com'));



// ---

// ### תרגיל 10

// מחרוזת: `"שלום עולם"`

// משימה: החלף את המילה `"שלום"` ב-`"היי"`.

// יש להשתמש ב: `replace`

// פלט צפוי: `"היי עולם"`

// const str = "hello world"
// const nstr = str.replace("hello", "hey")
// console.log(nstr);

// ---

// ### תרגיל 11

// מחרוזת: `"banana"`

// משימה: החלף את **כל** האותיות `"a"` ב-`"o"`.

// יש להשתמש ב: `replaceAll`

// const str = "banana"
// const nstr = str.replaceAll("a", "o")
// console.log(nstr);


// פלט צפוי: `"bonono"`

// ---

// ### תרגיל 12

// מחרוזת: `"one two three"`

// משימה: פצל למערך לפי רווחים.

// יש להשתמש ב: `split`

// פלט צפוי: `["one", "two", "three"]`

// const str = "one two three"
// const nstr = str.split(" ")
// console.log(nstr);


// ---

// ### תרגיל 13

// מחרוזת: `"apple,banana,grape"`

// משימה: פצל למערך והחזר רק **2 איברים ראשונים**.

// יש להשתמש ב: `split`

// פלט צפוי: `["apple", "banana"]`
// const str = "appel,banana,grape"
// const nstr = str.split(",").slice(0,2)
// console.log(nstr);

// ---

// ### תרגיל 14

// מחרוזת: `"banana"`

// משימה: מצא את המיקום של האות **הראשונה** `"a"`.

// יש להשתמש ב: `indexOf`

// פלט צפוי: `1`

// const str = "banana"
// const index = str.indexOf("a")
// console.log(index);



// ---

// ### תרגיל 15

// מחרוזת: `"banana"`

// משימה: מצא את המיקום של האות **האחרונה** `"a"`.

// יש להשתמש ב: `lastIndexOf`

// פלט צפוי: `5`

// --

// const str = "banana"
// const nstr = str.lastIndexOf("a")
// console.log(nstr);

// ### תרגיל 19

// מחרוזת: `"Hello"`

// משימה: החזר את **התו הראשון**.

// יש להשתמש ב: `charAt`

// פלט צפוי: `"H"`

// const str = "hello"
// const fstr = str.charAt()
// console.log(fstr);


// ---

// ### תרגיל 20

// מחרוזת: `"Hello"`

// משימה: החזר את **התו האחרון**.

// יש להשתמש ב: `at`

// פלט צפוי: `"o"`

// const str = "Hello"
// const lstr = str.at(-1)
// console.log(lstr);


// ---

// ### תרגיל 21

// מחרוזות: `"שלום"` ו-`"עולם"`

// משימה: חבר ביניהן עם רווח באמצע.

// const str1 = "hello "
// const str2 = "world"
// const str3 = str1.concat(str2)
// console.log(str3);


// יש להשתמש ב: `concat`

// פלט צפוי: `"שלום עולם"`

// ---

// ### תרגיל 22

// מחרוזת: `"JavaScript"`

// משימה: החזר תת-מחרוזת מאינדקס 2 עד 6 (לא כולל 6).

// יש להשתמש ב: `substring`

// פלט צפוי: `"vaSc"`

// const str = "JavaScript"

// const nstr = str.substring(2,6)
// console.log(nstr);



