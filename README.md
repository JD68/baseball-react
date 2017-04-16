### Personal baseball project using react.

## Table of Contents

1. [Installation](#installation)
1. [Initialize your project](#initialize-your-project)
1. [Suggested Workflow](#suggested-workflow)

## Installation

### Prerequisite

You need to have Node.js and npm installed.


## Initialize your project

Run the following commands in your terminal

**NOTE: You only need to run this once!**

```sh
$ npm install # This will install the necessary packages to use the app
```


### To run the app in Development Mode

```sh
$ npm run dev
```

Wait about 5 - 10 seconds for your development environment to initialize.

When it finishes, open your browser and go to `http://localhost:8080/`

If you see the landing page, it means you have set up everything successfully.


### List of NPM Commands


```sh
$ npm run dev    # build and watch, but javascript not minified
$ npm run build  # build a minified production version
$ npm run lint   # linting
$ npm run test   # run test
```


## Suggested Workflow


After you check out the repo, I will usually do the following :

0. Go to your project root in your host machine  ( e.g. your Mac )
1. Run `npm run dev`
2. Go to your browser and go to `localhost:8080`
3. Make code changes
4. Watch your code changes reflect on browser without refreshing
5. Repeat your development steps

### Production Preview

React Redux Boilerplate supports production preview, which means that you can run the production build job and see how it looks like in production.

1. Run `npm run build` and wait until it is done (it'll take awhile)
2. Go to the project `docroot`, you will see a `index.html`
3. Open that `index.html` in your browser, and that is the build version that just got generated


