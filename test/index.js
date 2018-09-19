const expect = require('chai').expect;
const videoMimeType = require('..');
const path = require('path');
const examples = [
  {
    filename: 'SampleVideo.mp4',
    expectation: 'etc'
  },
  {
    filename: 'big-buck-bunny_trailer.webm',
    expectation: 'etc'
  }
];

describe('video-mimetype', function () {
  it('should give a mimetype for mp4 files', function () {
    return Promise.all(examples.map(async (example) => {
      const result = await videoMimeType(path.join(__dirname, 'fixtures', example.filename));
      expect(result).to.be.an('object');
      expect(result).to.have.keys('width', 'height', 'format', 'ffprobe');
      expect(result.format).to.match(/video\/mpeg4/);
    }));
  });
});
