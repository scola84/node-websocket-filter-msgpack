'use strict';

const msgpack = require('msgpack');

class Filter {
  receive(message) {
    return Promise.resolve(
      message.setBody(
        msgpack.unpack(message.getBody())
      )
    );
  }

  send(message) {
    return Promise.resolve(
      message.setBody(
        msgpack.pack(message.getBody())
      )
    );
  }
}

module.exports = Filter;
