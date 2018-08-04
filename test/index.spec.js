describe('SimpleSliderComponent', function() {
  let componentRoot;
  let sliderContainer;
  
  beforeEach(() => {
    componentRoot = fixture('slider').shadowRoot;
    sliderContainer = componentRoot.querySelectorAll('.x-simple-slider');
  });

  it('should have one slider container', () => {
    expect(sliderContainer.length).to.equal(1);
  });

});