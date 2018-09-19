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
  const { tags: { compatible_brands: compatibleBrands } = {}, format_name: formatName } = metadata.format;
  let format;
  console.log({format: metadata.format}, { formatName });
  console.log({compatibleBrands});
  const [formatNameMatch] = formatName.match(/(webm|ogg|mp4)/)
  if (formatNameMatch === 'mp4') {
    format = await mpeg4MimeType(filePath);
  } else {
    const codecs = metadata.streams.map((s) => s.codec_name).filter(c => c !== 'unknown');
    format = `video/${formatNameMatch}; codecs="${codecs.join(', ')}"`;
  }
  return { width: parseInt(width), height: parseInt(height), format, ffprobe: metadata };
};
