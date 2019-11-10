import './index';

describe('SimpleSliderComponent', () => { 

  describe('default behavior - no items', () => {
    let slider;

    beforeEach(async () => {
      slider = document.createElement('x-simple-slider');
  
      document.body.appendChild(slider);
  
      await slider.updateComplete;
    });
  
    afterEach(() => {
      slider.remove();
      slider = null;
    });

    it('should be defined', () => {
      expect(slider).toBeDefined();
    });

    it('should have one wrapping element', () => {
      const wrapper = slider.shadowRoot.querySelectorAll('.x-simple-slider');

      expect(wrapper.length).toBeDefined(1);
    });

    it('navigation: should have one list container', () => {
      const listContainer = slider.shadowRoot.querySelectorAll('ul');

      expect(listContainer.length).toBe(1);
    });

    it('navigation: should have zero slot items', () => {
      const listItems = slider.shadowRoot.querySelectorAll('ul li');

      expect(listItems.length).toBe(0);
    });

    it('content: it should have zero slot items', () => {
      const listItems = slider.shadowRoot.querySelectorAll('slot');

      expect(listItems.length).toBe(0);
    });
  
  });

  describe('Slide With (Three) Items', () => {
    let slider;
    const mockSlotItems = [
      'Slide 1',
      'Slide 2',
      'Slide 3'
    ];

    beforeEach(async () => {
      slider = document.createElement('x-simple-slider');
      slider.slots = mockSlotItems.length;
  
      document.body.appendChild(slider);
  
      await slider.updateComplete;
    });
  
    afterEach(() => {
      slider.remove();
      slider = null;
    });
  
    it('should be defined', () => {
      expect(slider).toBeDefined();
    });

    it('should have one wrapping element', () => {
      const wrapper = slider.shadowRoot.querySelectorAll('.x-simple-slider');

      expect(wrapper.length).toBeDefined(1);
    });

    it('navigation: should have one list container', () => {
      const listContainer = slider.shadowRoot.querySelectorAll('ul');

      expect(listContainer.length).toBeDefined(1);
    });

    it('navigation: should have three list items', () => {
      const listItems = slider.shadowRoot.querySelectorAll('ul li');

      expect(listItems.length).toBe(3);
    });

    it('content: should have three slot elements', () => {
      const slots = slider.shadowRoot.querySelectorAll('slot');

      expect(slots.length).toBe(3);
    });

    // TODO test slider / slot content
    xit('First slide should say "Slide 1"', () => {
      const slideContents = componentRoot.querySelectorAll('.x-simple-slider .slot');

      expect(slideContents.length).to.equal(3);
      expect(slideContents[0].textContent).to.equal('Slide 1');
    });

    // TODO test slider navigation
  });

});