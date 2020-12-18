# ./features/chat.feature

Feature: chatfailed
    As a user
    I can't send messages
    @notsuccess
    Scenario: user failed chat on the website
        Given user browse homepage failed
        And user click kirimpesan button failed
        When user fill in the message to be sent failed
        Then user click send button failed
        