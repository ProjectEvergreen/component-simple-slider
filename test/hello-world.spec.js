describe('HelloComponent', function() {
  let componentRoot;

  beforeEach(() => {
    componentRoot = fixture('hello').root;
  });

  describe('heading', () => {
    let heading;

    beforeEach(() => {
      heading = componentRoot.querySelectorAll('h3.heading');
    });

    it('should have one heading element', () => {
      expect(heading.length).to.equal(1);
    });

    it('should say Hello World!', () => {
      expect(heading[0].innerHTML).to.equal('Hello World!');
    });
  });
  
});