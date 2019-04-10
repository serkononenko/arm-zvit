const crypto = require('crypto');
const fs = require('fs');

const JWT = {
    generateSecret: function() {
        const secret = crypto.randomBytes(256).toString('hex');
        fs.writeFileSync('./utils/secret.key', secret);
        return secret;
    },

    secret: function() {
        if (fs.existsSync('./utils/secret.key')) {
            const secret = fs.readFileSync('./utils/secret.key');
            return secret;
        } else {
            return this.generateSecret();
        }
    },

    createHmac: function(data) {
        const hmac = crypto.createHmac(this.digest, this.secret());
        hmac.update(data);
        return hmac.digest('base64');
    },

    createBase64: function(string) {
        return Buffer.from(string).toString('base64');
    },

    sign: function(payload) {
        const that = this;
        const base64Header = that.createBase64(that.header);
        const base64Payload = that.createBase64(JSON.stringify(
            Object.assign({}, {
                iat: Date.now(),
                exp: Date.now()+1000*60*5
            }, payload)
        ));
        const signature = that.createHmac(base64Header+'.'+base64Payload);
        return base64Header+'.'+base64Payload+'.'+signature;
    },

    verify: function(token) {
        const [headerB64, payloadB64, signatureB64] = token.split('.');
        const signature = this.createHmac(headerB64+'.'+payloadB64);
        if (signature == signatureB64) {
            return true;
        }
        return false;
    },
    
    salt: 'erondondon',
    digest: 'sha256',
    header: JSON.stringify({alg: 'HS256', typ: 'JWT'})
};

module.exports = JWT;