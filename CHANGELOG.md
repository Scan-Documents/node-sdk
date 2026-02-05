# Changelog

## 0.1.0-alpha.24 (2026-02-05)

Full Changelog: [v0.1.0-alpha.23...v0.1.0-alpha.24](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.23...v0.1.0-alpha.24)

### Features

* **mcp:** add initial server instructions ([545558c](https://github.com/Scan-Documents/node-sdk/commit/545558ca367fe51539cc04cc1bac5f49c531ae05))


### Chores

* **client:** do not parse responses with empty content-length ([1389823](https://github.com/Scan-Documents/node-sdk/commit/13898230806689632adc8f9fa1d6e825fbade837))
* **client:** restructure abort controller binding ([e4ce7a1](https://github.com/Scan-Documents/node-sdk/commit/e4ce7a161f0a5dc78ac1e553651d9869a671c16b))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([d014b64](https://github.com/Scan-Documents/node-sdk/commit/d014b645e45683609ef7d82561126cff1ca2bfe3))
* **internal:** support oauth authorization code flow for MCP servers ([ce96b0c](https://github.com/Scan-Documents/node-sdk/commit/ce96b0c6cdee3c08414ccbe9d7eda138802e1e49))

## 0.1.0-alpha.23 (2026-02-03)

Full Changelog: [v0.1.0-alpha.22...v0.1.0-alpha.23](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.22...v0.1.0-alpha.23)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([8270f0d](https://github.com/Scan-Documents/node-sdk/commit/8270f0d224ff8d6c3b396e994a9af0c0e4278ebd))


### Chores

* **mcp:** up tsconfig lib version to es2022 ([dbfab5b](https://github.com/Scan-Documents/node-sdk/commit/dbfab5b030098d589a9e93c81e0031dc82add4a5))

## 0.1.0-alpha.22 (2026-01-29)

Full Changelog: [v0.1.0-alpha.21...v0.1.0-alpha.22](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.21...v0.1.0-alpha.22)

### Bug Fixes

* **docs:** fix mcp installation instructions for remote servers ([d4ffbbd](https://github.com/Scan-Documents/node-sdk/commit/d4ffbbd7530b6c8243b7f4b4873811bf1c8eb6a4))

## 0.1.0-alpha.21 (2026-01-28)

Full Changelog: [v0.1.0-alpha.20...v0.1.0-alpha.21](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.20...v0.1.0-alpha.21)

### Bug Fixes

* **mcp:** allow falling back for required env variables ([2064f7e](https://github.com/Scan-Documents/node-sdk/commit/2064f7e9b61182f6f79d93058ce630946eada549))


### Chores

* **ci:** upgrade `actions/github-script` ([10018db](https://github.com/Scan-Documents/node-sdk/commit/10018db8f13528d2045350700bc149085577b720))
* **internal:** codegen related update ([500552c](https://github.com/Scan-Documents/node-sdk/commit/500552c55bb03202c62aad8bec38291064c81e88))
* **internal:** codegen related update ([135b7ac](https://github.com/Scan-Documents/node-sdk/commit/135b7ac138ba6af646acd821b6099ce35d586405))
* **internal:** codegen related update ([3d1bcfe](https://github.com/Scan-Documents/node-sdk/commit/3d1bcfea16b294cca973e0106497edd055a7ccde))
* **internal:** codegen related update ([f14af8b](https://github.com/Scan-Documents/node-sdk/commit/f14af8b7adc486b0c190eaa26b94a3dd9eb768d7))
* **internal:** codegen related update ([37aa64d](https://github.com/Scan-Documents/node-sdk/commit/37aa64d77c5596809ed2b0f6fd08e6b28c84ed9a))
* **internal:** update `actions/checkout` version ([34bd64b](https://github.com/Scan-Documents/node-sdk/commit/34bd64b80c7bede712ffbebbcb200618c3ea2f9b))
* **internal:** update lock file ([d9dc3c8](https://github.com/Scan-Documents/node-sdk/commit/d9dc3c8eef1111ca37a21f49cd640b94e6b3957d))
* **internal:** upgrade babel, qs, js-yaml ([82aebc4](https://github.com/Scan-Documents/node-sdk/commit/82aebc49211d3b3e62d5f914af34b4555b674fc9))
* **mcp:** add intent param to execute tool ([f6f24a3](https://github.com/Scan-Documents/node-sdk/commit/f6f24a35d524ad1c4ce1c36e84ba12bb981ac0f0))
* **mcp:** pass intent param to execute handler ([acb4a88](https://github.com/Scan-Documents/node-sdk/commit/acb4a883840651babdff9765b18b167cc16c91e0))
* **mcp:** upgrade dependencies ([3a8fad6](https://github.com/Scan-Documents/node-sdk/commit/3a8fad686828d8956ed1d943854db9afd17d5095))

## 0.1.0-alpha.20 (2026-01-09)

Full Changelog: [v0.1.0-alpha.19...v0.1.0-alpha.20](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.19...v0.1.0-alpha.20)

### Bug Fixes

* **mcp:** update code tool prompt ([008c333](https://github.com/Scan-Documents/node-sdk/commit/008c333df360441c300d039d0f8d7c71697d2f4e))

## 0.1.0-alpha.19 (2026-01-08)

Full Changelog: [v0.1.0-alpha.18...v0.1.0-alpha.19](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.18...v0.1.0-alpha.19)

### Bug Fixes

* **mcp:** fix env parsing ([f94499f](https://github.com/Scan-Documents/node-sdk/commit/f94499f79fc551ce5e822a4e04bee8d0f7eb455f))

## 0.1.0-alpha.18 (2026-01-07)

Full Changelog: [v0.1.0-alpha.17...v0.1.0-alpha.18](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.17...v0.1.0-alpha.18)

### Bug Fixes

* **mcp:** fix options parsing ([950cadd](https://github.com/Scan-Documents/node-sdk/commit/950caddd288b4cf8f3d9b62248adfacb0a5ec86d))


### Chores

* break long lines in snippets into multiline ([69ff5c6](https://github.com/Scan-Documents/node-sdk/commit/69ff5c6d4226f137b8d796c338600f353e9c34ed))

## 0.1.0-alpha.17 (2026-01-06)

Full Changelog: [v0.1.0-alpha.16...v0.1.0-alpha.17](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.16...v0.1.0-alpha.17)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Bug Fixes

* **mcp:** correct code tool api output types ([5b24467](https://github.com/Scan-Documents/node-sdk/commit/5b24467a6ff8b924a4dd94a833c0e972eb8a07db))


### Chores

* **internal:** codegen related update ([9126131](https://github.com/Scan-Documents/node-sdk/commit/9126131d06457c843109fd0967430b5101b2e8ff))
* **mcp:** remove deprecated tool schemes ([49f084c](https://github.com/Scan-Documents/node-sdk/commit/49f084c05786fa386b8da397fce4aa20c92c473f))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([8e89817](https://github.com/Scan-Documents/node-sdk/commit/8e898172af49f292ea7cbad4b674ff4fbc6975cd))

## 0.1.0-alpha.16 (2025-12-18)

Full Changelog: [v0.1.0-alpha.15...v0.1.0-alpha.16](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.15...v0.1.0-alpha.16)

### Bug Fixes

* **mcp:** add client instantiation options to code tool ([c007cb1](https://github.com/Scan-Documents/node-sdk/commit/c007cb1ddaf61570108c2e6ef4230865fc79b74b))
* **mcp:** pass base url to code tool ([f265822](https://github.com/Scan-Documents/node-sdk/commit/f2658223f23bfa15723abb1ff42d062ab23756d6))


### Chores

* **internal:** codegen related update ([4e12321](https://github.com/Scan-Documents/node-sdk/commit/4e12321fafc288242a2e1eab3e0185b7286f793c))
* **mcp:** update lockfile ([7919465](https://github.com/Scan-Documents/node-sdk/commit/79194651a386483c00ec2f7ebb9a12cda3fd8c94))

## 0.1.0-alpha.15 (2025-12-06)

Full Changelog: [v0.1.0-alpha.14...v0.1.0-alpha.15](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.14...v0.1.0-alpha.15)

### Bug Fixes

* **mcp:** correct code tool API endpoint ([5003e04](https://github.com/Scan-Documents/node-sdk/commit/5003e0415efa882aced42e979dfd429c9daaf402))

## 0.1.0-alpha.14 (2025-12-06)

Full Changelog: [v0.1.0-alpha.13...v0.1.0-alpha.14](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.13...v0.1.0-alpha.14)

### Features

* **mcp:** add typescript check to code execution tool ([787b9fb](https://github.com/Scan-Documents/node-sdk/commit/787b9fb7175b348c6c56775387b51f7853490190))
* **mcp:** handle code mode calls in the Stainless API ([151c4a6](https://github.com/Scan-Documents/node-sdk/commit/151c4a630686fb463b6682ae2feeee4288eecca8))
* **mcp:** return logs on code tool errors ([118be8d](https://github.com/Scan-Documents/node-sdk/commit/118be8d38ea7a1addca56aa0b2e265bf889cc3ed))


### Bug Fixes

* **mcp:** return correct lines on typescript errors ([d2cada6](https://github.com/Scan-Documents/node-sdk/commit/d2cada637e8c9d527019c1e47878abe0c510f1ca))


### Chores

* **internal:** codegen related update ([3012c02](https://github.com/Scan-Documents/node-sdk/commit/3012c02f18b0cd421a705621427e84a018e54287))
* **internal:** upgrade eslint ([86bb2ea](https://github.com/Scan-Documents/node-sdk/commit/86bb2eacb9c20cee034b3da07c08d36be87d06fd))
* use latest @modelcontextprotocol/sdk ([f8b887f](https://github.com/Scan-Documents/node-sdk/commit/f8b887f81238a27d8b0f352201ebc7bf38fa2cf2))

## 0.1.0-alpha.13 (2025-12-02)

Full Changelog: [v0.1.0-alpha.12...v0.1.0-alpha.13](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.12...v0.1.0-alpha.13)

### Features

* **mcp:** add detail field to docs search tool ([50f1c1b](https://github.com/Scan-Documents/node-sdk/commit/50f1c1badddfcb6bfdb07fccf0257c38c597f718))


### Bug Fixes

* **mcp:** return tool execution error on api error ([0b1293d](https://github.com/Scan-Documents/node-sdk/commit/0b1293daf58e201db811aa804709954452e417ff))


### Chores

* **client:** fix logger property type ([d2451fa](https://github.com/Scan-Documents/node-sdk/commit/d2451fa8cdd5d90c061a51333dcc0ae594d7092b))
* **mcp:** upgrade jq-web ([a587451](https://github.com/Scan-Documents/node-sdk/commit/a58745186e4c6278d765ec7d7688edd6b406fd7b))

## 0.1.0-alpha.12 (2025-11-13)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Bug Fixes

* **mcp:** return tool execution error on jq failure ([c4c60b8](https://github.com/Scan-Documents/node-sdk/commit/c4c60b8a4a393dc77c03e5c91476c95f36eeca7e))

## 0.1.0-alpha.11 (2025-11-11)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Features

* **mcp:** enable optional code execution tool on http mcp servers ([4c23596](https://github.com/Scan-Documents/node-sdk/commit/4c23596a29933630c2df756da4aa18ec4838c390))


### Bug Fixes

* **mcp:** use raw responses for binary content ([f45a147](https://github.com/Scan-Documents/node-sdk/commit/f45a1471b481c933dd58a9e760031a80b3169887))


### Chores

* **internal:** codegen related update ([06f7863](https://github.com/Scan-Documents/node-sdk/commit/06f786303bbee758128c347b3acac98a374afa73))
* **internal:** codegen related update ([5333a8c](https://github.com/Scan-Documents/node-sdk/commit/5333a8c74a6850431d5aa7ad21de3275e92cbe2c))
* **internal:** grammar fix (it's -&gt; its) ([fac2c0b](https://github.com/Scan-Documents/node-sdk/commit/fac2c0b505bbf75f0390b74958f5a7d12bfce97d))
* mcp code tool explicit error message when missing a run function ([b5803df](https://github.com/Scan-Documents/node-sdk/commit/b5803dfdb9e2af3358508bffc7ea3535065f0f54))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([1ad3bf4](https://github.com/Scan-Documents/node-sdk/commit/1ad3bf4cf1255c7ea14efa06ccae89783f3cc140))
* **mcp:** add line numbers to code tool errors ([ec9aa52](https://github.com/Scan-Documents/node-sdk/commit/ec9aa52d998fd72b8645fe004f4ba497015ce940))
* **mcp:** clarify http auth error ([bae66db](https://github.com/Scan-Documents/node-sdk/commit/bae66db1aa5ac8b0427eb4806a5805a9c2d0e788))
* use structured error when code execution tool errors ([7f7be2a](https://github.com/Scan-Documents/node-sdk/commit/7f7be2a424315751762dc60dd333bdd97068c967))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([0df21fe](https://github.com/Scan-Documents/node-sdk/commit/0df21fe29f14ac757e3027ad045d22f1a388b046))
* **mcp:** add a README link to add server to VS Code or Claude Code ([3328ea0](https://github.com/Scan-Documents/node-sdk/commit/3328ea0d34e6519970505d8ac791baf0fd7cef59))

## 0.1.0-alpha.10 (2025-10-31)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/Scan-Documents/node-sdk/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Bug Fixes

* **mcpb:** pin @anthropic-ai/mcpb version ([17d2a07](https://github.com/Scan-Documents/node-sdk/commit/17d2a07dd9eab9dc6c1b83342a711af39dd47b19))


### Chores

* extract some types in mcp docs ([4d902c6](https://github.com/Scan-Documents/node-sdk/commit/4d902c6b9a2f5aaebbdf6f177e9f25e5a8d7ee5e))
* **internal:** remove .eslintcache ([cfd1981](https://github.com/Scan-Documents/node-sdk/commit/cfd19817afb1a29d92cc8e7166ee1fbd44cca0e1))
* **internal:** use npm pack for build uploads ([ee6f233](https://github.com/Scan-Documents/node-sdk/commit/ee6f2338b80c359dd1299b5d7e4cb8cb507faa53))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([d59f9b4](https://github.com/Scan-Documents/node-sdk/commit/d59f9b417acd0fbcd6852c968d8fc641a1992e1b))

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
