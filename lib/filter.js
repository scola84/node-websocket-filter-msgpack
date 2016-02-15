'use strict';

const msgpack = require('msgpack');

class Filter {
  decode(message) {
    return Promise.resolve(
      message.setBody(
        msgpack.unpack(message.getBody())
      )
    );
  }

  encode(message) {
    return Promise.resolve(
      message.setBody(
        msgpack.pack(message.getBody())
      )
    );
  }
}

module.exports = Filter;
