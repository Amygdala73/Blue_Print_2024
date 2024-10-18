﻿# Blue_Print_2024
## 1. How to intall npm and npm packages (typescript)
npm is a package manager for the JavaScript programming language, TypeScript is one of the package that can be used through npm.

In package.json, I have configured the version information of TypeScript. However, it's only the version information so you will need to initialise npm and install TypeScript yourself.
### Here's how you do it:
First, make sure npm is installed on you PC.

Then run this in you terminal:
```
npm init
```
and simply hit enter all the way to the end, then run:
```
npm install
```
This installs TypeScript to ***this project only***

If you want to install TypeScript globally, run:
```
npm install -g typescript
```

Now TypeScript should be installed and you are good to go.

## 2. How to write and run TypeScript
TypeScript can't be directly used for website. It needs to be compiled into Javascript first.

In tsconfig.json I have configured the behavior for TypeScript. Now when you write TypeScript
### Here's what you should do:

Ensure that you have "npm-live-server" installed by running the following command:  
```
npm install live-server --save-dev
```

Run this command in your terminal:
```
npx tsc -w
```
Write your typescript in the "ts" directory, and it should be automatically compiled into Javascript in the "js" directory.

When you want to include scripts in your HTML, always include the ".js" file in the "js" directory.

Also, this article could be handy: <https://javascript.plainenglish.io/how-to-use-typescript-in-html-2df0be436d8b>.

To run the main page of the project, install ``http-server`` globally if you haven't already:
```
npm install -g http-server
```
Then navigate to your project folder and start the HTTP server:
```
http-server .
```
The server will start, and you should see something like this:

```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
``` 
Press the ``ctrl`` and left click the link.
