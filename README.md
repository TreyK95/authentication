# Getting Started
TLDR: need to clone with a unique project name and rename database 

1. git clone git remote add origin git@github.com:TreyK95/starter.git <new_project_name>(change everytime you clone)
2. cd into whatever you named project <new_project_name>
3. run bundle 
4. rename database to something unique (use project name) <new_project_name> in `database.yml`
  - search for `starter` and replace with new project name
  - command f search for `starter` replace with new project name 
5. once database is renamed run db:create 
6. cd client 
7. run yarn

## to test
1. rails s -p 3001 
2. cd client && run yarn start 

## HANDLE GITHUB  YOU NEED A NEW REPO 
two ways to do this 
1. remove remote and add new one (easiest, preferred)
  - `git remote rm origin`
  - create a new github repo 
  - `git remote add origin "sshlinktorepo"

2. remove git repo entirely and recreate a new repo 
  -`rm -rf .git`
  -`git init`
  -`git add .`
  -`git commit -m 'init'`
  -`git remote add origin sshlink`




