# find-missing [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

## Install

Find missing number in range.
```
npm i find-missing --save
```

## How to use?

```js
let findMissing = require('find-missing');

findMissing(1, 10, [5]);
// returns
1;

findMissing(1, 10, [1]);
// returns
5;

findMissing(1, 10, [1, 5, 10]);
// returns
2;
```

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/find-missing.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/find-missing/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/find-missing.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/find-missing "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/find-missing  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/find-missing "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

[CoverageURL]:              https://coveralls.io/github/coderaiser/find-missing?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/find-missing/badge.svg?branch=master&service=github
