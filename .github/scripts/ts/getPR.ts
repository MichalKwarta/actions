

import { context, getOctokit } from '@actions/github'
import { GitHub } from '@actions/github/lib/utils';
import { Octokit } from "@octokit/rest";
import { Context } from "@actions/github/lib/context";


type args = {
    github: ReturnType<typeof getOctokit>,
    context: Context,
    core: any
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
        return result.data
      } catch (err) {
        core.setFailed(`Request failed with error ${err}`)
      }

}
