// let hasValue: boolean = false;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
// 型推論
var hasValue = false;
// hasValue = 20; // 代入不可
// オブジェクト型
var person = {
    name: 'Jack',
    age: 21,
};
var person2 = {
    name: {
        first: 'Jack',
        last: 'Smith',
    },
    age: 21,
};
// person.hogehoge = 'hogehoge'; // エラーにならないが、型定義にないプロパティを追加している
// Object全般 あまり使わない
var person3 = {
    name: 'Jack',
    age: 21,
};
var person4 = {
    name: 'Jack',
    age: 21,
};
// Object.create();
// console.log(person.age);
// const fruits: string[] = ['Apple', 'Banana', 'Grape'];
// const fruits: any[] = ['Apple', 'Banana', 'Grape', 1];
var fruits = ['Apple', 'Banana', 'Grape', 1];
fruits.push(21);
// Tuple型
var book = ['business', 1500, false];
book[1] = 700;
book.push(21); // 配列に追加はエラーにならない TypeScriptは初期値に関しては型を見ている
// console.log(book[3]); // push時にはエラーにならないが型がないことでエラーとなる
// Enum型 列挙型
// const CoffeeSize = {
//     SHORT: 'SHORT',
//     TALL: 'TALL',
//     GRANDE: 'GRANDE',
//     VENTI: 'VENTI',
// }
// CoffeeSizeという型が作成される
// CoffeeSizeというオブジェクトも作成される
// enum CoffeeSize {
//     SHORT = 'SHORT',
//     TALL = 'TALL',
//     GRANDE = 'GRANDE',
//     VENTI = 'VENTI',
// }
// enum CoffeeSize {
//     SHORT,
//     TALL,
//     GRANDE,
//     VENTI,
// }
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 100] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 101] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    // VENTI,      // エラーとなる 初期がが必要
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
// coffee.size = 'hello';
// coffee.size = 'SHORT'; // エラー
// coffee.size = CoffeeSize.SHORT;
// console.log(CoffeeSize.SHORT);
// any型
var anything = true; // boolean型
anything = 'hello'; // string型
anything = ['hello', 33, true]; // 配列型
anything = {}; // オブジェクト型
anything.test = 'test'; // プロパティ追加も可能
var banana = 'banana';
banana = anything;
// union型
var unionType = 10; //number型とstring型の両方を許容
// unionType.toUpperCase(); // string型のメソッドを使用できるが、number型ではエラーになる
unionType = 'hello'; // string型に変更可能
unionType.toUpperCase(); // string型のメソッドを使用できる
