"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = async ({ github, context, core, extra }) => {
    github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: extra
    });
};
