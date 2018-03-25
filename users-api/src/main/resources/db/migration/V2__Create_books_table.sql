create table BOOKS (
    ID serial,
    TITLE varchar(100) NOT NULL,
    AUTHOR varchar(100) NOT NULL,
    DESCRIPTION varchar(200) NOT NULL,
    USER_ID integer NOT NULL
);