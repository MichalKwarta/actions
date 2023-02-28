import { context, getOctokit } from '@actions/github'
import { GitHub } from '@actions/github/lib/utils';
import { Octokit } from "@octokit/rest";
import { Context } from "@actions/github/lib/context";


type args = {
    github: ReturnType<typeof getOctokit>,
    context: Context,
    core: any
    extra: any
}
module.exports = async ({ github,context,core ,extra}:args) => {

    github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: extra
    })

}
