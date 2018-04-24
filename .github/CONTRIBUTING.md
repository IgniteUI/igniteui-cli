# Overview  
Ignite UI CLI  accepts contributions, as long as they follow the guidelines explained below. When contributing you would have to follow these steps:

1. Fork the repository
2. Perform the changes in your fork
3. Create a pull request with your changes and reference the issue you're working on

Your pull request will undergo a review and if approved will be merged. All checks for the pull request should pass before a pull request is merged.

In order to perform all the necessary checks before pulling your changes in, you need to run

    npm install
    npm test

# <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

You need to provide reproducible scenario and amy extra information which might be related the issue such as: 

- version of Ignite UI CLI used
- `.ignite-ui-cli.json` configuration
- 3rd-party libraries and their versions


You can submit new issues by filling out our [new issue form](https://github.com/IgniteUI/igniteui-cli/issues/new).

# <a name="feature"></a> Feature Request
You can *request* a new feature by [submitting an issue](#submit-issue) to our [GitHub
Repository][github]. 

First open an issue and outline your proposal so that it can be
discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,
and help you to craft the change so that it is successfully accepted into the project.






# Workflow
When working on an issue for the Ignite UI CLI repository, you need to be aware of and to follow a correct status workflow. We have created a number of status labels in order to communicate well what the current status of a single issue/pull request is. The statuses are as follows:

## Development - applicable to issues and pull requests
1. `status: in-review` this is the initial status of an issue. If the label is not placed, go ahead and place it.
2. `status: in-development` this is the status once you start working on an issue. Assign the issue to yourself if it hasn't been assigned already and remove the previous status and assign it an in development status.
3. `status: by-design` this is the status of an issue that has been reviewed and has been determined that the current design of the feature is such that the issue describes the correct behavior as incorrect. Remove other statuses and place this status if you've reviewed the issue.
4. `status: third-party-issue` this is the status of an issue that has been reviewed, has been determined to be an issue, but the root case is not in the Ignite UI CLI code.
5. `status: not-to-fix` this is the status of issues that derive from our code, but have been decided to leave as is. This is done when fixes require general design and/or architecture changes and are very risky.




# Fixing a bug  
When fixing a bug you need to follow these guidelines:

1. Leave a comment above your change in the format `<initials> <date> <Issue Number|Issue Link> <Comment for the change>`
   * e.g. `K.D. June 28th, 2016 #1234 Adding this comment as an example`
   * e.g. `K.D. June 28th, 2016 https://github.com/IgniteUI/ignite-ui/issues/1234 Adding this comment as an example`
2. Write unit tests that cover your change. The test should fail prior to your change and pass after it
3. Run JSHint, JSCS, Unit tests and make sure they all pass
4. Pull request your changes and reference the issue. Use the following title/description format.
   * Title: `<Issue Number> <Change Title>` Description: `closes <Issue Number> <Longer Description>`
   * e.g. Title: `#123 Changing foo to bar` Description: `closes #123`
5. Don't forget to make the necessary status updates, as described in the workflow section.

When bug fixes are applicable to multiple branches, there will be additional steps between 3 and 4. So if let’s say we have a 1.2.x, 1.3.x, and a master branch the process will look like this:

1.	If the bug is in 1.2.x, then switch the branch your branching from to `1.2.x`. For code example purposes let's say the new branch is called `fixing-bug-12x`.
2.	Commit your changes to your `fixing-bug-12x` branch.
3.	Push and PR to the `1.2.x` branch.
4.	Switch to the `1.3.x` branch.
5.  Create a new branch.  For code example purposes let's say the new branch is called `fixing-bug-13x`.
6.  Cherry pick your commit from the `fixing-bug-12x` branch: `git cherry-pick fixing-bug-12x`
7.  Push to your `fixing-bug-13x` branch and PR to the `1.3.x` branch.
8.	Repeat steps 4-7 for all other applicable branches including `master`.

# <a name="commit"></a> Commit Message Guidelines

We follow specific commit format. This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the Ignite UI CLI change log**.

## Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type** and a **subject**:

```
<type>: <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory.

## Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

## Type
Must be one of the following:

* **chore**: No production code change - update grunt
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests


* **changelog**: used for updating the release notes in CHANGELOG.md
* none/empty string: useful for `style`, `test` and `refactor` changes that are done across all packages (e.g. `style: add missing semicolons`)

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.



# New feature development
In order to contribute code to a new feature, you need to follow these guidelines.

1. Work on implementation in your fork
2. Follow a test-driven development process (TDD) to ensure full code coverage, or make sure that you include unit tests that cover all of the newly added code
3. Document all newly added public methods, inputs, outputs and properties.
4. Make sure all static code analysis and tests pass before opening a pull request
5. Reference the issue you've been working on in your commit message and pull request title/description.
6. Don't forget to make the necessary status updates, as described in the workflow section.

# Testing a PR
In order to test a pull request that is awaiting test, perform the following actions.

1. Checkout the master branch locally. *Depending on the PR target this can also be a version branch.*
2. Verify that the issue describes correctly the current behavior of the feature/control.
3. If you reproduce the issue, checkout the pull request locally.

  Replace the `<PULL_ID>` with the respective pull number in the following:
  ```bash
  git fetch igniteui-cli +refs/pull/<PULL_ID>/merge
  git checkout -qf FETCH_HEAD
  ```
  > Note that the above assumes the remote for this repo is "igniteui-cli" but "https://github.com/IgniteUI/igniteui-cli.git" can be used as well. This uses a detached and temporary ref to quickly get PR merged state the same as the CI builds so there's no branch to dispose of after switching away. If you do want to make some changes, consider creating a branch from the pull request one or check out the [Checking out pull requests locally](https://help.github.com/articles/checking-out-pull-requests-locally/) article.
4. Verify that the expected behavior is observed with the changes in the pull request.
5. Return the pull request in a not fixed state if you're still reproducing the issue.
6. Don't forget to make the necessary status updates, as described in the workflow section.
