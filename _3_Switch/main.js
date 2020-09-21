// Câu lệnh rẽ nhánh - Switch

var date = 8;

switch(date) {
    case 2: 
        console.log('Hôm nay là thứ 2');
        break;
    case 3: 
        console.log('Hôm nay là thứ 3');
        break;
    case 4: // Sử dụng === để so sánh
        console.log('Hôm nay là thứ 4');
        break;
    case 5: 
        console.log('Hôm nay là thứ 5');
        break;
    default:
        console.log('Không biết');
}
/** không sử dụng break để có thể chạy 
 * được nhiều trường hợp
 * Ví dụ: 
 * case 2:
 * case 3:
 * case 4:
 */

 /**
  * Trong trường hợp 
  * "So sánh tính đúng sai"
  * if (a > b) thì sử dụng if else
  * 
  * Trong trường hợp 
  * "biết trước giá trị"
  * thì sử dụng switch để định nghĩa các 
  * case và lọc case (Từ 3 case trở lên thì 
  * sử dụng if else)
  */