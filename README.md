# Stackoverflow Documentation

The stackoverflow task is basic implementation of [Stackoverflow](https://stackoverflow.com)

## Documentation
The postman documentation can be access [here](#)


## Requirements
* Node 12 or higher

* Postgres

## Install NodeJS
To Install NodeJS, kindly go to [Nodejs](https://nodejs.com) and follow the necessary instructions required depending on your PC Operating System

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


## Start Development

Installation
To install the necessary packages, in your folder directory kindly run

```markdown
npm i

#or

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
   
   The primary way to gain reputation is by posting good questions and useful answers. Votes on these posts cause you to gain (or sometimes lose) reputation.

2. You gain reputation when :
    * question is voted up: +10
    * answer is voted up: +10
    
3. You lose reputation when :
   * your question is voted down: −2
   * your answer is voted down: −2
   * you vote down an answer: −1