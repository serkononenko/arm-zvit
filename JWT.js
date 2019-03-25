const crypto = require('crypto');

const JWT = {
    createHmac: function(data) {
        const secret = crypto.randomBytes(256).toString('hex');
        const hmac = crypto.createHmac(this.digest, secret);
        hmac.update(data);
        return hmac.digest('base64');
    },
    createBase64: function(string) {
        return Buffer.from(string).toString('base64');
    },
    generate: function(payload) {
        const that = this;
        const base64Header = that.createBase64(that.header);
        const base64Payload = that.createBase64(JSON.stringify(payload));
        const signature = that.createHmac(base64Header+'.'+base64Payload);
        return base64Header+'.'+base64Payload+'.'+signature;
    },
    salt: 'erondondon',
    digest: 'sha256',
    header: JSON.stringify({alg: 'HS256', typ: 'JWT'})

}

module.exports = JWT;