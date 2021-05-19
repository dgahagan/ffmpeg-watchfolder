const path = require('path');
const chokidar = require('chokidar');
var FfmpegCommand = require('fluent-ffmpeg');

var watchPath = './input/';
var outputPath = './output/';

// Initialize watcher.
const watcher = chokidar.watch(watchPath, {
  persistent: true
});

watcher
  .on('add', path => ConvertFile(path,outputPath));

function ConvertFile(file, outputPath){
  //Display something on screen
  const log = console.log.bind(console);
  log(`File ${file} has been added`)

  //Convert video
  var command = new FfmpegCommand(file)
  .videoCodec('libx264')
  .audioCodec('libmp3lame')
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .on('end', function() {
    console.log('Processing finished !');
  })
  .save(outputPath+path.basename(file));
}