import sinon from 'sinon';
import { assert } from 'chai';

import { describe, it, beforeEach, afterEach } from 'testing';

const sandbox = sinon.createSandbox();

describe('First test', () => {
  afterEach(() => {
    sandbox.restore();
  });

  it('First test', () => {
    sandbox.spy(console, 'log');
    console.log('Hello world');
    assert.strictEqual(1, 1);
    sandbox.assert.calledOnce(console.log as unknown as sinon.SinonSpy);
  });

  it('Second test', () => {
    sandbox.spy(console, 'log');
    console.log('GoodMorning world');
    assert.strictEqual(1, 1);
    sandbox.assert.calledOnce(console.log as unknown as sinon.SinonSpy);
  });
});
