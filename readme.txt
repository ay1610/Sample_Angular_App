Application Description:
Angular Customer App SPA using Angular UI Bootstrap features like Tabset, Progressbar, Typeahead, Datepicker and Timepicker consisting of four steps. The web application uses .json files as storage mechanism for 'states' and the 'Next' step is disabled until current step is complete with valid input

Step 1:
Progressbar: 0
Enter requested data.
Click Next button to go to Step 2.

Step 2:
Progressbar: 33%
Location is a Typeahead.
Define a set of destinations of your choice.
Only one of this set is allowable.
Choose dates and times.
Return date may not precede Depart date.
Click Next button to go to Step 3.

Step 3:
Progressbar: 66%
Formatted text with all collected data.
The name is within a mailto link.
The Phone is linked such that on mobile it would prompt to dial the number if tapped.
Click Confirm button to go to Step 4.

Step 4:
Progressbar: 100%

Some Salient features of the App:
A user cannot move ahead to the next step through the application without completing the current section with Valid Data and the 'Next' button is disabled until that time.
Step 1: Form validation with email and Phone Number validation included. Phone Masking included to display the phone number in standard format
Step 2: Location is a typeahead and the values are populated with a service call made to pull in the data from json file.Angular bootstrap datepicker component included for Departure dates and the Return dates. Additional validation in place to ensure that the return date is greater than the departure date and form validation is in place to ensure that all the required fields are populated with valid values to move to the next step.

Installation Instructions:
Pre-requiste: node.js
http://nodejs.org/download/

Unzip the application folder
Open terminal/command prompt and navigate to the folder 'navigationApp'

Run the following command
npm install

To start the application run the command
npm start

Navigate to http://localhost:8000/app/