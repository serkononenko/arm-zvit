const crypto = require('crypto');

const JWT = {
    createHmac: function(data) {
        const hmac = crypto.createHmac(this.digest, this.salt);
        hmac.update(data);
        return hmac.digest('base64');
    },
    createBase64: function(string) {
        return Buffer.from(string).toString('base64');
    },
    salt: 'erondondon',
    digest: 'sha256',
    header: JSON.stringify({alg: 'HS256', typ: 'JWT'})

}

module.exports = JWT;