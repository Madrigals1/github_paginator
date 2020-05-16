'use strict';

const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { before, after, describe, it } = exports.lab = Lab.script();
const { HapiServer } = require('../src/server');

describe('Json: Testing incorrect input', () => {
    let server;

    before(async () => {
        server = new HapiServer('Testing', 3001, false);
        await server.init();
    });

    it('Sending without data should throw 400', async () => {
        const route = await server.inject({
            method: 'get',
            url: '/json'
        });
        expect(route.statusCode).to.equal(400);
    });

    after(async () => {
        await server.stop();
    });
});