//宣言する
//１以上(100まで)の整数とする
let num = Math.floor (Math.random() * 100) + 1;
console.log(num);

//条件が一番厳しいものから記載！（→上から実行されてしまうから）
if ((num % 3 === 0)&&(num % 5 === 0)) {
  console.log('3と5の倍数です');
}
else if (num % 3 === 0){
  console.log ('3の倍数です');
} 
else if (num % 5 === 0){
  console.log('5の倍数です');
}
else {
  console.log(num);
}