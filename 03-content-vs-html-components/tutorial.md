# Leveraging HTML for Form Customization in formsflow.ai

## Introduction

Enhance your formsflow.ai experience with advanced HTML customization. If you're starting fresh, download the base form [here](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/02-form-component-layout/form-base.json) and review the [previous tutorial](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/02-form-component-layout/tutorial.md) for setup guidance.

## Transitioning to HTML for Enhanced Styling

Advanced styles and features require the HTML component:

1. **Switching Components**: In 'Step 1', remove the existing Content component by clicking the 'X' icon in the control icons. Drag an 'HTML Element' from the 'Layout' group to the same spot.
2. **Adding HTML Content**: Enter your HTML to customize the form:
   ```html
   <h2>Step 1 - Find Catchment School</h2>
   <p style="color: red;">* Indicates required question</p>
   <p>Enter Student's Street Address.</p>
   ```
   Save your changes once done.

## HTML Capabilities Overview

In the 'Introduction' page, the HTML element is utilized for rich content. For code examples, see [this GitHub file](https://github.com/jimin-aot/student-application-form-tutorial/blob/main/00-final-version/html-element-data/student-application-introduction.html).

HTML enables you to:

- Colorize text: `<p style="color: blue;">Blue text</p>`
- Apply custom fonts: `<p style="font-family: 'Arial', sans-serif;">Arial font</p>`
- Align text: `<p style="text-align: center;">Centered text</p>`
- Insert images: `<img src="URL" alt="Description">`
- Embed videos: `<video src="URL" controls></video>`
- Create hyperlinks: `<a href="https://www.example.com">Visit Example.com</a>`
- Make lists with custom bullets: `<ul style="list-style-type: square;"><li>Bullet point</li></ul>`
- Construct tables: `<table><tr><td>Cell content</td></tr></table>`
- Adjust spacing: `<p style="margin: 10px;">Spaced text</p>`
- Add borders and shadow effects: `<div style="border: 1px solid #000; box-shadow: 2px 2px 5px #888;"></div>`

Harness these HTML features to elevate the form's functionality and aesthetic appeal.
