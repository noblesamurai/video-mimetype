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
  const ffprobeStaticVersion = require('ffprobe-static/package.json').version;
  const metadata = await ffprobe(filePath);
  metadata['ffprobe-static-version'] = ffprobeStaticVersion;
  const { width, height } = metadata.streams.find(s => s.codec_type === 'video');
  const { format_name: formatName } = metadata.format;
  let mime;
  const [formatNameMatch] = formatName.match(/(webm|ogg|mp4)/);
  if (formatNameMatch === 'mp4') {
    mime = await mpeg4MimeType(filePath);
  } else {
    const codecs = metadata.streams.map((s) => s.codec_name).filter(c => c !== 'unknown');
    mime = `video/${formatNameMatch}; codecs="${codecs.join(', ')}"`;
  }
  return { width: parseInt(width), height: parseInt(height), format: formatNameMatch, mime, ffprobe: metadata };
};
