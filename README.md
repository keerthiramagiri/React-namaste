# Namaste-React

NPM - standard repository for all the packages/Biggest package manager for all the stuff 
npm init -command
Package.json - it is a configuration for npm 
npm install -D parcel - It is to install npm dev dependency. 
caret and tilde in package.json
See npm semver - Tilde Ranges
~version - Approximately equivalent to version, i.e., only accept new patch versions
See npm semver - Caret Ranges
^version	Compatible with version, i.e., accept new minor and patch versions


to ignite we use npx parcel index.html

if we want to install any package we use npm commands, if we want to execute we use npx commands 

# refer parcel.org 
# parcel
- Dev Build
- Local server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds 
- Image Optimization
- Minification
- Building 
- Compress
- Consistent Hashing 
- Code splitting
- Differential Bundling - to support older browsers
- Diagnostic
- Error Handling
- To host on HTTPs
- Tree shaking - remove unused code
- Different dev and prod bundles


# while executing npx parcel build index.html will get error to avoid that we shouls remove main: "app.js" from package.json to avoid conflicts. bcoz package.json automatically generate the main. 

# refer browserslist

# JSX is not html. it looks like html syntax

# JS engine willl understand ES6(ECMAScript)

# Babel is JS compiler/transpiler take the jsx and it converts into the react code that js engine will understand 

If we want to give attributes to JSX we use camel case 

# React Component
-Class Based Component - OLD, -Functional Component - NEW

What is functional component?
It is normal javascript function which writtern some peace react function or jsx code.

# we can write any java script code inside jsx/ paranthesis {}.

props: properties is something which we can pass to the components. 

# config driven UI - is a design approach where the structure, behavior, and layout of the user interface are primarily controlled by configuration files rather than hard-coded into the application's codebase. 

# not using keys (not acceptable) <<<index as key <<<< unique Id(best practice)