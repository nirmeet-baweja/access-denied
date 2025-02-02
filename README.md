# Final Project Created for Coode Your Future Full Stack Web Development Program

## Intro

It is a group project that was created for the completion of the Full Stack Trainee Program. It is a Class Attendance Register Application, that allows the class instructor to mark the attendance of the students. It has two user journeys i.e. Admin and Volunteer. Volunteers have access to following features - 
 - Create a new class.
 - Mark if thae students were present, had their cameras on, or if they faced any tech issues etc during the class.
 - See the class report or the summary for their assigned cohort.

The admin has access to all the volunteer privileges and some additional features such as -
 - Ability to create a new Student / Volunteer whenever a new user joins CYF community and assign them to their respective cohort.
 - Have access to all the cohorts.
 
 ## Demo Video & Google Slides
 
-  :movie_camera: [Demo video](https://drive.google.com/file/d/1MrN8BZe797NUMpEEStzA6l2Zy0itgnZO/view?usp=sharing)
-  :clipboard: [Slides](https://docs.google.com/presentation/d/1vvXSfdD88ZRK39L9iKwuRwHuNnHCElunh1bs6EZHX9A/edit?usp=sharing)
  
## Tech Stack

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

 - [x] Full stack ES8+ with [Babel]
 - [x] [Node] LTS support (verified working on 10.x, 12.x and 14.x LTS releases)
 - [x] [Express] server
 - [x] [React] client with [Webpack]
 - [x] Client-side routing with [React Router]
 - [x] Linting with [ESLint]
 - [x] Dev mode (watch modes for client and server, proxy to avoid CORS issues)
 - [x] Production build (single deployment artifact, React loaded via CDN)
 - [x] [Heroku] deployment
 - [x] [Cloud Foundry] deployment
 - [x] [Docker] build
 - [x] [Postgres] database with [node-postgres]

## Setup

Pick one member of the team to own the repository and pipeline. That person should do the following:

 1. Click the "Use this template" button above (see [GitHub's docs][1]) to create your team repository, select "Include all branches" and name it something appropriate for your project.
 2. In your new repo, go to "Settings", then "Branches", then switch the default branch to `postgres` (_optional_: you can now delete the old `master` branch and rename `postgres` to `master`, `main` or whatever else you'd like) - see [GitHub's docs][2] again
 3. In your repo, click the "Deploy to Heroku" button at the top of the README and create a Heroku account when prompted.
 4. Fill in the name of the application, select Europe and then click "Deploy App".
 5. Once it has deployed successfully, click the "Manage app" button to view the application details.
 6. Go to the "Deploy" tab, select "Connect to GitHub" and choose your repo.
 7. Click "Enable automatic deploys".

Whenever you commit to master (or e.g. merge a [pull request]) it will get automatically deployed!

You should now make sure all of the project team are [collaborators] on the repository.

## Steps to setup the database with the dummy data on your local machine

Pre-requisite - You should have postgreSQL installed and setup on your local machine.

- Run the command `npm ci`, to ensure that you have all the required packages installed.
- Ensure that you have a database named "cyf", already created on your local machine. If not run the command `createdb cyf` on the `terminal`.
- Run the command `npx knex migrate:latest`. It should import 7 migrations.
- Then run the command `npx knex seed:run`.
- Your database should be setup now.

## Scripts

Various scripts are provided in the package file, but many are helpers for other scripts; here are the ones you'll
commonly use:

 - `dev`: starts the frontend and backend in dev mode, with file watching (note that the backend runs on port 3100, and
    the frontend is proxied to it).
 - `lint`: runs ESLint against all the JavaScript in the project.
 - `serve`: builds and starts the app in production mode locally.

### Debugging

While running the dev mode using `npm run dev`, you can attach the Node debugger to the server process via port 9229.
If you're using VS Code, a debugging configuration is provided for this.

There is also a VS Code debugging configuration for the Chrome debugger, which requires the recommended Chrome
extension, for debugging the client application.

### Troubleshooting

See the guidance in the [wiki].

  [1]: https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template
  [2]: https://docs.github.com/en/github/administering-a-repository/managing-branches-in-your-repository
  [Babel]: https://babeljs.io/
  [Cloud Foundry]: https://www.cloudfoundry.org/
  [collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository
  [Docker]: https://www.docker.com
  [ESLint]: https://eslint.org/
  [Express]: https://expressjs.com/
  [Heroku]: https://www.heroku.com/
  [Node]: https://nodejs.org/en/
  [node-postgres]: https://node-postgres.com/
  [Postgres]: https://www.postgresql.org/
  [pull request]: https://help.github.com/en/articles/about-pull-requests
  [React]: https://reactjs.org/
  [React Router]: https://reactrouter.com/web
  [Webpack]: https://webpack.js.org/
  [wiki]: https://github.com/textbook/starter-kit/wiki
