import sinon from 'sinon';
import { assert } from 'chai';
//import jest from 'jest';

import { describe, it, afterEach } from 'testing';

import mathFunctions from '../../src/functions/mathFunctions.ts';

const sandbox = sinon.createSandbox();

describe('Math functions', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Sum', () => {
    const result = mathFunctions.sum(1)(2)(3);
    assert.strictEqual(result, 6);
  });

  it('Subtract', () => {
    const result = mathFunctions.subtract(3, 3);
    assert.strictEqual(result, 0);
  });

  it('Pow', () => {
    const result = mathFunctions.pow(2)(10);
    assert.strictEqual(result, 1024);
  });

  it('Calculate', () => {
    sandbox.stub(mathFunctions, 'subtract').returns(0);
    const result = mathFunctions.calculate(3)(3)(mathFunctions.subtract);
    assert.strictEqual(result, 0);
    sandbox.assert.calledOnceWithExactly(mathFunctions.subtract as unknown as sinon.SinonSpy, 3, 3);
  });
});
