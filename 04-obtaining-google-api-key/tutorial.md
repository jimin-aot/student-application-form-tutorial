# Obtaining a Google API Key for Address Autocomplete

## Introduction

Enhance formsflow.ai with Google's address autocomplete. This tutorial shows you how to get the necessary API key.

## Getting Started

- Have a Google account ready.
- Visit [Google Cloud Console](https://console.cloud.google.com/).

## Activating Google APIs

1. **Initial Setup**:

   - Click 'Start Free' to sign up for a new account.
   - Follow the prompts to set up billing, which is required to use Google APIs.
     
   ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/04-obtaining-google-api-key/images/billing-set-up-1.png?raw=true)

   - Initially, 'My First Project' will be created for you.
     
   ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/04-obtaining-google-api-key/images/check-project-name.png?raw=true)

3. **Enable the Places API**:

   - In the Google Cloud Console, use the hamburger menu to access 'APIs & Services'.
   - Click on 'ENABLE APIS AND SERVICES'.
     
   ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/04-obtaining-google-api-key/images/enable-api.png?raw=true)

   - Search for 'Places API' and enable it for your project.
     
   ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/04-obtaining-google-api-key/images/search-api.png?raw=true)

5. **Obtain Your API Key**:

   - A prompt will display your new API key, or find it under 'Credentials'.
   - Click 'SHOW KEY' for the Maps API Key and copy it.
     
   ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/04-obtaining-google-api-key/images/copy-api-key.png?raw=true)

## Using the API Key

- Add the API key to formsflow.ai's address field settings for autocomplete.
- Further integration details will follow in another tutorial.

## Note

After completing this tutorial, if you decide not to use the Google API or formsflow.ai, remember to disable billing and delete the API key to avoid any charges. Regular maintenance of your cloud resources is a good practice to ensure you're not paying for services you no longer need.

## API Key Management

- Delete unused API keys for security:
  - Go to 'APIs & Services' > 'Credentials'.
  - Locate 'Maps API Key', click the three dots for actions, and choose 'Delete key'.
  
  ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/04-obtaining-google-api-key/images/delete-api-key.png?raw=true)

## Billing Management

1. **Access Billing Details**:

   - To manage your billing details or to disable billing, locate the billing icon at the top right of the Google Cloud Console page, next to your profile picture.
   - Click on the three dots to open the menu.
   - Select 'Billing account management' to review your billing information and manage your account settings.
   
   ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/04-obtaining-google-api-key/images/billing-menu.png?raw=true)
  
2. **Stop Billing**:
   - Find 'My First Project' under 'Projects linked to this billing account'.
   - Use the actions menu to disable billing.
   
   ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/04-obtaining-google-api-key/images/disable-billing.png?raw=true)

## Conclusion

You now have a Google API key with knowledge on its application and billing management to prevent unnecessary charges.
