Plugin designed to capture leads prior to letting users talk with team on WhatsApp, thus letting you create a database of people that are interested on your bussiness regardless of what were discussed on the Whatsapp conversation.

------------

# Usage


Just insert the JS and CSS file on your website at any point and it should work. You can change the the following options on the beggining of the JS file to better suit your needs:

- alignment - set whetter the WhatsApp button is shown on the left ou right side of the screen;
- phone - set the WhatApp account that should received the contact;
- msg - set initial message to send. Is important to note that the final user may not use this message, this only prefill the message field on WhatApp;
- email - set destination mail to capture the client data;
- balloon - define the message shown on the call-to-action balloon
- backend - set the location of the destination of the form action

It's not advised to change any further the JS file.

------------

In order for the message to work you'll also need to to put the 'email.php' file on your server or create your own mail sending code to catch the form sent by the user e route him to your WhatsApp.