# portfolio
This is a site created to eventually hold the contents of my work, otherwise known as a portfolio.
Inside you'll find a bit about me, as well as a contact form in order to get in touch with me.

## Contents
Section | Description
------------ | -------------
[Access](#access) | Screenshots of the site and information on Horiseon
[About Me](#aboutme) | Information on the about me page
[Contact](#contact) | Information on the contact page
[Portfolio](#portfolio) | Information on the portfolio page
[Consistencies](#consistencies) | Components which are used across the whole site
[Licence](#licence) | Licence for the source code

## Access
You can access the site via [this link](https://kvtemadden.github.io/portfolio/)

And you can access the GitHub Repo via [this link](https://github.com/kvtemadden/portfolio)

## About Me
![Screenshot of the About Me page](Assets/AboutMe_screenshot.PNG)

The content on this page gives a little bit of information about me.

There are also links to my social media accounts, which are accompanied by the logos for the particular sites.

You'll see to the right of the text are two images, which are both formatted with a border and height/width to maintain a square until the page is too small. In the case that it is too small, for visibility, the image reduces in width and gains in height.

## Contact
![Screenshot of the Contact page](Assets/Contact_screenshot.PNG)

The contact page has a form that doesn't currently submit correctly, but after some research I found that the information does actually get sent to the page.

The user will input their name, email and the message they want to send before they click on the bootstrap button "Submit message". At some point I plan to come back to this and set it up correctly, but I'm not entirely sure how to access the server at this point.

## Portfolio
![Screenshot of the Portfolio page](Assets/Portfolio_screenshot.PNG)

This part of the site currently only has placeholder images, but don't penalise me for that!

Once I've got together some decent projects, I plan to come back and update the images to contain good, quality projects that I wouldn't mind someone finding.

I have added a .frame class which adds a frame to the images, similar to those on the about page.

The images are all responsive to the page/device resolution.

## Consistencies
Below are the constant items that are maintained across the site.

### Navigation Bar
The navigation bar is a dark theme, pulled from Bootstrap, and is responsive to device size.

If a user is on a page, the link that links to that page (e.g. if you're on the About page then the About text in the navigation bar) will display in a lighter colour to the other links in the navigation bar.

I also styled the "Kate" text in the top left so that it looked a little bit different to everything else and acted as a kind of logo.

### Sticky footer
As a bonus, I took inspiration from the Bootstrap sticky footer bar but I centred the text instead. This is constantly in display on all devices and there is always a 10px gap between the content on the page and the footer when the user scrolls to the bottom of the page.

### Boostrap grid system
There is a section area which contains all of the main content on the page. This area is created using the Bootstrap grid system in order to allow a simple responsive layout.

This is identified as the content between the `<section>` tags.

All of the content in these areas are displayed on a white background which has a border (the colour of which matches the navigation bar).

## Licence
> This site was created under the standard MIT licence.

![GitHub](https://img.shields.io/github/license/kvtemadden/portfolio?color=%23203333&label=LICENCED%20AS&style=for-the-badge)
