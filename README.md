<p align="center">
  <img width="200" src="https://static.wixstatic.com/media/85a3c2_d1356dc7622b48cab7017b24d9fa922c~mv2.png">
</p>
<h2 align="center"><strong>Velo Types</strong> <span style="font-size: 12px; font-style: italic;">(Corvid)</span></h2>
<p align="center">
  <b>TypeScript type definitions for <a href="https://www.wix.com/velo/reference/">Velo APIs</a></b>
</p>
<br>

[![npm version][npm-badge]][npm]
[![Build status](build-status)][build]  

**👩🏻‍💻 Type Declarations**: provides Typescript type declarations depending on the Wix editor context.

**🏃🏽 Intellisense**: Intellisense autocompletions for the Wix code editor.

> **Important:**
Features relating to the Local Editor are currently in the stage of alpha release and are still being developed. Future functionality may not be backward compatible. When using these features, you assume the risks associated with the use of such an alpha version.

<hr />

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)

# Introduction
This package contains type definitions for Velo by Wix.

It exposes the following:
* `declarations`: type declarations for different contexts: `page`, `backend` or `public`.
* `getWixModulesList`: returns a list of wix modules for autocompletion purposes. See full list of modules [here](https://www.wix.com/velo/reference/).
* `eventHandlersService`: the service provides meta-data about components' event handlers
* `getPageElementsTypeDeclarations`: returns the types of elements that are currently on the Wix editor page. Used to provide TS autocompletion.
* `getPackageTypeDecelerations`: returns types for packages installed via NPM. Used to provide autocompletion.

# Getting Started
Install by running:
```shell
npm install corvid-types
```

[npm]: https://www.npmjs.com/package/corvid-types
[npm-badge]: https://img.shields.io/npm/v/corvid-types.svg?style=flat
[build]: https://travis-ci.com/wix-incubator/corvid-types
[build-badge]: http://img.shields.io/travis/com/wix-incubator/corvid-types/master.svg?style=flat