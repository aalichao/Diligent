const supertest = require('supertest');/*
#######################################################################
#
# Copyright (C) 2020-2024 David C. Harrison. All right reserved.
#
# You may not use, distribute, publish, or modify this code without
# the express written permission of the copyright holder.
#
#######################################################################
*/

const http = require('http');

const db = require('./db');
const app = require('../app');

let server;

beforeAll(() => {
  server = http.createServer(app);
  server.listen();
  request = supertest(server);
  return db.reset();
});

afterAll((done) => {
  server.close(done);
  db.shutdown();
});

test('Post Correct Login Molly', async () => {
  const newAttempt = {
    'email': 'molly@books.com',
    'password': 'mollymember',
  };

  await request.post('/v0/login')
    .send(newAttempt)
    .expect(200);
});

test('Post Correct Login Anna', async () => {
  const newAttempt = {
    'email': 'anna@books.com',
    'password': 'annaadmin',
  };

  await request.post('/v0/login')
    .send(newAttempt)
    .expect(200);
});

test('Post Incorrect Email', async () => {
  const newAttempt = {
    'email': 'incorrectemail@books.com',
    'password': 'nopassword',
  };

  await request.post('/v0/login')
    .send(newAttempt)
    .expect(401);
});

test('Post Incorrect Password', async () => {
  const newAttempt = {
    'email': 'molly@books.com',
    'password': 'incorrectpassword',
  };

  await request.post('/v0/login')
    .send(newAttempt)
    .expect(401);
});

test('Post Incorrect Password', async () => {
  const newAttempt = {
    'email': 'molly@books.com',
    'password': 'incorrectpassword',
  };

  await request.get('/v0/workspace')
    .send(newAttempt)
    .expect(401);
});

test('Post Correct Login with Workspaces', async () => {
  const newAttempt = {
    'email': 'anna@books.com',
    'password': 'annaadmin',
  };

  const response = await request.post('/v0/login')
    .send(newAttempt)
    .expect(200);
  
  const bearerToken = response.body ? response.body.accessToken : '';
  const header = {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
  };

  await request.get('/v0/workspace')
    .set(header)
    .expect(200);
});

test('Post Login without Authentication Header', async () => {
  await request.get(`/v0/workspace`)
    .expect(401);
});

test('Post Correct Login with Channels', async () => {
  const newAttempt = {
    'email': 'anna@books.com',
    'password': 'annaadmin',
  };

  const response = await request.post('/v0/login')
    .send(newAttempt)
    .expect(200);
  
  const bearerToken = response.body ? response.body.accessToken : '';
  const header = {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
  };

  const id = '40304fac-bf2c-4e88-9028-3d6008689a61';

  await request.get(`/v0/workspace/${id}/channel`)
    .set(header)
    .expect(200);
});

test('Post Correct Login with Messages', async () => {
  const newAttempt = {
    'email': 'anna@books.com',
    'password': 'annaadmin',
  };

  const response = await request.post('/v0/login')
    .send(newAttempt)
    .expect(200);
  
  const bearerToken = response.body ? response.body.accessToken : '';
  const header = {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
  };

  const id = '40304fac-bf2c-4e88-9028-3d6008689a61';

  await request.get(`/v0/channel/${id}/message`)
    .set(header)
    .expect(200);
});

test('Post No Authorization Header', async () => {  
  await request.get('/v0/workspace')
    .expect(401);
});

test('Post Incorrect Access Token', async () => {  
  const bearerToken = 'IncorrectAccessToken';
  const header = {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
  };

  await request.get('/v0/workspace')
    .set(header)
    .expect(403);
});