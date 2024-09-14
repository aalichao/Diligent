--
-- All SQL statements must be on a single line and end in a semicolon.
--

-- Dummy Data --
-- INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM member;
INSERT INTO member(id, user_data) VALUES ('90e98f6e-0272-42df-ad47-547d56e4df34', '{"username": "molly@books.com", "password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.iJufk6Nxx6gAoHRG8t2eHyGgoP2bK4y", "role": "member", "name": "Molly Member"}');
INSERT INTO member(id, user_data) VALUES ('de1c9394-3385-476d-8bb1-9c1dd30cd518', '{"username": "anna@books.com", "password": "$2b$10$Y00XOZD/f5gBSpDusPUgU.G1ohpR3oQbbBHK4KzX7dU219Pv/lzze", "role": "admin", "name": "Anna Admin"}');

DELETE FROM workspace;
INSERT INTO workspace(id, workspace_data) VALUES ('40304fac-bf2c-4e88-9028-3d6008689a59', '{"name": "Welcome"}');
INSERT INTO workspace(id, workspace_data) VALUES ('40304fac-bf2c-4e88-9028-3d6008689a60', '{"name": "CSE186", "type": "hello"}');
INSERT INTO workspace(id, workspace_data) VALUES ('40304fac-bf2c-4e88-9028-3d6008689a61', '{"name": "CSE187", "type": "hello"}');
INSERT INTO workspace(id, workspace_data) VALUES ('40304fac-bf2c-4e88-9028-3d6008689a62', '{"name": "Admin", "type": "hello"}');

-- Molly Workspaces
INSERT INTO user_workspace(user_id, workspace_id) VALUES ('90e98f6e-0272-42df-ad47-547d56e4df34', '40304fac-bf2c-4e88-9028-3d6008689a59');
INSERT INTO user_workspace(user_id, workspace_id) VALUES ('90e98f6e-0272-42df-ad47-547d56e4df34', '40304fac-bf2c-4e88-9028-3d6008689a60');
INSERT INTO user_workspace(user_id, workspace_id) VALUES ('90e98f6e-0272-42df-ad47-547d56e4df34', '40304fac-bf2c-4e88-9028-3d6008689a61');
-- Anna Workspaces
INSERT INTO user_workspace(user_id, workspace_id) VALUES ('de1c9394-3385-476d-8bb1-9c1dd30cd518', '40304fac-bf2c-4e88-9028-3d6008689a59');
INSERT INTO user_workspace(user_id, workspace_id) VALUES ('de1c9394-3385-476d-8bb1-9c1dd30cd518', '40304fac-bf2c-4e88-9028-3d6008689a61');
INSERT INTO user_workspace(user_id, workspace_id) VALUES ('de1c9394-3385-476d-8bb1-9c1dd30cd518', '40304fac-bf2c-4e88-9028-3d6008689a62');

INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a57', '40304fac-bf2c-4e88-9028-3d6008689a59', '{"name": "Roles"}');
INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a58', '40304fac-bf2c-4e88-9028-3d6008689a59', '{"name": "Invites"}');
INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a59', '40304fac-bf2c-4e88-9028-3d6008689a59', '{"name": "Events"}');
INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a60', '40304fac-bf2c-4e88-9028-3d6008689a59', '{"name": "Jokes"}');

INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a61', '40304fac-bf2c-4e88-9028-3d6008689a60', '{"name": "Announcements"}');
INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a62', '40304fac-bf2c-4e88-9028-3d6008689a60', '{"name": "General"}');
INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a63', '40304fac-bf2c-4e88-9028-3d6008689a60', '{"name": "Assignments"}');
INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a64', '40304fac-bf2c-4e88-9028-3d6008689a60', '{"name": "ChitChat"}');

INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a65', '40304fac-bf2c-4e88-9028-3d6008689a61', '{"name": "Secret"}');
INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a66', '40304fac-bf2c-4e88-9028-3d6008689a61', '{"name": "Normal"}');
INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a67', '40304fac-bf2c-4e88-9028-3d6008689a61', '{"name": "Restricted"}');
INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a68', '40304fac-bf2c-4e88-9028-3d6008689a61', '{"name": "Abnormal"}');

INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a69', '40304fac-bf2c-4e88-9028-3d6008689a62', '{"name": "Friend Group A"}');
INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a70', '40304fac-bf2c-4e88-9028-3d6008689a62', '{"name": "Friend Group B"}');
INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a71', '40304fac-bf2c-4e88-9028-3d6008689a62', '{"name": "Friend Group C"}');
INSERT INTO channel(id, workspace_id, channel_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a72', '40304fac-bf2c-4e88-9028-3d6008689a62', '{"name": "Not Friends"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a57', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a57', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a57', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a57', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a57', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a58', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a58', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a58', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a58', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a58', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a59', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a59', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a59', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a59', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a59', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a60', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a60', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a60', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a60', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a60', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a61', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a61', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a61', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a61', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a61', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a62', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a62', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a62', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a62', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a62', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a63', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a63', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a63', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a63', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a63', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a64', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a64', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a64', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a64', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a64', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a65', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a65', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a65', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a65', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a65', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a66', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a66', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a66', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a66', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a66', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a67', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a67', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a67', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a67', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a67', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a68', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a68', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a68', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a68', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a68', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a69', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a69', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a69', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a69', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a69', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a70', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a70', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a70', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a70', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a70', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a71', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a71', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a71', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a71', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a71', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');

INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a72', '{"received": "2024-02-27T03:14:03.148Z", "content": "hello! This is my first message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a72', '{"received": "2024-02-27T03:21:03.148Z", "content": "hello! This is my third message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a72', '{"received": "2024-02-27T03:18:03.148Z", "content": "hello! This is my second message!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a72', '{"received": "2024-02-27T03:24:03.148Z", "content": "hello! WOW this really works!", "from": "Anna Admin"}');
INSERT INTO chat(channel_id, chat_data) VALUES ('69304fac-bf2c-4e88-9028-3d6008689a72', '{"received": "2024-02-27T03:27:03.148Z", "content": "Shut up Anna, this is meant for important announcements!", "from": "Molly Member"}');
