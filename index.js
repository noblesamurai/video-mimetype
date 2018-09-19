const mpeg4MimeType = require('mpeg4-mimetype');
const ffmpeg = require('fluent-ffmpeg');
const util = require('util');
const ffprobe = util.promisify(ffmpeg.ffprobe);
ffmpeg.setFfprobePath(require('ffprobe-static').path);

/**
 * @module video-mimetype
 * @async
 * @param {string} filePath
 * @returns {object} object comprising width, height, format (mimetype), ffprobe metadata
 */
module.exports = async (filePath) => {
  const metadata = await ffprobe(filePath);
  const { width, height } = metadata.streams.find(s => s.codec_type === 'video');
  const { tags: { compatible_brands: compatibleBrands } } = metadata.format;
  let format;
  if (compatibleBrands && compatibleBrands.match(/mp4/)) {
    format = await mpeg4MimeType(filePath);
  } else {
    format = 'blerg';
  }
  return { width, height, format, ffprobe: metadata };
};
