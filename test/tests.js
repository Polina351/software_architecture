const assert = require('assert');
const tasks = require('../src/tasks');
it.optional = require('../extensions/it-optional');

describe('software_architecture', () => {
  it.optional('getRectangleArea should return a square of rectangle', () => {
    assert.equal(tasks.getRectangleArea(5, 10), 50);
    assert.equal(tasks.getRectangleArea(5, 5), 25);
  });
  it.optional('getLastDigit should return a last digit of the number', () => {
    assert.equal(tasks.getLastDigit(100), 0);
    assert.equal(tasks.getLastDigit(37), 7);
    assert.equal(tasks.getLastDigit(11), 1);
    assert.equal(tasks.getLastDigit(5), 5);
    assert.equal(tasks.getLastDigit(0), 0);
  });
});
