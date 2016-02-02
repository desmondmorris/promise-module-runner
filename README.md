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

`node index.js '{"name": "Hopper"}' "$(curl -s https://gist.githubusercontent.com/desmondmorris/0ec18d8f8509f5e801d4/raw/2daa00c17a60e16b676631f4211ebf8b5a8d3b23/helloworld.js)"`

## In Docker

## Build

From the project root, run:

`docker build -t promise-module-runner .`

## Run
Now you should be able to run the example from above in a container like so:

`docker run promise-module-runner '{"name": "Hopper"}' "module.exports=function(data){return Promise.resolve(data.name)}"`
