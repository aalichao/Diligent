SELECT *
FROM member u
JOIN user_workspace uw ON u.id = uw.user_id
JOIN workspace w ON uw.workspace_id = w.id
WHERE u.user_data->>'name' = 'Molly Member';