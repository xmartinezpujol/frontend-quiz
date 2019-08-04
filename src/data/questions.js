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
];

export default Questions;
