
import { getOctokit } from '@actions/github'
import { Context } from "@actions/github/lib/context";
import * as core from '@actions/core'


type args = {
    github: ReturnType<typeof getOctokit>,
    context: Context,
    core: typeof core
}

module.exports = async ({ github, context, core }: args) => {
    github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: core.getInput('message', { required: true })
    })

}
