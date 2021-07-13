# Video-mimetype [![Build Status](https://secure.travis-ci.org/noblesamurai/video-mimetype.png?branch=master)](http://travis-ci.org/noblesamurai/video-mimetype) [![NPM version](https://badge-me.herokuapp.com/api/npm/video-mimetype.png)](http://badges.enytc.com/for/npm/video-mimetype)

> Get a mimetype from a video for use with MediaSource API.

## Purpose

Detects mimetype of given video and output a mimetype compatible with MediaSource API.

## Prerequisites

```
$ pip install pre-commit
```

## Installation

```
$ pre-commit install --install-hooks
```

## Usage

```js
const videoMimeType = require('video-mimetype');
function main () {
  const result = await videoMimeType(__dirname + '/video.mp4');
  console.log(result);
}
```
Prints:
```
{
  height: 100,
  width: 100,
  format: 'mp4',
  mime: 'video/mp4; codecs="avc1.4d401f, mp4a.40.2"',
  ffprobe: /* json output from ffprobe */
}
```

## API


<a name="module_video-mimetype"></a>

## video-mimetype ⇒ <code>object</code>
**Returns**: <code>object</code> - object comprising width, height, format (mimetype), ffprobe metadata

| Param | Type |
| --- | --- |
| filePath | <code>string</code> |

Note: To regenerate this section from the jsdoc run `npm run docs` and paste
the output above.

## Installation

This module is installed via npm:

``` bash
$ npm install video-mimetype
```
## License

The BSD License

Copyright (c) 2018, Tim Allen

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the Tim Allen nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

