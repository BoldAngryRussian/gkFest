--liquibase formatted sql

--changeset ps:10-LIQres-watermetter-creation
CREATE TABLE LIQRES.T_WATERMETER
(
    ID  SERIAL PRIMARY KEY,
    SFTOWNHOUSEID   INTEGER NOT NULL,
    HOT DECIMAL,
    COLD DECIMAL,
    SFTMSTINP   TIMESTAMP DEFAULT NOW()
);
--rollback DROP TABLE LIQRES.T_WATERMETER;

--changeset ps:20-LIQres-watermetter-creation
GRANT SELECT,INSERT,DELETE, UPDATE ON TABLE LIQRES.T_WATERMETER TO PUBLIC;
--rollback not required