describe('SimpleSliderComponent', function() {  
  describe('default behavior - no items', () => {
    let componentRoot;

    beforeEach(() => {
      componentRoot = fixture('slider-default').shadowRoot;
    });
  
    it('should have one slider container', () => {
      const sliderContainer = componentRoot.querySelectorAll('.x-simple-slider');

      expect(sliderContainer.length).to.equal(1);
    });

    it('navigation: should have one list container', () => {
      const listContainer = componentRoot.querySelectorAll('.x-simple-slider ul');

      expect(listContainer.length).to.equal(1);
    });

    it('navigation: should have zero slot items', () => {
      const listItems = componentRoot.querySelectorAll('.x-simple-slider ul li');

      expect(listItems.length).to.equal(0);
    });

    it('content: it should have zero slot items', () => {
      const listItems = componentRoot.querySelectorAll('.x-simple-slider slot');

      expect(listItems.length).to.equal(0);
    });
  
  });

  describe('Slide With (Three) Items', () => {
    let componentRoot;

    beforeEach(() => {
      componentRoot = fixture('slider-three').shadowRoot;
    });
  
    it('should have one slider container', () => {
      const sliderContainer = componentRoot.querySelectorAll('.x-simple-slider');

      expect(sliderContainer.length).to.equal(1);
    });

    it('navigation: should have one list container', () => {
      const listContainer = componentRoot.querySelectorAll('.x-simple-slider ul');

      expect(listContainer.length).to.equal(1);
    });

    it('navigation: should have three list items', () => {
      const listItems = componentRoot.querySelectorAll('.x-simple-slider ul li');

      expect(listItems.length).to.equal(3);
    });

    it('content: should have three slot elements', () => {
      const slides = componentRoot.querySelectorAll('.x-simple-slider slot');

      expect(slides.length).to.equal(3);
    });

    // TODO test slots outside of ShadowRoot?
    xit('First slide should say "Slide 1"', () => {
      const slideContents = componentRoot.querySelectorAll('.x-simple-slider .slot');

      expect(slideContents.length).to.equal(3);
      expect(slideContents[0].textContent).to.equal('Slide 1');
    });
  
  });

  describe('Active Item', () => {
    // TODO
  });

});