import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const platform: string = core.getInput('platform')
    core.debug(`Platform: ${platform}`)

    core.debug(new Date().toTimeString())
    // await wait(parseInt(ms, 10))
    // core.debug(new Date().toTimeString())

    core.setOutput('success', "1")
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
