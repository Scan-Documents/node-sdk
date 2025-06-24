# Changelog

## 0.1.0-alpha.5 (2025-06-24)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** update via SDK Studio ([70168fa](https://github.com/Scan-Documents/node-sdk/commit/70168fa2bf97cb14beb6e050d90871240168e44c))
* **api:** update via SDK Studio ([a43a003](https://github.com/Scan-Documents/node-sdk/commit/a43a00355e7fc01e579754abb248329b4917d778))
* **api:** update via SDK Studio ([4bedf3d](https://github.com/Scan-Documents/node-sdk/commit/4bedf3df8238c97071510a3683a742add5939d5d))
* **api:** update via SDK Studio ([5c5a063](https://github.com/Scan-Documents/node-sdk/commit/5c5a063a2f53dec45c0a193adb446250efc430a8))
* **api:** update via SDK Studio ([d04e245](https://github.com/Scan-Documents/node-sdk/commit/d04e2459e3af994e8124b85240423f171dfd6f75))
* **client:** add support for endpoint-specific base URLs ([d154b67](https://github.com/Scan-Documents/node-sdk/commit/d154b6772a1a12c052eb1f97a4ae45f685100fc8))
* **mcp:** implement support for binary responses ([a89234f](https://github.com/Scan-Documents/node-sdk/commit/a89234fd6eb4de419eb80f4c9d5a324e3da34183))
* **mcp:** include http information in tools ([3d8e524](https://github.com/Scan-Documents/node-sdk/commit/3d8e52400096f3f9868ab83586976a3a92a2d467))
* **mcp:** set X-Stainless-MCP header ([6d04f3b](https://github.com/Scan-Documents/node-sdk/commit/6d04f3b56632c8b8f4fbb47862b3b5c0d5371f0e))


### Bug Fixes

* **client:** explicitly copy fetch in withOptions ([0c5fe5a](https://github.com/Scan-Documents/node-sdk/commit/0c5fe5acff20bd4ca263d05f08d8d890257b72a8))
* compat with more runtimes ([96df746](https://github.com/Scan-Documents/node-sdk/commit/96df7469f152a286f008ef22757d79512bd28cef))
* **mcp:** fix cursor schema transformation issue with recursive references ([112fb67](https://github.com/Scan-Documents/node-sdk/commit/112fb67a3f37d876d0b00d801c4092c508ec33da))
* **mcp:** include description in dynamic tool search ([588cd03](https://github.com/Scan-Documents/node-sdk/commit/588cd035d9908c073e26021046cbace0f809a5c0))
* publish script — handle NPM errors correctly ([fc5ea58](https://github.com/Scan-Documents/node-sdk/commit/fc5ea5897660f918c600d9b6f90c405d52b609b5))


### Chores

* adjust eslint.config.mjs ignore pattern ([a3eeed2](https://github.com/Scan-Documents/node-sdk/commit/a3eeed23683fea726fca2a9755320caec5f5b08a))
* avoid type error in certain environments ([13a317a](https://github.com/Scan-Documents/node-sdk/commit/13a317a3d40e8e53686c06860e9a8eb13ae3d6a5))
* **ci:** enable for pull requests ([23ffa3c](https://github.com/Scan-Documents/node-sdk/commit/23ffa3cafec1e413ad5468f804e1ccf8d26872b7))
* **client:** refactor imports ([ebb2afd](https://github.com/Scan-Documents/node-sdk/commit/ebb2afd0c55b2c02f374c761b4e668cfdc9cd0a0))
* **deps:** bump eslint-plugin-prettier ([d4ded48](https://github.com/Scan-Documents/node-sdk/commit/d4ded48bc45b220e74f4130d3ba95f2203318933))
* **docs:** grammar improvements ([93f8200](https://github.com/Scan-Documents/node-sdk/commit/93f8200ffd314b4ec9e36dd3ea972ab2a9781ef7))
* **docs:** use top-level-await in example snippets ([d9519ed](https://github.com/Scan-Documents/node-sdk/commit/d9519eda1ac2b8e10ae306c0690815a915709fe0))
* improve publish-npm script --latest tag logic ([2053613](https://github.com/Scan-Documents/node-sdk/commit/20536130588f3ea098459c542c680a1f0b8c7537))
* **internal:** add pure annotations, make base APIResource abstract ([9ce83f6](https://github.com/Scan-Documents/node-sdk/commit/9ce83f6d0994b3e9712dc25bd64c51762d18cb95))
* **internal:** codegen related update ([f65a114](https://github.com/Scan-Documents/node-sdk/commit/f65a114a884f9595b263d7216ff48fa05d194430))
* **internal:** fix readablestream types in node 20 ([79d997e](https://github.com/Scan-Documents/node-sdk/commit/79d997eaa3df27558d7664c02381ac989b141848))
* **internal:** update jest config ([2d34bb5](https://github.com/Scan-Documents/node-sdk/commit/2d34bb54aa3f193ca3bbb64d5bfc8c058b6c9b50))
* **mcp:** provides high-level initMcpServer function and exports known clients ([67ae503](https://github.com/Scan-Documents/node-sdk/commit/67ae503e605c16a97f3286017348bc7e8fa366c8))
* **mcp:** remove duplicate assignment ([df3e9b5](https://github.com/Scan-Documents/node-sdk/commit/df3e9b575185818ec86317331deaaa339795914a))
* **readme:** update badges ([96e2b2e](https://github.com/Scan-Documents/node-sdk/commit/96e2b2e4bcdc2aac0ae54a166da1bb74d9b0a4ed))
* **readme:** use better example snippet for undocumented params ([4f15e11](https://github.com/Scan-Documents/node-sdk/commit/4f15e1146712fe17de280aafcf7e0db38a3978e9))


### Refactors

* **types:** replace Record with mapped types ([1b2ab0b](https://github.com/Scan-Documents/node-sdk/commit/1b2ab0b6728a66f72c8726c814c1480af27ac799))

## 0.1.0-alpha.4 (2025-05-21)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** update via SDK Studio ([825db67](https://github.com/Scan-Documents/node-sdk/commit/825db6702da4376ec6ae5977469a0e572b053957))


### Documentation

* readme changes ([d33adb0](https://github.com/Scan-Documents/node-sdk/commit/d33adb0d480cea87d13f65a66ce987d32a040fad))

## 0.1.0-alpha.3 (2025-05-21)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** update via SDK Studio ([6424460](https://github.com/Scan-Documents/node-sdk/commit/64244607cf2bba7625484f24707e01cf44e2c1b3))

## 0.1.0-alpha.2 (2025-05-21)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Chores

* configure new SDK language ([c67054f](https://github.com/Scan-Documents/node-sdk/commit/c67054fbb0ddd462c28710624f704049361cabb4))

## 0.1.0-alpha.1 (2025-05-21)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/Scan-Documents/node-sdk/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** update via SDK Studio ([9eb4d49](https://github.com/Scan-Documents/node-sdk/commit/9eb4d49ba98578870e3c04fe1adfda8eef4e7983))


### Chores

* update SDK settings ([5193698](https://github.com/Scan-Documents/node-sdk/commit/51936984b86cc829e62499c3b2423627a1734da0))
* update SDK settings ([86af083](https://github.com/Scan-Documents/node-sdk/commit/86af083fcf21199132a70effc67d8fe1a082052b))
