# モジュールの読み込み順・実行の順番

環境変数 `NODE_DEBUG` にデバッグしたいモジュール名を指定することでコンソールに出力できる。

## CommonJS の場合

```javascript
// main.cjs
console.log("*** main.cjs START");

require("./1.cjs");
require("./2.cjs");
require("./3.cjs");

console.log("*** main.cjs END");
```

```bash
NODE_DEBUG=module node src/js/load-run-order/cjs/main.cjs
```

```bash
MODULE 18280: looking for "src\\js\\load-run-order\\cjs\\main.cjs" in ["C:\\Users\\admin\\.node_modules","C:\\Users\\admi
n\\.node_libraries","C:\\Program Files\\nodejs\\lib\\node"]
MODULE 18280: load "src\\js\\load-run-order\\cjs\\main.cjs" for module "."

*** main.cjs START

MODULE 18280: Module._load REQUEST ./1.cjs parent: .
MODULE 18280: RELATIVE: requested: ./1.cjs from parent.id .
MODULE 18280: looking for ["src\\js\\load-run-order\\cjs"]
MODULE 18280: load "src\\js\\load-run-order\\cjs\\1.cjs" for module "src\\js\
\load-run-order\\cjs\\1.cjs"
1.cjs

MODULE 18280: Module._load REQUEST ./2.cjs parent: .
MODULE 18280: RELATIVE: requested: ./2.cjs from parent.id .
MODULE 18280: looking for ["src\\js\\load-run-order\\cjs"]
MODULE 18280: load "src\\js\\load-run-order\\cjs\\2.cjs" for module "src\\js\
\load-run-order\\cjs\\2.cjs"
2.cjs

MODULE 18280: Module._load REQUEST ./3.cjs parent: .
MODULE 18280: RELATIVE: requested: ./3.cjs from parent.id .
MODULE 18280: looking for ["src\\js\\load-run-order\\cjs"]
MODULE 18280: load "src\\js\\load-run-order\\cjs\\3.cjs" for module "src\\js\
\load-run-order\\cjs\\3.cjs"
3.cjs

*** main.cjs END
```

- 順番に`読み込み`→`実行`を繰り返していることがわかる
- CommonJS は `同期的`

## ES Modules の場合

```javascript
// main.mjs
console.log("*** main.mjs START");

import "./1.mjs";
import "./2.mjs";
import "./3.mjs";

console.log("*** main.mjs END");
```

```bash
NODE_DEBUG=esm node src/js/load-run-order/mjs/main.mjs
```

```bash
ESM 3640: Storing src/js/load-run-order/mjs/main.mjs in ModuleMap
ESM 3640: Translating StandardModule src/js/load-run-order/mjs/main.mjs
ESM 3640: Storing src/js/load-run-order/mjs/1.mjs in ModuleMap
ESM 3640: Storing src/js/load-run-order/mjs/2.mjs in ModuleMap
ESM 3640: Storing src/js/load-run-order/mjs/3.mjs in ModuleMap
ESM 3640: Translating StandardModule src/js/load-run-order/mjs/2.mjs
ESM 3640: Translating StandardModule src/js/load-run-order/mjs/3.mjs
ESM 3640: Translating StandardModule src/js/load-run-order/mjs/1.mjs
1.mjs
2.mjs
3.mjs
*** main.mjs START
*** main.mjs END

```

- 最後に `main.mjs` が実行されている
- ES Modules は `非同期的`
