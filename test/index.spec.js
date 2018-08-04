describe('SimpleSliderComponent', function() {
  let componentRoot;
  
  describe('default behavior - no items', () => {
    
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

    it('navigation: should have zero list items', () => {
      const listItems = componentRoot.querySelectorAll('.x-simple-slider ul li');

      expect(listItems.length).to.equal(0);
    });
  
  });

});