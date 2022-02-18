import {expect, test} from '@jest/globals'
import {findChangedFiles} from '../src/git'

test('finds the expected files', async () => {
  const pattern = '**/__image_snapshots__/*'

  const matches = await findChangedFiles([pattern])
  expect(matches).toHaveLength(2)

  const expectedMatches = [
    '__testing_ground__/existing/__image_snapshots__/new.txt',
    '__testing_ground__/new/__image_snapshots__/new.txt'
  ]

  expectedMatches.forEach(expected => expect(matches).toContain(expected))
})
