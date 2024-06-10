# Fizzlr - fe app

# table of contents
- [Installation](#installation)
  - [prerequisites](#prerequisites)
  - [nice to have](#nice-to-have)
  - [Installation](#installation-1)
- [Running the app](#running-the-app)
- [Building the app](#building-the-app)
- [Testing](#testing)
- [Notes](#notes)


# Installation

### prerequisites:
  - `nodejs` to install: `
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
  - `yarn` to install: `npm install -g yarn`
### nice to have:

the following are nice to have for installation and controlling environment values.

  - `direnv` to install follow the instructions here: https://direnv.net/
  - `homebrew` to install follow the instructions here: https://brew.sh/

### Installation
To install the app run the following command:

```bash
yarn install
```

after that you will need to add some environment variables to the `.envrc` file in the root of the project.

run the following command to create the `.envrc` file:
```bash
cp .envrc.example .envrc
```
then add the environment variables to the `.envrc` file.

lastly run the following command to load the environment variables: 
```bash
direnv allow .
```
you can alternatively load the env vars into your shel by running the exports manually.

# Running the app
to run the app in dev mode run the following command:
```bash
yarn dev
```

# Building the app
to build the app run the following command:
```bash
yarn build
```

you can then serve it from the `dist` folder by running the following command:
```bash
yarn start
```

# Testing
to run the tests run the following command:
```bash
yarn test
```

# Notes

### Tech stack
the app is built using `vite` and `react-ts` template.

I've decided to use `vite` because it's faster than `create-react-app` and it's more modern.

I've decided to use `vite-test` over `jest` or `mocha`. `vitest` is a new test runner that works with all other testing libraries. It runs a lot faster than jest and since the app is built in `vite` it seemed the logical choice.

### Libraries
I've decided to use `apollo` for my client side api requests. I'm already using apollo in the backend for the graphql server so it seemed logical to use it in the frontend. It also comes with a lot of built-in loading and error handling.

I've decided to use `antd` because it's a very easy to use library and does not require a lot of setup to get started.

I've decided against a more modern css/jss solution like `styled-components` or `emotion` because I did not feel that much styling would be needed because I used the antd component library.

### Extra feature
As an extra feature I decided to fetch the userData from steam and serve it back. I'm displaying some extra info because it is nice to see who you are actually looking at. I've also used the created time to calculate how much time you've spent gaming (on steam) during the time you have been active. This is expressed in a percentage. I personally do not like my own percentage :D. I need to spend more time with my family by the looks of it.

### Improvements
I've only added a few tests and would like to add more but I believe the tests that are there show my testing capability and in order to conserve some time I've decided against writing the full test suite. I would also improve some of the error handling in the application and the way that the app is rendered. There are some optimisations that can be made in the time to live.

I would also have liked to add more ESLINT rules. For sake of speed I've decided against setting up my "perfect" eslint config. I would add prettier as well as look at some other rules that I would want to enable.

I would also like to add a tool like `storybook` to make it easier to develop components. It also adds out of the box visual regression testing (free tier with upgrades available) and allows me to share the components that we have with the team.

And lastly the current deployment is quite simple with heroku. I would much rather improve the github protocols and automation to handle the deploys from there. This gives me greater control when setting up deployments and not letting heroku handle it. (AWS > Heroku).
