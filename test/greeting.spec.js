describe('GreetingComponent', () => {
  const name = 'Owen';
  let componentRoot;
  let greetingContainer;
  let nameContainer;

  beforeEach(() => {
    componentRoot = fixture('greeting').shadowRoot;

    greetingContainer = componentRoot.querySelectorAll('.greeting');
    nameContainer = componentRoot.querySelectorAll('.name');
  });

  it('should have a container element for the greeting', () => {
    expect(greetingContainer.length).to.equal(1);
  });

  it('should have a container element for the name', () => {
    expect(nameContainer.length).to.equal(1);
  });

  it('should display the full greeting in the greeting container element', () => {
    expect(greetingContainer[0].textContent).to.equal(`Hello ${name}!`);
  });

  it('should display just the name attribute in name container element', () => {
    expect(nameContainer[0].textContent).to.equal(name);
  });
  
});