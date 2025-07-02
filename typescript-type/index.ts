// let hasValue: boolean = false;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

// 型推論
let hasValue = false;
// hasValue = 20; // 代入不可

// オブジェクト型
const person: {
    name: string,
    age: number,
} = {
    name: 'Jack',
    age: 21,
}
const person2 = {
    name: {
        first: 'Jack',
        last: 'Smith',
    },
    age: 21,
}

// Object全般 あまり使わない
const person3: Object = {
    name: 'Jack',
    age: 21,
}
const person4: {} = {
    name: 'Jack',
    age: 21,
}

// Object.create();
// console.log(person.age);

// const fruits: string[] = ['Apple', 'Banana', 'Grape'];
// const fruits: any[] = ['Apple', 'Banana', 'Grape', 1];
const fruits = ['Apple', 'Banana', 'Grape', 1];
fruits.push(21);

// Tuple型
const book:[string, number, boolean] = ['business', 1500, false];
book[1] = 700;
book.push(21);        // 配列に追加はエラーにならない TypeScriptは初期値に関しては型を見ている
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
enum CoffeeSize {
    SHORT = 100,
    TALL,       // 101になる
    GRANDE = 'GRANDE',         
    VENTI,      // エラーとなる 初期がが必要
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
}

// coffee.size = 'hello';
// coffee.size = 'SHORT'; // エラー
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);