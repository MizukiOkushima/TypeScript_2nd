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
// person.hogehoge = 'hogehoge'; // エラーにならないが、型定義にないプロパティを追加している

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
    // VENTI,      // エラーとなる 初期がが必要
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
}

// coffee.size = 'hello';
// coffee.size = 'SHORT'; // エラー
// coffee.size = CoffeeSize.SHORT;
// console.log(CoffeeSize.SHORT);

// any型

let anything: any = true;      // boolean型
anything = 'hello';            // string型
anything = ['hello', 33, true];// 配列型
anything = {};                 // オブジェクト型
anything.test = 'test';        // プロパティ追加も可能
let banana = 'banana';
banana = anything;

// union型

let unionType: number | string = 10; //number型とstring型の両方を許容
// unionType.toUpperCase(); // string型のメソッドを使用できるが、number型ではエラーになる
unionType = 'hello'; // string型に変更可能
unionType.toUpperCase(); // string型のメソッドを使用できる

let unionType2: (number | string)[] = [21, 'hello']; // 配列の中にnumber型とstring型の両方を許容

// リテラル型
const apple: 'apple' = 'apple'; // 'apple'という文字列のみを許容するリテラル型
// const apple2: 'apple2' = 'hello'; // エラーになる 'apple2'という文字列のみを許容するリテラル型
const apple3: 0 = 0; // 0という数値のみを許容するリテラル型
// const apple4: true = false; // trueという真偽値のみを許容するリテラル型 エラー
// constを使用することでリテラル型が採用される
// letが使用されることで型推論が行われる

// リテラル型のユニオン型
let clothSize: 'small' | 'medium' | 'large' = 'large'; // リテラル型のユニオン型
const cloth= {
  color: 'white',
  size: clothSize,
};
const cloth2: {
  color: string,
  size: 'small' | 'medium' | 'large',
} = {
  color: 'white',
  size: 'medium',
}

// typeAlias型
type ClothSize3 = 'small' | 'medium' | 'large'; // リテラル型のユニオン型をtypeエイリアスで定義
// type number = 'small' | 'medium' | 'large'; // Number型をtypeエイリアスで定義はできない
let ClothSize3: ClothSize3 = 'large'; // typeエイリアスを使用してリテラル型のユニオン型を定義
let cloth3: {
    color: string,
    size: ClothSize3,
} = {
    color: 'white',
    size: 'medium',
}

// 関数における型定義
function add(num1: number, num2: number): number {
// function add(num1, num2): number { // パラメータに型定義がない場合、any型となる
    return num1 + num2;
}
// add('hello', 2); // エラーになる

// void型 何も返さない
function sayHello(): void {
    console.log('Hello');
}
// undefinedはreturnが無いと使えない（基本的に使用しないでvoidを使用すること）
function sayHello2(): undefined {
    console.log('Hello');
    return ; // 明示的にundefinedを返す
}

console.log(sayHello()); // undefinedが出力される
let tmp: undefined;

let tmpUndefined: undefined = undefined; // undefined型の変数 undefinedのみを許容する
let tmpNull: null = null; // null型の変数 nullのみを許容する

const anotherAdd: (n1: number, n2: number) => number = add; // =>を使用する
anotherAdd(3, 3);

const anotherAdd2: (n1: number, n2: number) => number = function (num1: number, num2: number): number {  // 無名関数を使用する場合の記述
    return num1 + num2;
}
anotherAdd2(3, 3);

const anotherAdd3 = function (num1: number, num2: number): number {
    return num1 + num2;
}
anotherAdd3(3, 3);

const anotherAdd4: (n1: number, n2: number) => number = function (num1, num2): number {
    return num1 + num2;
}
anotherAdd4(3, 3);

const doubleNumber = (number: number): number => number * 2; // アロー関数を使用する
const doubleNumber2: (number: number) => number = num => num * 2; // アロー関数を使用する

function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
 }
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});