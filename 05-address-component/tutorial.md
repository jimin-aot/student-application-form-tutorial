# Tutorial 05: Configuring Address Component with Google Maps Autocomplete in formsflow.ai

## Introduction

This tutorial will guide you through adding an address component to your form, enabling Google Maps autocomplete functionality for easier catchment school location.

## Adding the Address Component

1. **Insert the Address Component**:

   - From the 'Advanced' group, select the 'Address' component.
   - Drag and drop it above the 'Find Your Catchment School' button we previously created.
     
     ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/05-address-component/images/drop-address-component.png?raw=true)

2. **Configure the Address Component**:

   - The settings for the Address component will open.
   - Change the label to 'Catchment School Address'.
   - Set the placeholder to: "Enter student's home address to find your catchment school".

3. **Set Up Google Maps Provider**:

   - Under 'Provider', select 'Google Maps'.
   - In the 'API Key' field, enter the API Key you obtained from the [previous tutorial](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/04-obtaining-google-api-key/tutorial.md).

4. **Restrict Search to Canada**:

   - In the 'Provider Options' input, enter the following JSON to restrict the search to Canada:

     ```json
     {
       "componentRestrictions": {
         "country": "CA"
       }
     }
     ```
     
     ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/05-address-component/images/google-autocomplete-setting.png?raw=true)

5. **Require Address Field**:

   - Go to the 'Validation' tab and check 'Required' to make this a required field.

     ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/05-address-component/images/validation-required.png?raw=true)

## Testing the Address Autocomplete

- Save the form and proceed to test the Google Maps autocomplete feature in the address field.

## Publishing the Form

1. **Navigate Through Form Setup**:

   - Above the form, find the "Form Setup Progress Bar" with the steps: 'Design Form', 'Associate this form with a workflow?', and 'Preview and Confirm'.
  
     ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/05-address-component/images/save-form.png?raw=true)
     
   - Click 'Next' twice to bypass 'Associate this form with a workflow?' (which we will cover in a later tutorial).
     
     ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/05-address-component/images/next-1.png?raw=true)

     ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/05-address-component/images/next-2.png?raw=true)

2. **Publish the Form**:

   - In the 'Overview', toggle 'Publish this form for Client Users' to true.
   - Click 'Save'.

3. **Confirm Publication**:
   - The form status should now display as 'Published' in your forms list.
  
     ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/05-address-component/images/publish-for-clients.png?raw=true)

## Submitting a New Entry

1. **Start a New Form Submission**:

   - Click the three dots next to 'View Details' and select 'Submit New' to initiate a new from entry.
  
     ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/05-address-component/images/submit-new.png?raw=true)

2. **Navigate to the Address Component**:

   - Preview the form and proceed to the 'Step 1' page where the address component is located.

3. **Testing the Autocomplete Feature**:

   - In the 'Catchment School Address' field, start typing an address within Vancouver to search for catchment schools in that area.
   - If you're unfamiliar with Vancouver addresses, use "453 W 12th Ave, Vancouver, BC V5Y 1V4" as an example. This address is for Vancouver City Hall, a well-known location.
   - As you type, observe how Google Maps autocomplete suggests addresses. Select the address from the autocomplete suggestions to complete the field.
  
   ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/05-address-component/images/text-address-autocomplete.png?raw=true)

Congratulations! You've now experienced the Google Maps autocomplete feature in action, using a specific example within Vancouver, confirming its functionality for end-users.
