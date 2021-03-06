<h1 align="center">Prism Primitives</h1>
<p align="center">React Native primitives for <a href="https://github.com/tmpfs/prism"title="Prism">Prism</a></p>
<p align="center">
  <img width="256" height="256" src="https://raw.githubusercontent.com/tmpfs/prism/master/prism.png" />
</p>

***
<!-- @toc -->
***

## Installation

Use your preferred package manager for installation.

```
npm i --save react-native-prism-primitives
yarn add react-native-prism-primitives
```

## Synopsis

React Native primitives integrated with [Prism][] designed to reduce the cognitive load during migration or integration.

This library exposes all the React Native visual components wrapped using the `Prism()` function. Class names are identical so it is a drop-in replacement.

The API is considered locked and changes will only be made for bugs or if the underlying RN components being tracked change.

Bug fixes will be released under patch versions, new RN components under minor releases and major changes to the underlying RN components (deletions) will be tracked via major version releases.

## Getting Started

Configure your application (see the Prism [Getting Started][] guide) and then you can import your visual components from `react-native-prism-primitives` to use the [Prism Properties][] in your application.

```javascript
import {
  Text,
  View
} from 'react-native-prism-primitives'
```

You can now define default style declarations for the primitive components in your style sheet:

```javascript
export default {
  styles: ({colors, fonts}) => {
    return {
      'Text': {
        color: 'green'
      },
      'View': {
        flex: 1
      }
    }
  }
}
```

And use the style property shortcuts (assuming they are enabled):

```html
<View background='steelblue' padding={10} margin={20}>
  <Text color='white'>
    Example
  </Text>
</View>
```

## Implementation

The components are very thin wrappers around the RN components and do not add any extra functionality apart from that enabled by [Prism][].

<? @source {javascript} ../src/Text.js ?>

## Notes

This library only exposes the *visual components*. API components (such as `Platform`) should still be imported directly from `react-native`.

## License

MIT

[Prism]: https://github.com/tmpfs/prism
[Getting Started]: https://github.com/tmpfs/prism#getting-started
[Prism Properties]: https://github.com/tmpfs/prism#properties
