import { word } from '../src/index';

describe('basic testing suite', () => {
  
  it('should be true', () => {
    const bool = true;

    expect(bool).to.equal(true);
  });

});

describe('testing word', () => {
  
  it('should be hello', () => {
    expect(word).to.equal('hello');
  });

});