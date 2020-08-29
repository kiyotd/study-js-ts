// package.json で "type": "module"
// とすると js ファイルがES Modules として扱われるため
// 拡張子が mjs でなくてもよい
// 省略したい場合は --es-module-specifier-resolution=node
//
// ES Modules の import には拡張子が必要
//
// html から <script type="module" src=""></script>
// として読み込むことも可能

import { hello } from "./lib.mjs";

console.log(hello);
