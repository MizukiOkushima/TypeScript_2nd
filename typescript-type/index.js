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
var unionType2 = [21, 'hello']; // 配列の中にnumber型とstring型の両方を許容
// リテラル型
var apple = 'apple'; // 'apple'という文字列のみを許容するリテラル型
// const apple2: 'apple2' = 'hello'; // エラーになる 'apple2'という文字列のみを許容するリテラル型
var apple3 = 0; // 0という数値のみを許容するリテラル型
// const apple4: true = false; // trueという真偽値のみを許容するリテラル型 エラー
// constを使用することでリテラル型が採用される
// letが使用されることで型推論が行われる
// リテラル型のユニオン型
var clothSize = 'large'; // リテラル型のユニオン型
var cloth = {
    color: 'white',
    size: clothSize,
};
var cloth2 = {
    color: 'white',
    size: 'medium',
};
// type number = 'small' | 'medium' | 'large'; // Number型をtypeエイリアスで定義はできない
var ClothSize3 = 'large'; // typeエイリアスを使用してリテラル型のユニオン型を定義
var cloth3 = {
    color: 'white',
    size: 'medium',
};
// 関数における型定義
function add(num1, num2) {
    // function add(num1, num2): number { // パラメータに型定義がない場合、any型となる
    return num1 + num2;
}
// add('hello', 2); // エラーになる
// void型 何も返さない
function sayHello() {
    console.log('Hello');
}
// undefinedはreturnが無いと使えない（基本的に使用しないでvoidを使用すること）
function sayHello2() {
    console.log('Hello');
    return; // 明示的にundefinedを返す
}
console.log(sayHello()); // undefinedが出力される
var tmp;
var tmpUndefined = undefined; // undefined型の変数 undefinedのみを許容する
var tmpNull = null; // null型の変数 nullのみを許容する
var anotherAdd = add; // =>を使用する
anotherAdd(3, 3);
var anotherAdd2 = function (num1, num2) {
    return num1 + num2;
};
anotherAdd2(3, 3);
var anotherAdd3 = function (num1, num2) {
    return num1 + num2;
};
anotherAdd3(3, 3);
var anotherAdd4 = function (num1, num2) {
    return num1 + num2;
};
anotherAdd4(3, 3);
var doubleNumber = function (number) { return number * 2; }; // アロー関数を使用する
var doubleNumber2 = function (num) { return num * 2; }; // アロー関数を使用する
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// unknown型
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello'; // 文字列入れられる
unknownInput = 21; // 数値も入れられる
unknownInput = true; // any型と同様に何でも代入可能
// text = unknownInput; // エラーになる unknown型は直接代入できない ナローイング,タイプガードが必要
text = anyInput; // any型は直接代入できる
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// satisfies演算子 型のチェックを行うだけの演算子
28; // 28はnumber型であることをチェックする JSに変換する場合はsatisfies演算子が削除され、28のみ残る
// '28' satisfies number; // '28'はnumber型ではないためエラーになる
var age = 28; // age定数はsatisfies演算子が無いのと同じような宣言となる
// never型 決して値を返さない関数や、常に例外
function error(message) {
    throw new Error(message); // エラーを投げる関数
}
console.log(error('This is an error'));
