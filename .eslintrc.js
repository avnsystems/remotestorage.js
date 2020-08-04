module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019
  },
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  env: {
    browser: true,
    node: true
  }, globals: {
    "ArrayBuffer": true,
    "ArrayBufferView": true,
    "Promise": true,
    "NodeJS": true,
    "Int8Array": true,
    "Uint8Array": true,
    "Int16Array": true,
    "Uint16Array": true,
    "Int32Array": true,
    "Uint32Array": true,
    "Float32Array": true,
    "Float64Array": true,
  },
  rules: {
    "complexity": ["warn"],
    "max-statements": ["warn"],
    "no-debugger": 2,
    "no-console": [
      2,
      {
        allow: ["warn", "error"]
      }
    ],
    "no-bitwise": 2,
    "curly": 2,
    "eqeqeq": 2,
    "no-eval": 2,
    "no-loop-func": 0,
    "no-caller": 2,
    "no-script-url": 2,
    "no-shadow": 2,
    "no-new-func": 0,
    "no-new-wrappers": 0,
    "no-undef": 2,
    "new-cap": [
      "error", {
        "capIsNewExceptions": [ "Authorize", "Discover" ]
      }
    ],
    "no-empty": 2,
    "no-new": 2,
    "no-useless-escape": 0,
    "block-spacing": 2,
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 2,
        "MemberExpression": "off",
        "CallExpression": {
          arguments: "off"
        }
      }
    ],
    "no-multi-str": 2,
    "semi": 2,
    "arrow-spacing": 2,
    "no-prototype-builtins": 1,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-var-requires": 1,
    "@typescript-eslint/no-use-before-define": 1,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-interface": 1
  },
  "ignorePatterns": [
    "*.js",
    "node_modules/"
  ]
};
