# strip-dom-style-properties

[![Build Status](https://github.com/mgenware/strip-dom-style-properties/workflows/Build/badge.svg)](https://github.com/mgenware/strip-dom-style-properties/actions)
[![npm version](https://img.shields.io/npm/v/strip-dom-style-properties.svg?style=flat-square)](https://npmjs.com/package/strip-dom-style-properties)
[![Node.js Version](http://img.shields.io/node/v/strip-dom-style-properties.svg?style=flat-square)](https://nodejs.org/en/)

Strip HTML element style properties.

## Installation

```sh
yarn add strip-dom-style-properties
```

## Usage

```ts
import convert from 'strip-dom-style-properties';

convert(
  // HTML string.
  '<p style="color: #d3d3d3;"><span style="background-color: black; margin-right: 20px; color: #d3d3d3;">haha</span></p>',
  // CSS properties to be removed.
  ['color', 'margin-right'],
);
// Prints "<p style=""><span style="background-color: black;">haha</span></p>"
```
