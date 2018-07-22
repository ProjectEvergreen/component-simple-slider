import '../src/index';
import { mount } from '@skatejs/bore';

describe('testing component', () => {
  let component;

  beforeEach(() => {
    component = mount('<eve-hello></eve-hello>').wait((element) => { return element; });
  });
  
  // it('should have a <h3>', () => {
  //   component.wait(element => {
  //     expect(element.has('h3')).toBe(true);
  //   }).catch(() => {});
  // });

  it('should have a greeting of Hello World!', () => {
    // component.wait(element => {
    //   console.log('????');
    //   expect(true).toBe(false);
    //   expect(element.has('Hello World!')).toBe(true);
    // }).catch(() => {});

    // done();
    console.log(component);
    // expect(component.has('Hello World!')).toBe(true);
  });

});