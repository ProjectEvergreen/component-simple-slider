# component-simple-slider
A very naive slider component using Custom Element components to serve as a proof of concept for publishing and consuming Custom Elements from **npm**.

## Installation
1. If you aren't already using it, use npm / yarn to install `@polymer/lit-element` as dependency
1. Install `@???/component-simple-slider`

> This component makes no assumptions about polyfills, please provide your own.

## Usage
Two things are needed when using this componenet
1. Number of slides `slides="3"`
1. Each Slide, with an attribute of `slots="slideN"` (`N` should increment starting from 1)

_example_:
```javascript
<x-simple-slider slots="3">
  <div slot="slide1">Slide 1</div>
  <div slot="slide2">Slide 3</div>
  <div slot="slide3">Slide 3</div>
</x-simple-slider>
```

## Development
> This project uses Yarn, please install it first

- For a dev server running a "reference app", run `yarn develop`
- To run unit tests, run `yarn test