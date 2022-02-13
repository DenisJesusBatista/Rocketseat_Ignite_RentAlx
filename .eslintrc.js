module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "airbnb-base",
        "prettier",
        "plugin:prettier/recommended",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "eslint-plugin-import-helpers",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "camelcase": "off",
        "import/no-unresolved": "error",
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": "interface",
            "format": ["PascalCase"],
            "custom": {
              "regex": "^I[A-Z]",
              "match": true
            }
          }
        ],
        "class-methods-use-this": "off",
        "import/prefer-default-export": "off",
        "no-shadow": "off",
        "no-console": "off",
        "no-useless-constructor": "off",
        "no-empty-function": "off",
        "lines-between-class-members": "off",
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "ts": "never"
          }
        ],
        "import-helpers/order-imports": [
          "warn",
          {
            "newlinesBetween": "always",
            "groups": ["module", "/^@shared/", ["parent", "sibling", "index"]],
            "alphabetize": { "order": "asc", "ignoreCase": true }
          }
        ],
        "import/no-extraneous-dependencies": [
          "error",
          { "devDependencies": ["**/*.spec.js"] }
        ]
    },
    "settings": {
        "import/resolver": {
          "typescript": {}
        }
      }
}
