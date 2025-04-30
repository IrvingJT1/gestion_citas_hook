if (typeof globalThis.crypto === 'undefined' || !globalThis.crypto.getRandomValues) {
    const { webcrypto } = require('crypto');
    globalThis.crypto = webcrypto;
  }