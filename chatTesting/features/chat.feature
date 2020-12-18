# ./features/chat.feature

Feature: chat
    As a user
    I want to be able to chat with OCA agent
    @success
    Scenario: user success chat on the website
        Given user browse homepage
        And user click kirimpesan button
        When user fill in the message to be sent
        Then user click send button 
        

