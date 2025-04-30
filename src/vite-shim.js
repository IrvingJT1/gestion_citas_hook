if (!globalThis.crypto?.getRandomValues) {
    const { webcrypto } = require('crypto');
    globalThis.crypto = webcrypto;
  }