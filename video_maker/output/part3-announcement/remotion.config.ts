import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');

// Enable importing audio files with require()
Config.overrideWebpackConfig((currentConfiguration) => {
  // Ensure file-loader handles .wav files
  if (!currentConfiguration.module) {
    currentConfiguration.module = {};
  }
  if (!currentConfiguration.module.rules) {
    currentConfiguration.module.rules = [];
  }
  currentConfiguration.module.rules.push({
    test: /\.wav$/,
    type: 'asset/resource',
    generator: {
      filename: 'static/[hash][ext][query]',
    },
  });
  return currentConfiguration;
});
