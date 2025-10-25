---
title: Отчет по работе с time в языке JavaScript
description: "Задание по JavaScript"
url: "/time_js/"
---

Вот такой код получился без использования IIFE
```
console.time('a')

let y = 2**14
let x = Date.now()

while (Date.now() - x < y) {}

console.timeEnd('a')
```   

Вывод в консоли
```
❯ node time.js
a: 16.384s
```   