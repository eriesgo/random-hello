# random-hello

Randomly greets any given string.

Features
* Created to learn how to publish packages in `npm`
* Very simple
* Supports both ECMAscript and CommonsJS modules

## How to use it

### CommonsJS

```
const hello = require("@feelpop/random-hello")
console.log(hello.hello("CommonsJS"));
```

### ECMAscript

```
import { hello } from "@feelpop/random-hello";
console.log(hello("ECMAScript"));
```
