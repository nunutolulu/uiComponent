import * as infoCollector from './infoCollector.js'
import * as tplReplacer from './tplReplacer.js'
// const infoCollector = require('./infoCollector')
// const tplReplacer = require('./tplReplacer')

async function run() {
  const meta = await infoCollector()
  tplReplacer(meta)
}

run()