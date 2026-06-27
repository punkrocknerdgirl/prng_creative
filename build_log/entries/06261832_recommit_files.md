2026-06-26 projects fuckery

Git lesson: Do not make ~/projects itself a Git repo when each project folder is supposed to be its own repo. 
Fix used: renamed ~/projects/.git to ~/projects/.git_parent_backup.
Result: ~/projects became a normal container folder again.

2026-06-26
Antihub repo cleanup

Problem:
~/projects accidentally became a parent Git repo again, so Git was seeing changes from sibling folders like ed, abby, prng_books, and prng_creative while standing inside antihub.

Fix:

The first step is actually to pull your head out of your ass and pay attention to what you're fucking doing.

Moved the accidental parent .git folder out of the way, then initialized ~/projects/antihub as its own repo.

Safety check:
Confirmed .gitignore excludes:
- .env
- .venv/
- __pycache__/
- *.pyc
- .DS_Store

Result:
Created and pushed the first clean Antihub commit:
"Initial Antihub project files"

Remote:
https://github.com/punkrocknerdgirl/antihub.git