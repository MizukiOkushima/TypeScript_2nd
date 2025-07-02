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
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
// coffee.size = 'hello';
// coffee.size = 'SHORT'; // エラー
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);
