//check import works
const exampleFunction = require('./script.js');
// check these functions exist
describe('Basic test', () => {
  test('exampleFunction exists', () => {
    expect(exampleFunction).toBeDefined();
  });
});


