--Задание 9:

SELECT COUNT(*), role 
FROM "Users"
GROUP BY role;

--Задание 10:

-- update date for task
UPDATE "Contests"
SET "createdAt"='2024-01-02 16:34:00+00'
WHERE prize=33;
------------------------

UPDATE "Users"
SET balance=((SELECT SUM(prize)*0.1 AS cashback FROM "Contests"
WHERE "createdAt" between '2023/12/25' and '2024/01/14'))
WHERE id=1;

--Задание 11

UPDATE "Users"
SET balance=10
WHERE rating IN (SELECT rating FROM "Users"
WHERE rating > (SELECT AVG(rating) AS average
FROM "Users"
WHERE role='creator')
ORDER BY rating DESC
LIMIT 3);