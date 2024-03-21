const jwt = require('jsonwebtoken');

function decodeJWT(token) {
    return jwt.decode(token, { complete: true });
}

const jwtToken = 'YOUR-TOKEN-HERE';
const decodedToken = decodeJWT(jwtToken);
console.log(decodedToken);
