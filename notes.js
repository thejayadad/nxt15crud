/**
today we'll create a visual indicator that allows a user to see events tracked on a particular date. 

the focus in this video is having the ability to select any month within the calendar year. 

if an event is logged for the date, we indicate it with a green background 

the calendar grid serves as a quick reference to see the frequency of events tracked. 

for the project were using react nextjs specifically, tailwindcss for styling, javascript for interactivity and usestate to manage the state of date selections. 

we'll start wtih a nextjs project which will represnt the home page.

for demontration purposes, we have an array of objects named events that represnt events logged 

by date, including a name, and minutes. 

this inforation can be adjusted based on your project.

the main thing needed is the date indicating when an event took place. 

for demonstration we have an array of objects that represent an event however events can easily be retrieved from a database if you included in a fullstack project

now create a component to display days in the selected month. 

Im going to name mine calendar.js

ill add a const name calendar, that returns a div with calendar inclosed 

include export default so it can be used throughout the project

import the file into the page.js where the calendar should be displayed 

bring in the component underneath the h1 , if we save the file and view the page 

we see the title and calader being displayed. 

well start by gaining access to useState whcih is a react frontend hook. 

now lets build some of the functionality

first we'll create two state variables the first named selectedMonth, the other selectedYear.

the selectedMonth will use the date object from javascript to get the current date and time

the getMonth method returns the month of the date as a zero-indexed value (0 for January, 1 for February, ..., 11 for December).

the getFullYear() method eturns the four-digit year (e.g., 2024).

next lets create two one name handleMonthChange and handleYearChange

these functions will be trigged when the user selects a different month from the dropdown.

the e.target.value gets the value of the selected option, which is a string. 

We convert it to a number using Number() - method

setSelectedMonth updates the state with the newly selected month.

the handleYearChange provides the same functionality for the year 

to implement the function & state variables, the first select html tag will ahve a value of selectedMonth

which represent the current month 

we give it a onChange handler which we'll pass the handleChangeMonth function we created. 

now e need a way to hold the months, so well use array.from to an array with 12 empty slots

The first argument { length: 12 } specifies that the array should have a length of 12

The second argument is a mapping function that takes two parameters: the first is unused (represented by _), 

the second is index, which represents the current index of the array (0 to 11

inside the select we need options 

For each index in the array (0 through 11), an <option> element is created

include a key which is the index

the value provided is the index for each month. 

january being 0, feburary 1, march 2, etc

Inside the <option>, we use new Date(0, index).toLocaleString('default', { month: 'long' }) to get the full name of the month:

new Date(0, index) creates a new date object, with the year set to 1970 (epoch time), and the month set to index.

.toLocaleString('default', { month: 'long' }) converts this date object to a string representing the full month name in the user's locale (e.g., "January", "February")

Now lets test out the month drop down

It appears to be working but well find out very soon

now lets update the year. 

The year select element will work just as the month so well pass in selectedYear as the value 

ahnd handleChangeYear in in the onChange handler

Arrary.from will generate an empey array, set the lenght of it to 10 

For each index, we generate an <option> element.


The value for each <option> is set to 2024 + index, which will generate the years from 2024 to 2033.

The inner text of the <option> is also 2024 + index, displaying the corresponding year in the dropdown.

lets test it out. 

great it appears to be working 

With the ability to select a month within a specific year in place,

lets focus on displaying the days in said month and if a event is created in a grid layout

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

We'll start with  two variables, one name daysInMonth and set it equal to the javascript Date object

we can pass multiple paramters in the ojbect, the first being selectedYear, selectedMonth

add one to the selected month because arrays are 0 index and the month should begin with 1

then call the .getDate()

the second variable named days whcih is eaqual to Array.from whcih we know creates an empty array 

the legnth will be daysInMonth be sure to add one to the index

Now we are ready to render the dates on screen. 

create a div with a clasNamme of grid and give it 7 columns representing the days in a week

start by mapping over the days array and for each day, render a block for each day

          const currentDate = new Date(selectedYear, selectedMonth, day - 1);

create a const anem vurrentDate that captures the current date

now we want to capture each event from the events array array

and use the .find method which will search through the events array to find an event that matches the currentDate

Within the callback function, an eventDate is created from the event's date string:

the return statement does a comparison to check whether the day, month, and year of the currentDate match the eventDate.

This normalization ensures that the time component doesn't affect the comparison.

Now we want a way to distingush the date and event was logged. 

create a const name color 

If an event was found for the current day (event is truthy), the background color is set to bg-green-500. Otherwise, it defaults to bg-gray-200.


Finally lets rnder each day block, so give the div a key of day, the classname needs temeral literals to pass the variable color

in the div lets pass a span with day inclosed in brackets. 

last but no least, pass events as a argument in the calendar component 

then in the componet in the page.js, pass events and set it equal to events. 

save the file and view the browser you see the events logged in the day block








 */