const {describe, it} = require('mocha');

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns first element of a multi-element array of integers", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns single element of a single-element array", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns first element of a nested milti-element array of strings", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  });

  it("returns first element of a nested milti-element array", () => {
    assert.deepEqual(head([['Hello'], 'Lighthouse', 'Labs']), ['Hello']); 
  });
});

