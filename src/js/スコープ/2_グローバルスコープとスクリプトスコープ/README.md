# グローバルスコープとスクリプトスコープ

- index.html を Chrome で開く
- デベロッパツールを開く
- Source タブを見る
- リロードする
- debugger の位置でスクリプトが一時停止している
- 右のペインの Scope から Script と Global を確認
- ```a``` は Script に存在
- ```b``` と ```c()``` は Global の ```window``` オブジェクト内に存在
- ```let``` や ```const``` で定義するとスクリプトスコープになることがわかる
- ```var``` はグローバルスコープになる
- ```window``` オブジェクト = グローバルスコープ
- Global スコープである ```window``` は省略可
- 一般的には Script スコープも、Global
  スコープと呼ばれる（使い勝手が同じなため）

```javascript
let a = 0; // Script Scope
console.log(a); // 0

var b = 0; // Global Scope, window.b
console.log(b); // 0
console.log(window.b); // 0

function c() { // Global Scope, window.c()
  console.log("c"); // c
}

c(); // c
window.c(); // c

window.d = 1;
console.log(d); // 1

window.f = "window.f";
let f = "let f";
console.log(f); // let f

debugger; // Processing pauses here
```
