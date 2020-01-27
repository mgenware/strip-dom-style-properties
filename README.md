# strip-dom-style-properties

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
