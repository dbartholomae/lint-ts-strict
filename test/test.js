var exec = require('child_process').exec;

exec('node bin/lint-ts-strict test-fixtures/valid-file.ts', function(err, stdout, stderr){
  if (err) {
    throw new Error("Valid file parsed as invalid");
    return process.exitCode = 1;
  } else {
    console.log("Valid file parsed as valid");
  }
});

exec('node bin/lint-ts-strict test-fixtures/invalid-file.ts', function(err, stdout, stderr){
  if (err) {
    console.log("Invalid file parsed as invalid");
  } else {
    throw new Error("Invalid file parsed as invalid");
    return process.exitCode = 1;
  }
});

