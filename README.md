<p align="center">
  <img width="200" src="https://static.wixstatic.com/media/85a3c2_d1356dc7622b48cab7017b24d9fa922c~mv2.png">
</p>
<h2 align="center">Corvid Types</h2>
<p align="center">
  <b>TypeScript type definitions for <a href="https://www.wix.com/corvid/reference/">Corvid APIs</a></b>
</p>
<br>

[![npm version](https://img.shields.io/npm/v/corvid-types.svg?style=flat)](https://www.npmjs.com/package/corvid-types)
[![Status](http://img.shields.io/travis/com/wix-incubator/corvid-types/master.svg?style=flat)](https://travis-ci.com/wix-incubator/corvid-types)  

> **Important:**
Features relating to the Local Editor are currently in the stage of alpha release and are still being developed. Future functionality may not be backward compatible. When using these features, you assume the risks associated with the use of such an alpha version.


This package contains type definitions for Corvid by Wix.
It is intended to be used with the [`corvid-cli`](https://github.com/wix-incubator/corvid#corvid-local-development) to provide a stunning code intelligence experience in your local IDE.    

# How to Use
You can install the `corvid-types` package manually or let [`create-corvid-app`](https://www.npmjs.com/package/create-corvid-app) do everything for you!
### create-corvid-app
Just run 
    ```
    npx create-corvid-app <folder-name> [your-wix-site-url]
    ```
The [`create-corvid-app`](https://www.npmjs.com/package/create-corvid-app) will install `corvid-types` locally and you are ready to go.

### Manual Installation 
1. Navigate to the folder where you have cloned your site to and install `corvid-types` 
    ```
    npm install --save-dev corvid-types
    ```
2. Open a Local Wix Editor:
    ```
    npx corvid open-editor
    ```
3. Click the **Save** button in the local editor window
