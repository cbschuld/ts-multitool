# TypeScript MultiTool 🛠

<p>
  <img alt="npm" src="https://img.shields.io/npm/dw/ts-multitool?style=flat-square"/><!-- downloads -->
  <img alt="size" src="https://img.shields.io/bundlephobia/min/ts-multitool"/><!-- bundle size -->
  <img alt="build" src="https://img.shields.io/github/workflow/status/cbschuld/ts-multitool/CI"/><!-- build -->
  <img alt="license" src="https://img.shields.io/npm/l/ts-multitool?style=flat-square"/><!-- license -->
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"/><!-- PRs welcome -->
</p>

On the journey of building applications in [TypeScript](https://www.typescriptlang.org/) you will need a menagerie of functions. Typically the user's trip down Google lane will bring you to [StackOverflow](https://stackoverflow.com). The code is copied into the editor and the app construction continues. Bad, no chance the testing is added and now problems arise. The TypeScript MultiTool is a tree-shakable pile of functions helpful for building apps with all of the tests included in the library.

## Motivation

Building software accurately and quickly tends to yield solutions which are simply missing test coverage for quick and dirty functions plucked from google searches or [StackOverflow](https://stackoverflow.com). This library is my own collection of functions I am using with the included test coverages to manage them.

Furthering, in my experience, I find great solutions and I'll adopt them in a project. Months down the road I'll research the same problem and will stop and realize in the middle of the research "I have looked for this before" and I'll search my own solutions for it. I have done a poor job denoting great known-good solutions. This is an attempt to encapsulate the runtime from time spent researching.

## Installation

The recommended way to install is through `npm` or `Yarn`. The library is exposed as CommonJS and ESM.

npm:

```sh
npm install ts-multitool
```

yarn:

```sh
yarn add ts-multitool
```

## Usage

The entire point of `ts-multitool` is simplicity with the goal of producing rapid test-able solutions in TypeScript

# Functions

## Text Functions (available at `/text/`)

---

### `commaSeparatedString(string[],useOxfordComma)`

Take a list of strings and create a comma separated string. The `useOxfordComma` will place an [Oxford Comma](https://en.wikipedia.org/wiki/Serial_comma)

```typescript
import { commaSeparatedString } from 'ts-multitool'
const response = commaSeparatedString(['first', 'second', 'third'])
assert(response === 'first, second and third')
```

### `capitalize(string)`

Capitalizes the first letter of a string. It does NOT force lowercase on the remaining letters.

```typescript
import { capitalize } from 'ts-multitool'
const response = capitalize('thomas')
assert(response === 'Thomas')
```

---

## Array Functions (available at `/array/`)

---

### `unique<T>(T[])`

Returns a list of unique values from the given array (supports primitives)

```typescript
import { unique } from 'ts-multitool'
const list = unique([1, 2, 3, 4, 3, 2, 4, 1])
// returns [1, 2, 3, 4]
```

---

## File Functions (available at `/files/`)

---

### `getExtension(string)`

Get the extension of a file.

```typescript
import { getExtension } from 'ts-multitool'
const ext = getExtension('somefile.that.you.need.jpg')
assert(response === 'jpg')
```

---

## Have something to add (or something is busted)?

Something to add to the library? Cool, add it and create a PR! If there is something busted in the library? Whoops, file an issue!

## Tests

Tests are executed via Jest.

```shell script
npm run test
```
