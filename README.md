# frontend-quizz
[![Version](https://img.shields.io/github/package-json/v/xmartinezpujol/frontend-quizz/master?label=version)](https://github.com/xmartinezpujol/frontend-quizz)
[![Known Vulnerabilities](https://snyk.io/test/github/xmartinezpujol/frontend-quizz/badge.svg)](https://snyk.io/test/github/xmartinezpujol/frontend-quizz)
[![Netlify Status](https://api.netlify.com/api/v1/badges/440458ad-f0e8-480d-bb89-84bbbbc7f391/deploy-status)](https://app.netlify.com/sites/frontendquiz/deploys)
[![Build Status](https://travis-ci.org/xmartinezpujol/frontend-quizz.svg?branch=master)](https://travis-ci.org/xmartinezpujol/frontend-quizz)
[![codecov](https://codecov.io/gh/xmartinezpujol/frontend-quizz/branch/master/graph/badge.svg)](https://codecov.io/gh/xmartinezpujol/frontend-quizz)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

A React app to test Frontend questions like a Quiz

<img alt="Frontend Quiz" src="https://raw.githubusercontent.com/xmartinezpujol/frontend-quizz/master/public/img/quizApp.png" width="350" />

## Motivation

In technical interviews it's pretty common to face quiz-like rounds of your programming language of choice. The idea behind frontend-quiz is to help you practice on a daily basis this exercises in a constant and practical way.

It started as a way to improve in JS questions but this can be extended to other languages and even become a generic Trivia Quiz!

## Future Plans

My time is currently limited so I'm just adding some new questions from time to time, but my idea is to keep adding new features. Feel free to contribute with ideas also!

* Score system to keep track of your daily improvements.
* Sharing system, for scores, single questions or event custom quizzes.
* Import/Export JSON files for Quiz data. That way maybe we can allow users to create their own tests and share them with friends.
* Keep it Offline. Simplicity, no data consumption, blazing fast.

## Getting Started

### Client localhost (http://localhost:5000)
Node/NPM required to install dependencies.

Clone rep
``` shell
git clone git@github.com:xmartinezpujol/frontend-quiz.git
```

Install dependencies
``` shell
npm install
```

Start development
``` shell
npm start
```

Make Production Bundle
``` shell
npm run build
```

### Testing

* Unit & Snapshot tests done in Jest. 

``` shell
npm run test
```

* Integration/E2E tests done in Cypress. 

``` shell
npm run teste2e
```

## Contributing

This is an open-source project and will stay that way forever. If you want to contribute, feel free to open a Issue/PR explaining your idea or contribute to existing issues. Thank you!
