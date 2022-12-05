# Technical test

## Introduction

Fabien just came back from a meeting with an incubator and told them we have a platform “up and running” to monitor people's activities and control the budget for their startups !

All others developers are busy and we need you to deliver the app for tomorrow.
Some bugs are left and we need you to fix those. Don't spend to much time on it.

We need you to follow these steps to understand the app and to fix the bug :

- Sign up to the app
- Create at least 2 others users on people page ( not with signup )
- Edit these profiles and add aditional information
- Create a project
- Input some information about the project
- Input some activities to track your work in the good project

Then, see what happens in the app and fix the bug you found doing that.

## Then

Time to be creative, and efficient. Do what you think would be the best for your product under a short period.

### The goal is to fix at least 3 bugs and implement 1 quick win feature than could help us sell the platform

## Setup api

- cd api
- Run `npm i`
- Run `npm run dev`

## Setup app

- cd app
- Run `npm i`
- Run `npm run dev`

## Finally

Send us the project and answer to those simple questions :

- What bugs did you find ? How did you solve these and why ?

  - Bugs :
    - old webpack-cli dependency
    - bug on adding new user
    - bug on user update
    - bug on project get api
  - Solving process :
    - bug detection
    - bug diagnosis : console error if available, console logging, network checking, db checking, files search => at this point we could define the exact place where the bug comes from (front, back, file)
    - bug fixing

- Which feature did you develop and why ?

  Their are a mot of features that we could add like : project (todo list, tasks, comments, templates), kanban, recruitment process, on-boarding, clients management, budget management (+bills ..), documentation, ideas box, contacts management, roadmaps, ...
  I choosed to add a ToDo list per project, it's likely the most adding value feature to a busy and rapidly growing startup projects to track whats needed to be done, and also could be developed quickly.

- Do you have any feedback about the code / architecture of the project and what was the difficulty you encountered while doing it ?
  - feedbacks / possible enhancement :
    - resolve warning and deprecated dependencies
    - remove hard coded variables and plain text mongo url (we could add .env.example and git ignore .env)
    - mongo url duplicate introduction in .env and .config
    - develop a proper components design system
    - use TS over JS
    - add hints or error message on password .e.g.
    - hide user password on creation
    - auto refresh after new user creation
    - replace console.log by proper logger
    - remove organisation index in projects
