var FfmpegCommand = require('fluent-ffmpeg');
const path = require('path');
var watchPath = 'c:/node/ffmpeg/input/';
var outputPath = 'c:/node/ffmpeg/output/';
var file = 'BigBuckBunny_2000hevc.mp4';

const chokidar = require('chokidar');

// Initialize watcher.
const watcher = chokidar.watch(watchPath, {
  persistent: true
});
// Something to use when events are received.
const log = console.log.bind(console);

watcher
  .on('add', path => ConvertFile(path,outputPath));

//ConvertFile(watchPath,outputPath,file);

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