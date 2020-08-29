// package.json で "type": "module"
// とすると js ファイルがES Modules として扱われるため
// 拡張子が mjs でなくてもよい
// import は拡張子が必要
// 省略したい場合は --es-module-specifier-resolution=node

import { hello } from "./lib.mjs";

console.log(hello);
