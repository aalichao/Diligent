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

const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

exports.getUsername = async (username) => {
  const query = {
    text: 'SELECT * FROM member WHERE user_data ->> $1 = $2',
    values: ['username', username],
  };
  const {rows} = await pool.query(query);
  return rows.length === 1 ? rows[0] : undefined;
};

exports.getWorkspaces = async (username) => {
  // w.workspace_data->>'name' AS workspace_name
  const query = {
    text: `SELECT *
    FROM member u
    JOIN user_workspace uw ON u.id = uw.user_id
    JOIN workspace w ON uw.workspace_id = w.id
    WHERE u.user_data->>'username' = $1`,
    values: [username],
  };
  const {rows} = await pool.query(query);
  return rows;
}

exports.getChannels = async (id) => {
  const query = {
    text: `SELECT * FROM channel
    WHERE workspace_id = $1`,
    values: [id],
  };
  const {rows} = await pool.query(query);
  return rows;
}

exports.getMessages = async (id) => {
  const query = {
    text: `SELECT * FROM chat
    WHERE channel_id = $1`,
    values: [id],
  };
  const {rows} = await pool.query(query);
  return rows;
}

console.log(`Connected to database '${process.env.POSTGRES_DB}'`);
