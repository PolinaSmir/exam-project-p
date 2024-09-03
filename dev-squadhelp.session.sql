UPDATE "Users"
SET role='moderator'
WHERE "displayName"='Noname';


ALTER TYPE "enum_Users_role" ADD VALUE 'moderator';


