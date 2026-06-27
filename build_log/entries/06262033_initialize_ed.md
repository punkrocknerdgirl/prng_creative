2026-06-26
Project Ed repo cleanup

Problem:
Project Ed had local caller files plus secret-bearing test/config files in the same project folder.

Risk:
ed-broker-test.json and project-ed-local-caller/.env could contain broker endpoint details or secrets, so they must never be committed.

Fix:
Created a root .gitignore before initializing Git.

Ignored:
- .DS_Store
- .env
- .env.*
- ed-broker-test.json
- *secret*
- *token*
- credentials*
- .venv/
- __pycache__/
- *.pyc
- .vscode/

Committed safe files only:
- README.md
- root .gitignore
- project-ed-local-caller/.gitignore
- project-ed-local-caller/docs/README.md
- project-ed-local-caller/ed_caller.rtf
- project-ed-local-caller/ed_capture.py

Result:
Created local commit:
"Initial Project Ed local caller files"

Connected to existing GitHub repo:
https://github.com/punkrocknerdgirl/ed.git