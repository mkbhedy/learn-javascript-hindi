// Prefix Operator (++x)
// Postfix Operator (x++)

let a = 3;
let b = ++a;
console.log(`A value is: ${a}`, `B value is: ${b}`);
// Result is A=> 4 and B=>4
/* 
Reason: Jab hamne a ki value 3 ki aur uske baad b ki value ++a ki to behind the scane jab console log hua to a ki value jo 3 thi wo ++3 hone ke wajh se 4 ho gyi thi aur b ki value me hamne pahle hi postfix de rkha tha to 4 aa gya.
*/

// PREFIX

let x = 5;
let y = x++;
console.log(`X value is: ${x}, Y Value is: ${y}`);
/*
isme jab console.log kiya to pahle x ki value jo 5 thi usme y ki value ki wajh se 6 ho gya aur y ki value still 5 hi rahi.
*/