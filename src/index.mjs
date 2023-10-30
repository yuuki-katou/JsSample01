/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1)

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数の再宣言";

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数上書き";
// const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの追加・変更が可能
// const val4 = {
//   name: "yamada",
//   age:28,
// }
// val4.name = "yamaguchi";
// val4.address = "Nara";
// console.log(val4);

//constで定義した配列はプロパティの追加・変更が可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5[2] = "monkey";
// val5.push("fish");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const userName = "Yamada";
// const age = 25;
//「私の名前はYamadaです。年齢は28歳です。」

//従来の方法
// const message1 = "私の名前は"+userName+"です。" + "年齢は"+age+"です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${userName}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str){
//   return str;
// }
// console.log(func1("func1です"));

// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

// アロー関数
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   userName: "Yamanaka",
//   age: 25,
// };

// // const message1 = `名前は${myProfile.userName}です。年齢は${myProfile.age}です。`;
// // console.log(message1);

// const{userName,age} = myProfile;
// const message2 = `名前は${userName}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile2 = [`Yamada`, 25];

// const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
// console.log(message3);

// const [userName, age] = myProfile;
// const message4 = `名前は${userName}です。年齢は${age}です。`;

//デフォルト値
// const sayHello = (name="ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello("Yamada");

// sayHello();

/**
 * スプレッド構文
 */
//配列の展開
// const arr1 =[1,2];
// console.log(...arr1);

// const sumFunc =(num1,num2) =>console.log(num1 +num2);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1,num2,arr3);


// const nameArr = ["田中","山田","中野"];
// for(let index = 0; index < nameArr.length; index ++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((userName) =>{
//   return userName;
// });

// nameArr.map((name) =>console.log(name));
// console.log(nameArr2);

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const nameArra3 =["山田","山口","樋口"];

// const newNameArr = nameArra3.map((userName,index)=>{
//   if(userName ==="樋口"){
//     return `${index}番目はuserNameだ`;
//   }else{
//     return `${index}番目は${userName}さんです`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? `trueです`:`falseです`;
// console.log(val1);

// const num ="1300";
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === `number` ? num.toLocaleString():`数値を入力してください`;
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 >100 ? `100を超えています`:`許容範囲内です`;
// }
// console.log(checkSum(50,60));

// const num =null;
// const fee = num || `金額は未設定です`;
// console.log(fee);

const num2 = 100;
const fee2 = num2 && "何か設定された";
console.log(fee2);



