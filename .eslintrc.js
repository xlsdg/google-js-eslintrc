{
  // http://eslint.org/docs/rules/

  "env": {
    "browser": true,      // browser global variables.
    "node": false,        // Node.js global variables and Node.js-specific rules.
    "worker": false,      // web workers global variables.
    "amd": false,         // defines require() and define() as global variables as per the amd spec.
    "mocha": false,       // adds all of the Mocha testing global variables.
    "jasmine": false,     // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
    "phantomjs": false,   // phantomjs global variables.
    "jquery": false,      // jquery global variables.
    "prototypejs": false, // prototypejs global variables.
    "shelljs": false,     // shelljs global variables.
    "meteor": false,      // meteor global variables.
    "mongo": false,       // mongo global variables.
    "applescript": false, // applescript global variables.
    "es6": false,         // enable all ECMAScript 6 features except for modules.
  },

  "globals": {
    "goog": true
  },

  "plugins": [
    // e.g. "react" (must run `npm install eslint-plugin-react` first)
  ],

  "rules": {
    "no-extra-semi": 1,
    "no-inner-declarations": [2,"both"],
    "curly": [2,"all"],
    "no-eval": 2,
    "no-extend-native": [2,{"exceptions":["Object"]}],
    "no-new-wrappers": 2,
    "no-with": 2,
    "no-undef": 2,
    "array-bracket-spacing": [2,"never",{}],
    "indent": [2,4],
    "no-array-constructor": 2,
    "no-mixed-spaces-and-tabs": [2,"smart-tabs"],
    "no-new-object": 2,
    "object-curly-spacing": [2,"never",{}],
    "semi": [2,"always"],
    "max-len": [1,80,4,{"ignorePattern":"true"}]
  }
}