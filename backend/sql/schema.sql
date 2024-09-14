--
-- All SQL statements must be on a single line and end in a semicolon.
--

-- Dummy table --
-- DROP TABLE IF EXISTS dummy;
-- CREATE TABLE dummy(created TIMESTAMP WITH TIME ZONE);

-- Your database schema goes here --
DROP TABLE IF EXISTS member CASCADE;
CREATE TABLE member(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), user_data jsonb);

DROP TABLE IF EXISTS workspace CASCADE;
CREATE TABLE workspace(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), member_id UUID REFERENCES member(id), workspace_data jsonb);

DROP TABLE IF EXISTS channel CASCADE;
CREATE TABLE channel(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), workspace_id UUID REFERENCES workspace(id), channel_data jsonb);

DROP TABLE IF EXISTS chat CASCADE;
CREATE TABLE chat(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), channel_id UUID REFERENCES channel(id), chat_data jsonb);

DROP TABLE IF EXISTS user_workspace CASCADE;
CREATE TABLE user_workspace(user_id UUID REFERENCES member(id) ON DELETE CASCADE, workspace_id UUID REFERENCES workspace(id) ON DELETE CASCADE, PRIMARY KEY (user_id, workspace_id));
