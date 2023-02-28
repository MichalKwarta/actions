import { context, getOctokit } from '@actions/github'
import { GitHub } from '@actions/github/lib/utils';
import { Octokit } from "@octokit/rest";
import { Context } from "@actions/github/lib/context";


type args = {
    github: ReturnType<typeof getOctokit>["rest"],
    context: Context,
    core:any
}
module.exports = async ({ github,context,core }:args) => {

    github.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: '👋 Hey, test job failed!'
    })

}
