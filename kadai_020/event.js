//html要素 button id=”btn”　がclickされたら、イベント処理をする
//html要素　h2 id=”text” の値を更新する「ボタンをクリックしました」※ textContentプロパティ


//HTML要素を定数に代入
const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',()=>{
  text.textContent ='ボタンをクリックしました';
});
