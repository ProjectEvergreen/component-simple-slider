import HelloComponent from '../src/index';

describe('basic testing suite', () => {
  
  it('should be true', () => {
    const bool = true;

    expect(bool).toBe(true);
  });

});

describe('testing component', () => {
  
  it('should be hello', () => {
    console.log('typeof', typeof HelloComponent);
    expect(HelloComponent).toNotBe(undefined);
  });

});