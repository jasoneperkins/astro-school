---
description: save, stage, commit, and push changes to GitHub
---

Whenever the user asks to "send to git" or "deploy to github", follow these steps:

1. **Save all changes**: Ensure all recent edits in the conversation have been written to disk using the `write_to_file` or `replace_file_content` tools.
2. **Stage all changes**:
   ```powershell
   git add .
   ```
3. **Generate a commit message**: Analyze all changes made since the last commit (using `git diff --cached`) and summarize them into a descriptive commit message.
4. **Deploy Sanity**:
   ```powershell
   cd studio
   npx sanity graphql deploy --yes
   cd ..
   npm run studio:deploy
   ```
5. **Push to GitHub**:
   ```powershell
   git push
   ```

// turbo-all
Run all command-line steps automatically once the commit message is generated.
