const path = require('path');
const chokidar = require('chokidar');
const ffmpegOnProgress = require('ffmpeg-on-progress')
 
const logProgress = (progress, event) => {
  // progress is a floating point number from 0 to 1
  console.log('progress', (progress * 100).toFixed())
}
var FfmpegCommand = require('fluent-ffmpeg');

var watchPath = './input/';
var outputPath = './output/';

// Initialize watcher.
const watcher = chokidar.watch(watchPath, {
  persistent: true
});
// estimated duration of output in milliseconds
const durationEstimate = 4000

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
  .on('progress', ffmpegOnProgress(logProgress, durationEstimate))
  .on('end', function() {
    console.log('Processing finished !');
  })
  .save(outputPath+path.basename(file))
  ;
  
}