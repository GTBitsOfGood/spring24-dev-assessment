# Introduction 
Hello, thank you for showing your interest in Bits of Good! This semester, we are focusing our recruitment on the practical skills of developers through this assessment! We hope you enjoy the task and if you have any questions or if any part is ambiguous, please send us an email at gt.engineering@hack4impact.org or file an issue on GitHub.

While this assessment comes in various levels (Setup --> Expert), we do not expect you to be able to complete all of the levels; we just want to see your thought process and how you write and organize code. Additionally, we have provided a sample `create-react-app` boilerplate along with an express server but feel free to use a different framework or customize this repository to your needs (i.e. install any extra libraries, etc. you need). Our only requirement is that you use React, Typescript, and at most one component library (if you choose to use one).

Because this assessment is very open ended, there are many ways to do the tasks so for most of the tasks, there is no right or wrong way to do things.

To submit your project, please commit your code to Github (preferred) or another version control platform and share a link to your repository in our application.

Once again, we would like to emphasize this take home assessment is designed to be challenging and we do not expect you to be able to do the entire thing (but of course, try your best to complete as much as possible!)

# Story
_HaHa Heroes_, a local non-profit in the greater Atlanta area (note: this is a fictional non-profit), has volunteers assigned to different sub-projects they manage. These projects
are called _Hero Projects_. The non-profit has recently seen an uptick in the number of volunteers they manage and would like to a volunteer management system (VMS) to keep track of what projects volunteers are working on. _HaHa Heroes_ needs your help to build this system!

Specifically, they would like a page where they could see a table of volunteers where each row of the table contains the following information:

1. `Name`: _the name of the volunteer_
2. `Profile Picture`: _an image of the volunteer_
3. `Phone`: _the phone number of the volunteer_
4. `Email`: _the email address of the volunteer_
5. `Rating`: _the rating of the volunteer_ (from 1 - 9)
6. `Status`: _whether the volunteer is active or not_
7. `Hero Project`: _the name of the project the volunteer is assigned to_

Below, we have provided various levels where you will add functionality progressively to make this volunteer management system. Additionally, we have provided a backend API below to get the data
needed to populate your frontend.

Good luck hacking!

# API
We have provided a sample express API to allow you to retrive data from the backend. 

To retrive data about the list of volunteers you will need to populate your frontend with, you can call
```
GET http://localhost:5000/api/bog/Users
```
This endpoint will return a list of volunteers along with relevant information associated with each of them.

To get the information for a specific volunteer via their id, you can call 
```
GET http://localhost:5000/api/bog/Users/:id
```

_Note:_ Technically, there are other operations this API allows, but we request you **DON'T** call these endpoints for now.

# Level 0: Setup
* Setup the repo with any necessary dependencies needed (recall no more than one component library and it must be TypeScript/React/Next).

# Level 1: Easy
* Render a basic component for the table on `localhost:3000` using the API provided to display all the information for each volunteer. The table
   should contain enough columns to fulfill the non-profit's request for information displayed.
* Ensure the table is styled appropriately and has _responsive_ (i.e. mobile-friendly) design using whatever styling primitives your prefer.

# Level 2: Medium
For the purposes of this exercise, our API will not support `POST`, `PUT`, or `DELETE` operations. We would still like to emulate the ability to support these types of
functionality on the frontend of the volunteer management system. Note, this will mean that your frontend is not required to persist changes in the API; it only needs to update the frontend state.

* Add the ability to add new volunteers to the table on the frontend (add a user client-side).
*  Add the ability to update volunteer information on the frontend (update a user client-side).
* Add the ability to delete volunteer information on the frontend (delete a user client-side).
* Bonus: Modify the API to support POST, PUT, and DELETE operations
* Bonus: Modify your frontend application to integrate these additional endpoints (convert all the client-side operations to occur server-side)

# Level 3: Hard
* The non-profit would only like to see at most 10 volunteers at a time on the frontend table. Add pagination to the table to support this request (client-side pagination).
*  The non-profit has multiple people that will interact with the application and would like to add internationalization to the application to make it user-friendly to people who speak different languages. Add internationalization to this frontend.
* The non-profit would like to click on a user to retrieve information about notes they have on this volunteer in a separate page. Please add this functionality for them.
* We would also like to retrive statistics on how often each volunteer's row is clicked and displayed on this page (this does not have to be persisted anywhere). 

# Level 4: Expert 
For the final part of this volunteer management system, we would like to introduce some form of authentication and authorization to the application.
* Implement OAuth2 support with Google emails for selective client access. 
* Authorize specific personnel to update (add, delete, update) the table with a user-friendly toggle.
* Use Webworkers to gather user interaction statistics and display them. Hint: Think about which statistics would require Webworkers and which wouldn't.
* Thoroughly unit-test and document the application for reliability and ease of use.
