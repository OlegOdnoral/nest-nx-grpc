const fs = require('fs');
const ts = require('typescript');

const data = fs.readFileSync('./types.d.ts');

const file = './types.d.ts';

let program = ts.createProgram([file], { allowJs: true });
const sourceFile = program.getSourceFile(file);

//console.log(sourceFile);

console.log(sourceFile);

// ts.forEachChild(sourceFile, (node) => {


//   console.log('---------------');
//   console.log(node?.body?.statements);
//   console.log('---------------');
// });
