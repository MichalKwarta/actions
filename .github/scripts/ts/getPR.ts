

import { context, getOctokit } from '@actions/github'
import { GitHub } from '@actions/github/lib/utils';
import { Octokit } from "@octokit/rest";
import { Context } from "@actions/github/lib/context";
import core from '@actions/core'


type args = {
    github: ReturnType<typeof getOctokit>,
    context: Context,
    core: typeof core
}
module.exports = async ({ github,context,core}:args) => {
    const request = {
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: context.issue.number
      }
      core.info(`Getting PR #${request.pull_number} from ${request.owner}/${request.repo}`)
      try {
          const result = await github.rest.pulls.get(request)
          core.setOutput('result', result.data)
      } catch (err) { 
        core.setFailed(`Request failed with error ${err}`)
      }
    

}
