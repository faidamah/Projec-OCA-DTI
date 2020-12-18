# ./features/signin.feature

Feature: Failed Signin on the website
    As a user
    I failed to login

    @Failed
    Scenario: User failed to signin on the website
        Given user browse signin page
        And user fill failed email to signin
        And user can fill tha right password
        When user click signin button
        Then user see failed bot signin page
