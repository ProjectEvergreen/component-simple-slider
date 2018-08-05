# component-simple-slider
[![GitHub release](https://img.shields.io/github/tag/ProjectEvergreen/component-simple-slider.svg)](https://github.com/ProjectEvergreen/component-simple-slider/tags)
![CircleCI branch](https://img.shields.io/circleci/project/github/ProjectEvergreen/component-simple-slider/master.svg?style=plastic)
[![GitHub issues](https://img.shields.io/github/issues-raw/ProjectEvergreen/component-simple-slider.svg)](https://github.com/ProjectEvergreen/component-simple-slider/issues)
[![GitHub issues](https://img.shields.io/github/issues-pr-raw/ProjectEvergreen/component-simple-slider.svg)](https://github.com/ProjectEvergreen/component-simple-slider/issues)
[![GitHub license](https://img.shields.io/badge/license-Apache%202-blue.svg)](https://raw.githubusercontent.com/ProjectEvergreen/component-simple-slider/master/LICENSE.md)

A very naive slider component using [Custom Element and Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components) based components to serve as a proof of concept for publishing and consuming Custom Elements from **npm**.  

## Installation
1. If you aren't already using it, use **npm** or **Yarn** to install `@polymer/lit-element` to your project's `dependencies`
1. Install `yarn add component-simple-slider`

> This component makes no assumptions about polyfills, please provide your own.

## Usage
Two things are needed when using this componenet
1. Number of slides `slides="3"`
1. Each Slide, with an attribute of `slots="slideN"` (`N` should increment starting from 1)

_example (using a module bundler like webpack_:
```javascript
import 'component-simple-slider';

.
.
.

_render() {
  return html`
    <x-simple-slider slots="3">
      <div slot="slide1">Slide 1</div>
      <div slot="slide2">Slide 3</div>
      <div slot="slide3">Slide 3</div>
    </x-simple-slider>
  `;
}
```

## Development
> This project uses [Yarn](https://yarnpkg.com/), please install it first

- For a dev server running a "reference app", run `yarn develop`
- To run unit tests, run `yarn test`

## Publishing
> Follow [these steps](https://docs.npmjs.com/getting-started/publishing-npm-packages) for authenticating with **npm**.

Here are the basic steps to follow for publishing a new release
1. Make sure all commits are in `master`
1. Make sure there are no changes in your working directory by running `git status`
1. Set the next version in _package.json_
1. Commit the changes, something like `git commit -a -m "bumping to next release version x.y.z"`
1. Publish to npm by running `npm publish`
1. Tag and push up all changes with `git tag -a x.y.z -m "tagging x.y.z release"
1. Create [release notes](https://github.com/ProjectEvergreen/component-simple-slider/releases) in GitHub
1. Verify the release in the [npm registry](https://www.npmjs.com/package/component-simple-slider)