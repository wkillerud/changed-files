/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-commonjs */
const fs = require('fs')
const path = require('path')

fs.writeFileSync(
  path.join(__dirname, 'existing/__image_snapshots__/new.txt'),
  'hello'
)

fs.mkdirSync(path.join(__dirname, 'new/__image_snapshots__/'), {
  recursive: true
})
fs.writeFileSync(
  path.join(__dirname, 'new/__image_snapshots__/new.txt'),
  'hello'
)
