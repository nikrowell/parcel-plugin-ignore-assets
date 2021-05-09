# parcel-plugin-ignore-assets

A [parcel](https://github.com/parcel-bundler/parcel) plugin to ignore url dependencies. Similar to webpack's `emit: false` asset/resource option.

## Installation

```bash
npm install --save-dev parcel-plugin-ignore-assets
```

## Usage

Define an array of extensions to be ignored in your `package.json` file:

```json
"ignoreAssets": [".svg", ".png"]
```
Also supports kebab-case:
```json
"ignore-assets": ["woff", "woff2"]
```
Note that the preceeding `.` period is not required.
