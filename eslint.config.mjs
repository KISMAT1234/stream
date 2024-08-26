import eslintConfigPrettier from "eslint"
export default {
 
  // "env":{
  //   "browser":true
  // },
  // "extends":[eslintConfigPrettier],  // mixing of eslint and prettier
  "rules": {
    // "no-restricted-imports": ["error","underscore"],
    // "consistent-return":"error",
    // "find-payments": "error",
    // "no-console":"error",
    
    "quotes":[
      "error",
      "single"
    ],
    // "linebreak-styles":[
    //   "error",
    //   "unix"
    // ],
    "quotes":[
      "error",
      "single"
    ],
    "semi":[
      "error",
      "always",
    ],
        // "indent":[
    //   "error",
    //   2
    // ],
  },
}