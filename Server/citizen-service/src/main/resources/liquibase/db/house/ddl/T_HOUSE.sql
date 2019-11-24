--liquibase formatted sql

--changeset ps:10-LIQres-HOUSE-creation
CREATE TABLE LIQRES.T_HOUSE
(
    ID  SERIAL PRIMARY KEY,
    SFTMSTINP   TIMESTAMP DEFAULT NOW()
);
--rollback DROP TABLE LIQRES.T_HOUSE;

--changeset ps:20-LIQres-HOUSE-creation
GRANT SELECT,INSERT,DELETE, UPDATE ON TABLE LIQRES.T_HOUSE TO PUBLIC;
--rollback not requiredddl
