const Questions = [
  {
    id: 1,
    detail: `
  ### What will be printed on the console?
  \`\`\`js
  (function() {
    var a = b = 5;
  })();
  console.log(b);
  \`\`\`
  `,
    options: ['undefined', '5', 'error', 'Im a teapot'],
    correct: 1,
  },
  {
    id: 2,
    detail: `
  ### What will log out here?
  \`\`\`js
  function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
      return 2;
    }
  }
  test();
  \`\`\`
  `,
    options: ['undefined, undefined', '1, 2', 'undefined, 2', '1, undefined'],
    correct: 2,
  },
  {
    id: 3,
    detail: `
  ### What is printed in the console?
  \`\`\`js
  var foo = function foo() {
    console.log(foo === foo);  
  };
  foo();
  \`\`\`
  `,
    options: ['true', 'false', 'ReferenceError', 'undefined'],
    correct: 0,
  },
  {
    id: 4,
    detail: `
  ### What does the above alert?
  \`\`\`js
  function boo() {
    return
    {
      test: 1
    };
  }
  alert(typeof boo());
  \`\`\`
  `,
    options: ['function', 'number', 'object', 'undefined'],
    correct: 3,
  },
  {
    id: 5,
    detail: `
  ### What is the result?
  \`\`\`js
  Number("1") - 1 == 0;
  \`\`\`
  `,
    options: ['true', 'false', 'TypeError', 'NaN'],
    correct: 0,
  },
  {
    id: 6,
    detail: `
  ### What is the result?
  \`\`\`js
  (true + false) > 2 + true;
  \`\`\`
  `,
    options: ['true', 'false', 'TypesError', 'NaN'],
    correct: 1,
  },
  {
    id: 7,
    detail: `
  ### What will be printed on the console?
  \`\`\`js
  function bar() {
    return foo;
    foo = 4;
    function foo() {}
    var foo = '5';
  }
  console.log(typeof bar());
  \`\`\`
  `,
    options: ['number', 'function', 'undefined', 'string'],
    correct: 1,
  },
  {
    id: 8,
    detail: `
  ### What is the result?
  \`\`\`js
  "1" - - "1";
  \`\`\`
  `,
    options: ['0', '2', '11', '"11"'],
    correct: 1,
  },
  {
    id: 9,
    detail: `
  ### What is the result?
  \`\`\`js
  var fullname = 'John Doe';
  var obj = {
     fullname: 'Colin Ihrig',
     prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  
  console.log(obj.prop.getFullname());
  var test = obj.prop.getFullname;
  console.log(test());
  \`\`\`
  `,
    options: [
      'Aurelio De Rosa, undefined',
      'Aurelio de Rosa, John Doe',
      'undefined, undefined',
      'Colin Ihrig, John Doe',
    ],
    correct: 1,
  },
  {
    id: 10,
    detail: `
  ### What will the below code print out?
  \`\`\`js
  "use strict";
  var a = 1;
  var b = {};
  function foo(x, y) {
    x = 2;
    y.moo = 3;
  }
  
  foo(a , b);
  console.log("a = " + a + "; b = " + JSON.stringify(b));
  \`\`\`
  `,
    options: ['a = 1; b = { "moo": 3 }', 'a = 1; b = {}', 'a = 2; b = {}', 'a = 2; b = { "moo": 3 }'],
    correct: 0,
  },
  {
    id: 11,
    detail: `
  ### What will the below code print out?
  \`\`\`js
  var foosVar = 3;
  fooVar = 1;
  console.log(fooVar);
  \`\`\`
  `,
    options: ['1', 'error', 'undefined', '3'],
    correct: 0,
  },
  {
    id: 12,
    detail: `
  ### What will the below code print out?
  \`\`\`js
  "use strict";
  var foosVar = 3;
  fooVar = 1;
  console.log(fooVar);
  \`\`\`
  `,
    options: ['3', '1', 'undefined', 'error'],
    correct: 3,
  },
  {
    id: 13,
    detail: `
  ### What does the code below print out?
  \`\`\`js
  if (undefined == null) {
    console.log("Moo");
  } else {
    console.log("Zoo");
  }
  \`\`\`
  `,
    options: ['Zoo', 'Moo', 'error'],
    correct: 1,
  },
  {
    id: 14,
    detail: `
  ### What does the code below print out?
  \`\`\`js
  console.log(typeof(null));
  \`\`\`
  `,
    options: ['"null"', '"object"', 'exception'],
    correct: 1,
  },
  {
    id: 15,
    detail: `
  ### What does the code below print out?
  \`\`\`js
  if (undefined === null) {
    console.log("Moo");
  } else {
    console.log("Zoo");
  }
  \`\`\`
  `,
    options: ['Moo', 'Zoo', 'exception'],
    correct: 1,
  },
  {
    id: 16,
    detail: `
  ### What does the code below print out?
  \`\`\`js
  console.log(NaN == "1");
  \`\`\`
  `,
    options: ['true', 'false', 'undefined', 'error'],
    correct: 1,
  },
];

export default Questions;
