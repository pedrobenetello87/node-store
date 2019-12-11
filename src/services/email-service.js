'use strict';

const config = require('../config');
const sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'pedro@mastershop.inf.br',
        subject: subject,
        html: body
    })
}