# ./features/signin.feature

Feature: Signin on the website
    As a user
    I want to be able to login

    @success
    Scenario: User success to signin on the website
        Given user browse login page
        And user fill email to login
        And user fill password to login
        When user click login button
        Then user can see bot signin page
