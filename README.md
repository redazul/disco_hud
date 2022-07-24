
# DiscoSea
---

### Overview
---


### Contribution Guide
---
***Steps to collaborate on the repository for team members.***

#### Forking and Cloning Repo
- Fork the project.
- Click on the "Code" button on the Repo page.
- Copy the URL for the forked Repo "https://github.com/redazul/disco_hud.git"
- Open your Code Editor and run `git clone` "https://github.com/redazul/disco_hud.git"

#### Add "Remote To" and "Pull From" Upstream
- Add a Remote to Upstream to your Repo: Using the command : `git remote add upstream "https://github.com/redazul/disco_hud.git"`
- Pull from upstream to download all changes in the project using   `git pull upstream master`

#### Complete assigned task/issue
- Open the project in your IDE or Code Editor.
- Complete your assigned task.

#### Create and Commit Changes to a New Branch
###### When your task is completed:
- Create a new branch with your task name e.g "functionality".
- run: `git checkout -b feat/yourTask` **Push to github**;
- `git add .`
- `git commit -m "feat: Inplemented yourTask"`

#### Push New Branch to "Origin" Repository
- To make sure there are no conflict, Pull from upstream using `git pull upstream master`
- Push your branch changes to the Repo using `git push origin "feat/yourTask"` note how it end with a branch.

#### Creating Pull Request
###### When making a PR, your PR is expected to have the following comments:
- What is the task/issue completed?
- What does the PR actually do?
- How can the PR be manually tested?
- Screenshots of your implementation.