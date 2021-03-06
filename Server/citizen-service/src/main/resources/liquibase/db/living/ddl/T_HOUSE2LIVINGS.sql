--liquibase formatted sql

--changeset ps:10-LIQres-HOUSE2LIVINGS-creation
CREATE TABLE LIQRES.T_HOUSE2LIVINGS
(
    HOUSE REFERENCES T_HOUSE(ID),
    CITIZEN REFERENCES T_CITIZENS(ID),
    SFTMSTINP   TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (HOUSE,CITIZEN)
);
--rollback DROP TABLE LIQRES.T_HOUSE2LIVINGS;

--changeset ps:20-LIQres-HOUSE2LIVINGS-creation
GRANT SELECT,INSERT,DELETE, UPDATE ON TABLE LIQRES.T_HOUSE2LIVINGS TO PUBLIC;
--rollback not required