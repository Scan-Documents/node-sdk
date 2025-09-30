# Changelog

## 0.1.0-alpha.9 (2025-09-30)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **mcp:** add docs search tool ([2b438d8](https://github.com/Scan-Documents/node-sdk/commit/2b438d8c0aff6a847c3a72d1fd503450697e17fe))
* **mcp:** add option for including docs tools ([6b17cdf](https://github.com/Scan-Documents/node-sdk/commit/6b17cdfc596d73dae04bfb4b655dc25063a5138c))
* **mcp:** enable experimental docs search tool ([92af2b4](https://github.com/Scan-Documents/node-sdk/commit/92af2b44067a78a12eb9cf165c2529957fc85e15))


### Bug Fixes

* **mcp:** fix cli argument parsing logic ([3f11854](https://github.com/Scan-Documents/node-sdk/commit/3f118548223695ca3ddcf0e9c2000cdd3af4ec59))
* **mcp:** resolve a linting issue in server code ([b037d4c](https://github.com/Scan-Documents/node-sdk/commit/b037d4c101af82fd0605e437da14defdcf380089))


### Performance Improvements

* faster formatting ([fac22ce](https://github.com/Scan-Documents/node-sdk/commit/fac22ce18a28fd38e1d1a7e5001b1b75818b5903))


### Chores

* **codegen:** internal codegen update ([99b7bf0](https://github.com/Scan-Documents/node-sdk/commit/99b7bf0cee48e90192d0d9bb3826a77cbadd526a))
* do not install brew dependencies in ./scripts/bootstrap by default ([b0509bd](https://github.com/Scan-Documents/node-sdk/commit/b0509bdcaf9c9d9b69de794f7e70a6dd42a61717))
* **internal:** codegen related update ([b5d20df](https://github.com/Scan-Documents/node-sdk/commit/b5d20dfff45be575a2758d924ac4a0db0d6627b6))
* **internal:** fix incremental formatting in some cases ([c3cb905](https://github.com/Scan-Documents/node-sdk/commit/c3cb905ff0c2e58ab177aa34bcee9b51c67ca175))
* **internal:** gitignore .mcpb files ([37827dd](https://github.com/Scan-Documents/node-sdk/commit/37827dddc199d618f9bd34ee7c7cd2a2b4509614))
* **internal:** ignore .eslintcache ([2773e24](https://github.com/Scan-Documents/node-sdk/commit/2773e246cdf2b088e5855fcd8cbbf9060900598b))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([f801bc1](https://github.com/Scan-Documents/node-sdk/commit/f801bc1f98775e3439333a42893d7ad9721a7f4d))
* **mcp:** allow pointing `docs_search` tool at other URLs ([5c09e09](https://github.com/Scan-Documents/node-sdk/commit/5c09e09d060cabe6eba7484e83daad6c69325d2d))
* **mcp:** rename dxt to mcpb ([59a0d59](https://github.com/Scan-Documents/node-sdk/commit/59a0d5970a12c018b3990bdba2e1fcfcf0da9a18))
* update lockfile ([9e18897](https://github.com/Scan-Documents/node-sdk/commit/9e18897ee6bd42d1c08224d6f5ea5e5d1e5beabf))

## 0.1.0-alpha.8 (2025-09-17)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Bug Fixes

* **ci:** set permissions for DXT publish action ([2a49e6e](https://github.com/Scan-Documents/node-sdk/commit/2a49e6eee7c0fe7af1bcc1d1a5f7c482fa993353))

## 0.1.0-alpha.7 (2025-09-12)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Bug Fixes

* **mcp:** fix uploading dxt release assets ([44c6989](https://github.com/Scan-Documents/node-sdk/commit/44c69897a845ea52568e968f9b6aa2d133c59454))


### Chores

* **mcp:** upload dxt as release asset ([1d5cd4e](https://github.com/Scan-Documents/node-sdk/commit/1d5cd4e0c919b008a9a7515167b721e2b4a35b9d))
* update SDK settings ([966887d](https://github.com/Scan-Documents/node-sdk/commit/966887d43af747c7bb0c1bd5de0b880379cfe98e))

## 0.1.0-alpha.6 (2025-08-24)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** update via SDK Studio ([29066c7](https://github.com/Scan-Documents/node-sdk/commit/29066c78a803d4eb260385bdf2a3e7748390b91d))
* **mcp:** add code execution tool ([c36e7ab](https://github.com/Scan-Documents/node-sdk/commit/c36e7ab1ffe8f98f94603aa729b080bd16e034c4))
* **mcp:** add logging when environment variable is set ([57fc795](https://github.com/Scan-Documents/node-sdk/commit/57fc7959d83c30d25152a60aeb8895df38ab15b8))
* **mcp:** add option to infer mcp client ([149e514](https://github.com/Scan-Documents/node-sdk/commit/149e5145317a38b8acb37ec99948fc3aab8a2a2b))
* **mcp:** add unix socket option for remote MCP ([72982bc](https://github.com/Scan-Documents/node-sdk/commit/72982bc112a6a5725956354b361944069cf92faa))
* **mcp:** fallback for void-typed methods ([965b606](https://github.com/Scan-Documents/node-sdk/commit/965b6064ff025b992e21c9fd54edbe6963d27b6b))
* **mcp:** parse query string as mcp client options in mcp server ([a72cd42](https://github.com/Scan-Documents/node-sdk/commit/a72cd4273cb2efc360656de84e17c94d2ba21c25))
* **mcp:** remote server with passthru auth ([05f1022](https://github.com/Scan-Documents/node-sdk/commit/05f1022cf2d8897c5ca52bdac865fea951dabc39))
* **mcp:** support filtering tool results by a jq expression ([436421e](https://github.com/Scan-Documents/node-sdk/commit/436421e66b382295d19149478a5cabb21bce12a6))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([2430747](https://github.com/Scan-Documents/node-sdk/commit/2430747fe786df1a9e237b884c59082cfc21a2bf))
* **client:** get fetchOptions type more reliably ([0a17458](https://github.com/Scan-Documents/node-sdk/commit/0a17458ddfe37d5b3e5c10f7e257fad3e2d08129))
* **mcp:** avoid sending `jq_filter` to base API ([11b40cc](https://github.com/Scan-Documents/node-sdk/commit/11b40cca569792c127c204a6ca9c39e688b182be))
* **mcp:** fix tool description of jq_filter ([33effa6](https://github.com/Scan-Documents/node-sdk/commit/33effa6ccb54e2da65a9aaad00bcbb7070e2bdd0))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([488ee1c](https://github.com/Scan-Documents/node-sdk/commit/488ee1c68366d5253d75565838c2c3447af525b1))
* **mcp:** include required section for top-level properties and support naming transformations ([f7827a6](https://github.com/Scan-Documents/node-sdk/commit/f7827a6390ec0922cdc039344f47774cf588da14))
* **mcp:** relax input type for asTextContextResult ([7f50ae3](https://github.com/Scan-Documents/node-sdk/commit/7f50ae35b174c4e7863bfc71c71ce70f71893ef7))
* **mcp:** reverse validJson capability option and limit scope ([41bd333](https://github.com/Scan-Documents/node-sdk/commit/41bd333e563e4b23100f1f239928aa8c60fc223c))
* **mcp:** support jq filtering on cloudflare workers ([d2bee12](https://github.com/Scan-Documents/node-sdk/commit/d2bee126b3794e12e7a66fd1df7600a89c7adf7a))


### Chores

* add docs to RequestOptions type ([26a2df1](https://github.com/Scan-Documents/node-sdk/commit/26a2df16f3133c6f3ebfa06a906ccbdb667b763c))
* add package to package.json ([52c2226](https://github.com/Scan-Documents/node-sdk/commit/52c22269924c2992a427ce0136bf1f9effd4da8b))
* **ci:** only run for pushes and fork pull requests ([fedf819](https://github.com/Scan-Documents/node-sdk/commit/fedf819df77819d08582e26bf2d768a0971684d0))
* **client:** improve path param validation ([00bb123](https://github.com/Scan-Documents/node-sdk/commit/00bb1237344ad7b4d3cafb5ee3f8015033f581ad))
* **client:** qualify global Blob ([b110292](https://github.com/Scan-Documents/node-sdk/commit/b110292d90aa445e9d73dd7cfa77d2bd57e46aa9))
* **deps:** update dependency @types/node to v20.17.58 ([b435ab1](https://github.com/Scan-Documents/node-sdk/commit/b435ab1ef8e26e20a35842579846c87cd20ff4be))
* **internal:** codegen related update ([5560f78](https://github.com/Scan-Documents/node-sdk/commit/5560f78a373d434a2b1a86f57fd14da284581bc0))
* **internal:** codegen related update ([3554f3c](https://github.com/Scan-Documents/node-sdk/commit/3554f3cab5ce7969889c889bb833e8aa45740159))
* **internal:** codegen related update ([4d9ab35](https://github.com/Scan-Documents/node-sdk/commit/4d9ab3563cfe93b7a61097a484e9f37f7604c5b7))
* **internal:** codegen related update ([b47458d](https://github.com/Scan-Documents/node-sdk/commit/b47458d7c6269e4acbfc6fb4b469597581633e49))
* **internal:** formatting change ([5a0343c](https://github.com/Scan-Documents/node-sdk/commit/5a0343c3751c96f3637abfd0ea84df271abf70a2))
* **internal:** make mcp-server publishing public by defaut ([cb532ff](https://github.com/Scan-Documents/node-sdk/commit/cb532ff281e968d46b3d5dd5710d36ac9bdd530e))
* **internal:** move publish config ([1947212](https://github.com/Scan-Documents/node-sdk/commit/1947212b285dd090527c98fb607308003036e1e3))
* **internal:** refactor array check ([39a25bf](https://github.com/Scan-Documents/node-sdk/commit/39a25bf20d4cafdca951e6aa0fa0bf74a00b378f))
* **internal:** remove redundant imports config ([cfe049c](https://github.com/Scan-Documents/node-sdk/commit/cfe049c407230ed71a4216f893cedb1c85ba856e))
* **internal:** update comment in script ([3be780c](https://github.com/Scan-Documents/node-sdk/commit/3be780cb1d9bc7136a79a2f130617a42bd38b081))
* make some internal functions async ([064caed](https://github.com/Scan-Documents/node-sdk/commit/064caed6799b56c06d441e02319f31ca79f0549f))
* **mcp:** add cors to oauth metadata route ([e47261c](https://github.com/Scan-Documents/node-sdk/commit/e47261c644a962bc76c7ad5afb92ded38034098d))
* **mcp:** document remote server in README.md ([64f8b3a](https://github.com/Scan-Documents/node-sdk/commit/64f8b3a076b881b43878aa2e78c2942a6b53d98d))
* **mcp:** formatting ([32923a2](https://github.com/Scan-Documents/node-sdk/commit/32923a200bbe8c6ba2658428be044bd14e5f09cb))
* **mcp:** minor cleanup of types and package.json ([938a40b](https://github.com/Scan-Documents/node-sdk/commit/938a40bc3dc1b8f4cacdea781c23dea0680ac1eb))
* **mcp:** refactor streamable http transport ([8a955ea](https://github.com/Scan-Documents/node-sdk/commit/8a955eaa7bb01a0a85817567cd0000a15cdca487))
* **mcp:** rework imports in tools ([df24a2f](https://github.com/Scan-Documents/node-sdk/commit/df24a2f821d16e2ef006bf6715be5d87b1179a83))
* **mcp:** update package.json ([261f3f5](https://github.com/Scan-Documents/node-sdk/commit/261f3f5cef6e12b4d435264bc11ce5cc52f6ec6b))
* **mcp:** update README ([b821690](https://github.com/Scan-Documents/node-sdk/commit/b821690f1b0a2494dcb6b2ab0643a212b4a040dc))
* **mcp:** update types ([079839c](https://github.com/Scan-Documents/node-sdk/commit/079839c4089e8cf828d49a36339dc8764e1b6e71))
* **ts:** reorder package.json imports ([596fc4f](https://github.com/Scan-Documents/node-sdk/commit/596fc4f6d1323ceeecf8eef62cc165d5430f9069))
* update @stainless-api/prism-cli to v5.15.0 ([b609b33](https://github.com/Scan-Documents/node-sdk/commit/b609b338d3f8db485a3ede5f4fe920db21c79149))
* update CI script ([2ace297](https://github.com/Scan-Documents/node-sdk/commit/2ace29730fa8c3b74531c0945e955b1339fafc6c))

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
