## Promise module runner

An experiment in running arbitrary module functions that return promises.

## Requirements

node.js > 4.x

## Installation

`npm install`

## Usage

`node index.js PARAMS MODULECODE`

For example:
`node index.js '{"name": "Hopper"}' "module.exports=function(data){return Promise.resolve(data.name)}"`

Or with a gist with curl magic like so:
`node index.js '{"name": "Hopper"}' "$(curl -s https://gist.githubusercontent.com/desmondmorris/df5e82facb513fac2930/raw/8c497aa4d34ba56d6ec6e2c8a968e9abc2f90a9a/helloworld.js)"`

## In Docker

## Build

From the project root, run:
`docker build -t promise-module-runner .`

## Run
Now you should be able to run the example from above in a container like so:
`docker run promise-module-runner '{"name": "Hopper"}' "module.exports=function(data){return Promise.resolve(data.name)}"`
