// Đối tượng Date Giờ đông dương
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${day}/${month}/${year}`);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
