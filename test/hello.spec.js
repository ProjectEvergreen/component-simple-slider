describe('HelloComponent', function() {
  let componentRoot;
  let heading;
  
  beforeEach(() => {
    componentRoot = fixture('hello').shadowRoot;
    heading = componentRoot.querySelectorAll('.heading');
  });

  it('should have one heading element', () => {
    expect(heading.length).to.equal(1);
  });

  it('should say Hello World!', () => {
    expect(heading[0].textContent).to.equal('Hello World!');
  });
  
});