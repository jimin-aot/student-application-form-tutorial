# Adding Components to a Form in formsflow.ai

## Introduction

This tutorial will guide you through the process of adding components to a form within the formsflow.ai environment. It focuses on customization and layout of form elements, starting with a base form provided in a GitHub repository.

**Before You Begin:**
In formsflow.ai, you have a few options to start creating a form:

- **Create Form**: Build a new form from scratch by clicking 'Create Form'.
- **Upload Form**: Start with an existing template by selecting 'Upload Form'.
- **Utilize Sample Forms**: Or you could explore and use the built-in sample forms that come with the demo, such as 'Sample Leave Application Form', to understand the structure and design of forms in formsflow.ai.

![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/02-form-component-layout/images/how-to-start-a-form.png?raw=true)

Choose the method that best suits your familiarity and comfort level with the platform.

For this tutorial, we will use the 'Upload Form' option, starting with a base form.

## Step 1: Downloading the Base Form

1. **Access the GitHub Repository**: Navigate to [this repository](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/02-form-component-layout/form-base.json) to find the base form.
2. **Download the Form**: Look for the `.json` file and download it to your machine.

## Step 2: Uploading the Base Form

1. **Navigate to the Form Upload Section**: In the formsflow.ai dashboard, click on 'Upload Form'.
2. **Upload the Form**: Click 'Upload' and select the downloaded `.json` file.
   ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/02-form-component-layout/images/open-a-file.png?raw=true)
3. **View the Form**: Once uploaded, the form will appear in the list. Select 'View Details' for more options.
   ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/02-form-component-layout/images/form-uploaded-in-the-list.png?raw=true)

## Step 3: Editing the Form

1. **Edit the Form**: Find and click 'Edit Form' in the form details.
2. **Set Metadata**:
   - At the top of the form, you'll find fields to enter a 'Title' and 'Description'.
   - You can either set these for the first time or make changes if they already exist. This metadata helps in identifying and describing your form.
     ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/02-form-component-layout/images/metadata.png?raw=true)
3. **Form vs. Wizard Layouts**:
   - Find the 'Display As' radio buttons with options 'Form' and 'Wizard'.
   - Toggle between these options to observe the changes.
   - In the 'Form' type, notice how the breadcrumb navigation is removed and all panels are displayed on a single page.
   - When switching to 'Wizard', the layout changes to organize the form into multiple steps or panels. This guides the user through a sequential form filling process.
   - This feature is important to understand as we will later convert the form type to modify the page order. This aspect will be revisited in the wizard tutorial.

## Step 4: Configuring the Layout

1. **Navigate to 'Step 1' Page**:
   - Begin editing by going to the 'Step 1' page, accessible via the breadcrumb navigation.
2. **Adding Columns to the Layout**:

   - From the 'Layout' group in the fields menu on the left, select the 'Columns' component.
   - Drag the 'Columns' component towards the 'Step 1' page. As you drag the component, look for a visual indication of where it can be placed:
     - A blue highlight will appear, indicating a valid location where you can drop the component. This is a sign that it's safe to release the component there.
     - If the blue highlight does not appear, it means the component cannot be placed in that area. Adjust your positioning until the blue highlight shows up, signifying a valid drop zone.

3. **Understanding Component Settings**:

   - The Columns component, like many others in formsflow.ai, has several specific settings tabs such as 'Display', 'API', 'Conditional', 'Logic', and 'Layout'.
   - Each component in formsflow.ai offers unique settings, varying across different types of components. These settings enhance customization and functionality.
   - As you progress through this tutorial and explore various components, you will become more familiar with the specific settings each one offers.

4. **Configuring Column Properties**:
   ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/02-form-component-layout/images/columns-component-setting.png?raw=true)

   - The default size for columns is 'md' (medium), which is often suitable due to its responsiveness on different screen sizes.
   - Set up two columns for our layout: one for the step title section and another for the form section, with widths of 4 and 8, respectively.

5. **Adjusting the Label and API Property Name**:

   - Change the label of the component to 'Step 1 Layout'.
   - Notice how the Property Name in the API tab updates to 'step1Layout', adhering to camelCase format based on the label.
   - This Property Name is key for accessing this component from other parts of the form.
   - The role of Property Names in form control and interaction, especially in conditional logic and component data management (like default values and calculated values), will be covered in future tutorials.
   - After making these adjustments, click the save button to apply the changes and view the two-column layout on the page.

6. **Adding a Content Component for the Title**:

   ![](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/02-form-component-layout/images/drop-content-component.png?raw=true)

   - In the left column of the layout, find the 'Content' component within the 'Layout' group, located above the 'Columns' component you used earlier.
   - Drag and drop the 'Content' component into the left column.
   - You will see a different settings panel compared to the Columns component.

7. **Configuring the Content Component**:

   - At the top of the settings panel, an editor will be available. Paste the following text into the editor:

     ```
     Step 1 - Find Catchment School
     * Indicates required question
     ```

   - Highlight the text 'Step 1 - Find Catchment School' and change its style from 'Paragraph' to 'Heading 2' for better emphasis.

8. **Adding a Button to the Right Section**:
   - For the form section on the right, add a button component. Go to the 'Basic' group at the top and select 'Button'.
   - Change the label of the button to 'Find Your Catchment School'.
   - Go to the theme settings and select 'Secondary'. Notice how the preview shows the color change from blue to gray.
   - Custom logic for the button will be added in a later tutorial.
   - Click save to apply the changes.

## Step 5: Finalizing the Form

1. **Save Changes**:
   - After completing your adjustments and additions, finalize your form by clicking the 'Save Form' button, which is located at the top left of the interface.
   - This action will apply all the changes you've made to the form.
