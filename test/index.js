const expect = require('chai').expect;
const videoMimeType = require('..');
const path = require('path');
const examples = [
  {
    filename: 'SampleVideo.mp4',
    expectation: 'video/mp4; codecs="avc1.4d401f, mp4a.40.2"'
  },
  {
    filename: 'big-buck-bunny_trailer.webm',
    expectation: 'video/webm; codecs="vp8, vorbis"'
  },
  {
    filename: 'small.ogv',
    expectation: 'video/ogg; codecs="theora, vorbis"'
  }
];

describe('video-mimetype', function () {
  it('should give a mimetype for mp4 files', function () {
    this.timeout(5000);
    return Promise.all(examples.map(async (example) => {
      const result = await videoMimeType(path.join(__dirname, 'fixtures', example.filename));
      expect(result).to.be.an('object');
      expect(result).to.have.keys('width', 'height', 'format', 'ffprobe', 'mime');
      expect(result.mime).to.equal(example.expectation);
      expect(result.width).to.be.an('number');
      expect(result.height).to.be.an('number');
      expect(result.format).to.match(/mp4|ogg|webm/);
    }));
  });
});
