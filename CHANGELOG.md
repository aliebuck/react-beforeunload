# Changelog

## Unreleased

### Changed

- Changed default `event.returnValue` fallback from `''` to `true` in `beforeunload` handler. (Fixes [#33](https://github.com/aliebuck/react-beforeunload/issues/33))
- Updated [react](https://www.npmjs.com/package/react) peer dependency to support v19+. (Fixes [#34](https://github.com/aliebuck/react-beforeunload/issues/34))

### Removed

- Removed deprecated `return`-based activation from `beforeunload` handler.

## v2.6.0 - 2023-06-16

### Added

- Added conditional listening in `useBeforeunload` hook. (Fixes [#9](https://github.com/aliebuck/react-beforeunload/issues/9))
- Added `sideEffects` property in [package.json](./package.json).

### Changed

- Updated `handler` parameter in `useBeforeunload` hook to be optional.

### Removed

- Removed type checking.
- Removed [prop-types](https://www.npmjs.com/package/prop-types) dependency.
- Removed [tiny-invariant](https://www.npmjs.com/package/tiny-invariant) dependency.

## v2.5.3 - 2022-04-12

### Changed

- Updated [prop-types](https://www.npmjs.com/package/prop-types) dependency to v15.8.1.
- Updated [tiny-invariant](https://www.npmjs.com/package/tiny-invariant) dependency to v1.2.0.
- Updated [react](https://www.npmjs.com/package/react) peer dependency to support v18.

## v2.5.2 - 2021-10-03

### Fixed

- Fixed legacy dialog activation using `return "string";` method. (Fixes [#27](https://github.com/aliebuck/react-beforeunload/issues/27))

## v2.5.1 - 2021-05-02

### Removed

- Removed [use-latest](https://www.npmjs.com/package/use-latest) dependency.

## v2.5.0 - 2021-04-25

### Added

- Added [tiny-invariant](https://www.npmjs.com/package/tiny-invariant) dependency.

### Changed

- Changed type checking in `useBeforeunload` hook to use `invariant` function.
- Updated `Beforeunload.propTypes` to only be defined in non-production environments.
- Updated internal event handler to set `event.returnValue` less times.

## v2.4.0 - 2020-11-08

### Added

- Added source maps to build output.

### Changed

- Updated [use-latest](https://www.npmjs.com/package/use-latest) dependency to v1.2.0.
- Updated [react](https://www.npmjs.com/package/react) peer dependency to support v17.

## v2.3.0 - 2020-10-26

### Changed

- Improved type-checking.
- Updated `handler` parameter of `useBeforeunload` hook to allow [nullish values](https://developer.mozilla.org/en-US/docs/Glossary/Nullish).

### Removed

- Removed `defaultProps` in favour of default values in object destructuring.

## v2.2.4 - 2020-09-02

### Changed

- Updated `Beforeunload.propTypes` to only be defined in non-production environments.

## v2.2.3 - 2020-08-28

### Removed

- Removed redundant type-check.

## v2.2.2 - 2020-07-09

### Changed

- Used [use-latest](https://www.npmjs.com/package/use-latest) for handling refs in `useBeforeunload` hook.

## v2.2.1 - 2020-05-20

### Changed

- Enabled loose mode on '@babel/preset-env' to reduce build output.

## v2.2.0 - 2020-04-27

### Added

- Added ES Module build.
- Added `defaultProps` to `Beforeunload` component.

## v2.1.0 - 2019-06-23

### Added

- Added type-checking to `useBeforeunload` hook.

## v2.0.1 - 2019-06-20

### Added

- Added `Event.preventDefault()` workaround for Chromium browsers.

### Removed

- Removed `default` export.

## v2.0.0 - 2019-06-02

### Added

- Added `useBeforeunload` hook.

### Changed

- **BREAKING** Requires [react](https://www.npmjs.com/package/react) peer dependency to be v16.8.0 or newer.
- **BREAKING** `Beforeunload` is now a named export.
- Changed `Beforeunload` component to be functional and use hooks internally.

## v1.1.1 - 2019-06-02

### Fixed

- Fixed failing builds due to missing Babel plugin.

## v1.1.0 - 2019-06-02

### Changed

- Builds are now done with [Rollup](http://rollupjs.org).

## v1.0.4 - 2017-08-21

### Changed

- Updated [react](https://www.npmjs.com/package/react) peer dependency to support React 16.

## v1.0.3 - 2017-07-28

### Fixed

- Fixed rendering when no `children` are set.

## v1.0.2 - 2017-07-27

### Fixed

- Fixed publishing to NPM registry.

## v1.0.1 - 2017-07-27

### Fixed

- Fixed wrong class being exported.

## v1.0.0 - 2017-07-15

Initial public version! :tada:
