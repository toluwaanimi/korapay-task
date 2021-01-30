# Stackoverflow Documentation

The stackoverflow task is basic implementation of [Stackoverflow](https://stackoverflow.com)

## Documentation

The postman documentation can be accessed [here](https://documenter.getpostman.com/view/8937000/TW6xo8hf)

## Requirements

* Node 12 or higher

* Postgres

## Install NodeJS

To Install NodeJS, kindly go to [Nodejs](https://nodejs.com) and follow the necessary instructions required depending on
your PC Operating System

## MACOS

using a [package](https://nodejs.org/en/#download) simply download the installer

using [homebrew](https://github.com/Homebrew/legacy-homebrew)

```markdown
brew install node
```

## Windows

using a [package](https://nodejs.org/en/#download) simply download the installer

using [chocolatey](http://chocolatey.org/) to install Node

```markdown
cinst nodejs
```

## To install Postgres

For Windows users, you can kindly follow this
tutorials [here](https://learnsql.com/blog/how-to-install-postgresql-on-windows-in-5-minutes/) to install Postgres on
your local PC which explains how to create a database

For Mac users, you can kindly follow this tutorials [here](https://www.robinwieruch.de/postgres-sql-macos-setup)  to
install Postgres on your local PC which explains how to create a database

## Setup Database

To setup your database for the project, after creation kindly open the sequelize.ts file in the src folder of the
project

```markdown
    database: 'your database name',
    port: 5432,
    host: 'your host, localhost or host address',
    username: 'your username',
    password: 'your password'
```

Kindly replace these values with the appropriate values based on your Database environment

## Start Development

Installation To install the necessary packages, in your folder directory kindly run

```markdown
npm i

# or

yarn add
```

* To continuously watch for changes
    * ```markdown 
      npm run dev
      ```

* To run your app server for production
    * ```markdown
      npm run start
         ```

## Implementation Required

* Authentication
    * Login
    * Registration

* Questions
    * Asking
    * Replying

* Rating
    * Upvoting
    * Downvoting

Bonus Task

* Subscription

## Stackoverflow Rules based on the scope of implementation

1. How to gain reputation ?

   The primary way to gain reputation is by posting good questions and useful answers. Votes on these posts cause you to
   gain (or sometimes lose) reputation.

2. You gain reputation when :
    * question is voted up: +10
    * answer is voted up: +10
    * when your answer is accepted: +15

3. You lose reputation when :
    * your question is voted down: −2
    * your answer is voted down: −2
    * you vote down an answer: −1

## Things implemented

* Authentication
    * Registration
    * Login

* Question
    * Ask Question
    * Get All Questions
    * Get Single Question
    * Answer
        * Submit an answer
        * Mark an answer right
        * Delete an answer
    * Subscription
        * Subscribe to a question
    * Comment
        * Comment to a question
        * Update Comment
        * Delete Comment

* Voting
    * Question
        * Upvote Question
        * Undo Upvote to a Question
        * Down Vote Question
        * Undo Downvote for a Question

    * Answer
        * Upvote Answer
        * Undo Upvote for an answer
        * Down vote Answer
        * Undo Downvote for an Answer

* Reputation
    
     All rules of stackoverflow were followed regarding upvote and downvote for questions and answers
    