/**

  Code the Optional monad:

  Needs a .hasValue() function that returns true or false
  Needs a .getOrElse('default') function that returns the value or the default value passed along
  Needs a .map function that takes a function that transforms the property

  If the value is null => the map function's parameter is not called
  If the value is not null => the map function's parameter is called with the value as parameter

  const test = { a: { b: { c: 1 } } }     // console logs 1
  const test = {  }                       // console logs "nothing"
  const test = { a: { b: { } } }          // console logs "nothing"
  const test = { a: {  }                  // console logs "nothing"
  const test = null                       // console logs "nothing"

  console.log(
    Optional(test)
      .map((x) => x.a)
      .map((x) => x.b)
      .map((x) => x.c)
      .getOrElse('nothing')
  );

 */


const Optional = (value) => {

  // Place code here!

};


// TESTS

const tests = [
  { data: { a: { b: { c: 1 } } }, assert: 1 },
  { data: {  }, assert: 'nothing' },
  { data: { a: {  } }, assert: 'nothing' },
  { data: { a: { b: { } } }, assert: 'nothing' },
  { data: null, assert: 'nothing' }
];

const testsConclusion = tests.every((test) => Optional(test.data).map((x) => x.a).map((a) => a.b).map((b) => b.c).getOrElse('nothing'));

if (testsConclusion)
  console.log('All tests succeeded');
else
  console.log('Some tests failed...');