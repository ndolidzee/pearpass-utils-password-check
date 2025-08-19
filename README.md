# pearpass-utils-password-check

A utility library to check the strength of passwords and passphrases based on configurable rules.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage Examples](#usage-examples)
- [Dependencies](#dependencies)
- [Related Projects](#related-projects)

## Features

This utility provides functions to check the strength of passwords and passphrases based on configurable rules:

**Password Validation:**
- Minimum length requirements
- Uppercase and lowercase character inclusion
- Number inclusion
- Special character inclusion

**Passphrase Validation:**
- Minimum word count
- Unique words verification
- Capital letter inclusion
- Symbol inclusion
- Number inclusion

## Installation

```bash
npm install pearpass-utils-password-check
```

## Usage Examples

### Checking Password Strength
```javascript
import { isPasswordSafe } from 'pearpass-utils-password-check';

// With default rules
const result = isPasswordSafe('Test123!');
console.log(result.strength); // strong

// With custom rules
const customResult = isPasswordSafe('Test1234', {
    length: 8,
    includeSpecialChars: false,
    lowerCase: true,
    upperCase: true,
    numbers: true
});
console.log(customResult.strength); // strong
console.log(customResult.rules); // Detailed rules assessment
```

### Checking Passphrase Strength
```javascript
import { isPassphraseSafe } from 'pearpass-utils-password-check';

// With default rules
const words = ['Test1!', 'Word2@', 'Example3#', 'Unique', 'Safe', 'Pass', 'Phrase', 'Another4$'];
const result = isPassphraseSafe(words);
console.log(result.strength); // strong

// With custom rules
const customResult = isPassphraseSafe(words, {
    capitalLetters: true,
    symbols: true,
    numbers: true,
    words: 6
});
console.log(customResult.strength); // strong
console.log(customResult.rules); // Detailed rules assessment
```

## Dependencies

This package has no runtime dependencies.

## Related Projects

- [pearpass-app-mobile](https://github.com/tetherto/pearpass-app-mobile) - A mobile app for PearPass, a password manager
- [pearpass-app-desktop](https://github.com/tetherto/pearpass-app-desktop) - A desktop app for PearPass, a password
- [pearpass-lib-ui-react-native-components](https://github.com/tetherto/pearpass-lib-ui-react-native-components) - A library of React Native UI components for PearPass
- [pearpass-lib-ui-react-components](https://github.com/noxtton/pearpass-lib-ui-react-components) - A library of React UI components for PearPass
- [tether-dev-docs](https://github.com/tetherto/tether-dev-docs) - Documentations and guides for developers

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](./LICENSE) file for details.