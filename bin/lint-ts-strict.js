#!/usr/bin/env node
var path = require('path');
var debug = require('debug')('lint-ts-strict');

debug('starting');

runModified = require('run-mod-script');
scriptRunner = function(){
  debug(' requiring tslint');
  require('tslint/bin/tslint');
};
cwd = path.join(__dirname, "../");
options = {
  c: ".tslint.json"
};

debug(' running at cwd: ' + cwd);

runModified(scriptRunner, cwd, options);
