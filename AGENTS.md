# Repository Guidelines

## Commit conventions

- Write commit messages in English.
- Follow the Conventional Commits format: `<type>(optional-scope): <description>`.
- Use an imperative, concise, lowercase description without a trailing period.
- Keep each commit focused on a single logical change.
- Example: `refactor: modularize site content`.

## Versioning and changelog

- Before creating a commit or pull request with changes intended for release, catalog those changes in `CHANGELOG.md` under the target version.
- Determine the next version according to semantic versioning and update both `package.json` and `package-lock.json` before committing or opening the pull request.
- Keep the version identical in both package files and ensure the changelog entry uses the same version.
- Complete versioning and changelog updates before the commit or pull request; do not leave them as release follow-up work.
