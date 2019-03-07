#!/usr/bin/env node

process.argv.push('--no-clipboard')
process.env.NO_UPDATE_CHECK = '1'
require('serve/bin/serve')
