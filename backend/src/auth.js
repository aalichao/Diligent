/*
#######################################################################
#
# Copyright (C) 2020-2022 David C. Harrison. All right reserved.
#
# You may not use, distribute, publish, or modify this code without 
# the express written permission of the copyright holder.
#
#######################################################################
*/

const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

const secrets = require('./secrets');

const db = require('./db');

exports.login = async (req, res) => {

  const {email, password} = req.body;
  const data = await db.getUsername(email);

  if (data && bcrypt.compareSync(password, data["user_data"].password)) {
    // console.log("data username: ", data);
    const accessToken = jwt.sign(
      {email: data.user_data.username, role: data["user_data"].role},
      secrets.accessToken, {
        expiresIn: '30m',
        algorithm: 'HS256'
      });
    res.status(200).json({name: data["user_data"].name, accessToken: accessToken});
  } else {
    res.status(401).send('Invalid credentials');
  }
};

exports.check = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  jwt.verify(token, secrets.accessToken, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

