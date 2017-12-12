let name = 'John';

function makeUppercase(word){
  return word.toUpperCase();
}

let template =
`${makeUppercase('Hello')}, ${name}
               This is a simple template
                                        on Javascript ES6`;

console.log(template);