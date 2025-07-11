let age = 18;   // 我之後可以改 age = 20
const name = "小明";  // 不能改 name = "小華"
if (age >= 18) {
    console.log("可以投票");
  } else {
    console.log("未滿 18");
  }
  for (let i = 0; i < 3; i++) {
    console.log("我吃了第 " + (i + 1) + " 顆蘋果");
  }
  function sayHello(name) {
    console.log("你好，" + name);
  }
  
  sayHello("阿明"); // 叫一次這個函數
  document.querySelector("#myBtn").addEventListener("click", () => {
    console.log("你點了按鈕！");
  });
  
  console.log("這行會印在瀏覽器的 Console");
  document.querySelector("h1").innerText = "JS 已經跑起來 🎉";
  
  let numbers = [1, 2, 3];
  let doubled = numbers.map(n => n * 2); // [2, 4, 6]
  console.log(doubled);

  let numbers2 = [1, 2, 3, 4];
let even = numbers2.filter(n => n % 2 === 0); // [2, 4]
console.log(even);

let fruits = ["蘋果", "香蕉", "橘子", "西瓜"];
fruits.forEach(f => console.log("我有：" + f));
