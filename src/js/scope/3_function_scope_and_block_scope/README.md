# 関数スコープとブロックスコープ

- JavaScript でブロックといえば {} のことを表す
- ブロックスコープ = {} の中

```javascript
{
  //ブロックスコープ
}
```

- 関数の場合は {} でも関数スコープと呼ぶ

```javascript
function a() {
  let b = 0;
  console.log(b);
}

a(); // 0
```

- `var` や関数宣言ではブロックスコープが無視される

```javascript
{
  var c = 1; // Global Scope
}
console.log(c); // 1
```

```javascript
{
  // Global Scope
  function d() {
    console.log("d is called");
  }

  d(); // d is called
}

d(); // d is called
```

- このような理由から `var` は非推奨。`let` か `const` を使う。

```javascript
{
  // Block Scope
  const f = function () {
    console.log("f is called");
  };
  f(); // f is called
}

f(); // f is not defined
```
