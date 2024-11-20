# Allure Reports for Ping FE unit and integration testing using jest

If using jest -v >24
```
  testRunner: "jest-jasmine2",
  setupFilesAfterEnv: ['patient-ping-remedy/packages/jest-allure-reporter/lib/allure'],
```

Use the global allure report to add detailed information the the report inside tests.
`allure.tms('###', 'https://patientping.testrail.com/index.php?/cases/view/###')`
`allure.description('test description...')`

> TODO: Update this if needed to support Jest Circus.