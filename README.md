# R2 Keycloak Template
Intended to extend [Keycloak](https://www.keycloak.org/) Theme repository. This project ships a Keycloak Template that provide **Configuration Section** compatibility with [Keycloak extension](https://github.com/raitonbl/keycloak)

## Building

Ensure you have JDK 8 (or newer), Maven 3.5.4 (or newer) and Git installed

    java -version
    mvn -version
    git --version

How to build:

    mvn clean package

## Deployment    

In order to deploy the implementation , Keycloak must be stopped, and the generated jar should be deployed  on **KEYCLOAK_HOME/standalone/deployments/**.

Start **Keycloak** , [More details](https://www.keycloak.org/documentation.html)

