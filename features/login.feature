Feature: Login on the website

    Scenario: Succesfull login
        Given that the user is on the site
        When types the valid credentials
        Then will see the text on screen