module.exports = async ({ github,context,core }) => {

    github.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: '👋 Hey, test job failed!'
    })

}