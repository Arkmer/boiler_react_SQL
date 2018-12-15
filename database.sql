-- Instructions:
-- 1. Copy/paste the content of the .sql file into PostreSQL
-- 2. Run the start table command
-- 3. Run the insert statements commands, both "BEGIN;" and the command below it in that order
-- 4. Check the table to see if everything worked properly
-- 5. If it worked, highlight "COMMIT;" and run the command, otherwise highlight "ROLLBACK;" and fix any errors
-- 6. Go back to the Read Me instructions

------------------------
--Table create scripts--
------------------------

-- Start Table --
CREATE TABLE initial (
    id serial primary key,
    test_val varchar(80),
);

-- Insert Statements --
BEGIN;
INSERT INTO initial (id,test_val) VALUES (1,'Database: Success');
--ROLLBACK;
--COMMIT;