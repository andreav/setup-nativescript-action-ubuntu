import * as core from '@actions/core'
import {wait} from './wait'
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

      await exec('/bin/bash', ['-c', 'apt-get install lib32z1 lib32ncurses5 libbz2-1.0:i386 libstdc++6:i386 g++ openjdk-8-jdk'])

      core.exportVariable('JAVA_HOME', '/usr/lib/jvm/java-8-openjdk-amd64')

    } else if (platform === 'macos') {
      throw 'platform macos WIP'
    } else {
      throw 'platform ${platform} not allowed. Only "ubutnu" or "macos" are supported'
    }
    core.setOutput('success', '1')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
