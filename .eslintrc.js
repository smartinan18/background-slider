module.exports = {
    "env": {
        "browser": true
    },
    "globals": {
        "angular": true
    },
    "extends": ["eslint:recommended"],
    "parserOptions": {
        "ecmaVersion": 6
    },
    "rules": {
        "indent": [
            "warn",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};