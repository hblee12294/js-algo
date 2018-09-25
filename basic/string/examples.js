console.log('\u00a9')
console.log('\u{1f60d}')

let str = 'Hi'
str[0] = 'h' // Not working
console.log(str[0])

let str2 = 'Widget with id'
console.log( str2.indexOf('Widget') )
console.log( str2.indexOf('widget') )
console.log( str2.indexOf('id') )
console.log( str2.indexOf('id', 3) )

let str3 = 'Widget'
console.log( str3.includes('id') )
console.log( str3.startsWith('Wi') )
console.log( str3.endsWith('et') )

let str4 = ''
for (let i = 65; i <= 220; i++) {
  str4 += String.fromCodePoint(i);
}
console.log( str4 );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ