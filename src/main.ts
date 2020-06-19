import * as core from '@actions/core'
// import {wait} from './wait'
import {exec} from '@actions/exec'

async function run(): Promise<void> {
  try {
    const platform: string = core.getInput('platform')
    core.debug(`Platform: ${platform}`)

    core.debug(new Date().toTimeString())
    // await wait(parseInt(ms, 10))
    // core.debug(new Date().toTimeString())

    if (platform === 'ubuntu') {
      await exec('/bin/bash', ['-c', 'whoami'])

      await exec('/bin/bash', ['-c', 'sudo npm install -g nativescript'])

      await exec('/bin/bash', ['-c', 'npm install'])

      await exec('/bin/bash', ['-c', 'tns doctor'])
    } else if (platform === 'macos') {
      await exec('/bin/bash', ['-c', 'whoami'])

      await exec('/bin/bash', ['-c', 'sudo npm install -g nativescript'])

      await exec('/bin/bash', ['-c', 'npm install'])

      await exec('/bin/bash', ['-c', 'tns doctor'])
    } else {
      throw Error(
        `platform ${platform} not allowed. Only "ubuntu" or "macos" are supported`
      )
    }
    core.setOutput('success', '0')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
