/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-commonjs */
const fs = require('fs')
const path = require('path')

fs.rmSync(path.join(__dirname, 'new/'), {
  force: true,
  recursive: true
})

fs.rmSync(path.join(__dirname, 'existing/__image_snapshots__/new.txt'))
