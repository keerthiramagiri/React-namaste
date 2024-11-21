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


# while executing npx parcel build index.html will get error to avoid that we should remove in main: "app.js" from package.json to avoid conflicts. bcoz package.json automatically generate the main. 

# refer browserslist

# JSX is not html. it looks like html syntax

# JS engine will understand ES6(ECMAScript)

# Babel is JS compiler/transpiler take the jsx and it converts into the react code that js engine will understand 

If we want to give attributes to JSX we use camel case 

# React Component
-Class Based Component - OLD, -Functional Component - NEW

What is functional component?
It is normal javascript function which written some peace react function or jsx code.

# we can write any java script code inside jsx/ paranthesis {}.

props: properties is something which we can pass to the components. 

# config driven UI - is a design approach where the structure, behavior, and layout of the user interface are primarily controlled by configuration files rather than hard-coded into the application's codebase. 

# not using keys (not acceptable) <<<index as key <<<< unique Id(best practice)

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search 
 * - RestaurantContainer
 * - RestaurantCard
 *   -img
 *   - name of res, star rating, cuisine, delivery time
 * Footer
 * - CopyRight
 * - Links
 * - Address
 * - Contact
 */

Two types of Export/Import

- Default Export/Import
Export default Components;
import Component from "path";

-named Export/Import

export const Components;
import {component} from "Path";

there are two ways for exporting 
1. default
2. named : we used to write "export" infront of the doc if we need to export multiple things. 

# React Hooks
(Normal JS utility functions)

- UseState() - use to generate super powerful react variables
- UseEffect()

# whenever a state variable updates react re-renders the component 

# Reconciliation Algorithm(ReactFiber) 
Virtual DOM - is an object representation of actual DOM

 In React will follow the this steps(approach) -> Loads -> Render -> API -> Render

 # useEffect() -> The useEffect hook in React is a powerful feature that allows you to perform side effects in function components. Side effects are actions that affect something outside of the component, such as fetching data, manually updating the DOM, setting up subscriptions, or clearing resources when the component is unmounted.

 # Optional chaining (?.) : Optional chaining is a feature in JavaScript that allows you to safely access deeply nested properties of an object without needing to check each level to see if it exists. It helps prevent errors by automatically returning undefined if any part of the chain is null or undefined, instead of throwing an error.
