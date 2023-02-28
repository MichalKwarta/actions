module.exports = async ({ github,context,core,text }) => {

    github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: text
    })

}