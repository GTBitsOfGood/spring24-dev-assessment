# Introduction 
Hello, thank you for showing your interest in Bits of Good! This semester, we are focusing our recruitment on the practical skills of developers through this assessment! We hope you enjoy the task and if you have any questions or if any part is ambiguous, please file a GitHub issue on the repository with whichever task number (i.e. 0,1,2,3, etc.) you are working on!

While this assessment comes in various levels (Setup --> Hard), we do not expect you to be able to complete all of the levels; we just want to see your thought process and how you write and organize code. Additionally, we have provided a sample `create-react-app` boilerplate but feel free to use a different framework or customize this repository to your needs (i.e. install any extra libraries, etc. you need). Our only requirement is that you use React, Typescript, and at most one component library (if you choose to use one).

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

Below, we have provided various levels where you will add functionality progressively to make this VMS. Additionally, we have provided a backend API below to get the data
needed to populate your VMS frontend.

Good luck hacking!

# API
We have provided an API to allow you to retrive data from the VMS backend. 

To retrive data about the list of volunteers you will need to populate your FE with, you can call
```
GET https://64c5c168c853c26efadaed97.mockapi.io/api/bog/Users
```
This endpoint will return a list of volunteers along with relevant information associated with each of them.

To get the information for a specific volunteer, you can call 
```
GET https://64c5c168c853c26efadaed97.mockapi.io/api/bog/Users/:id
```

_Note:_ Technically, there are other operations this API allows, but we request you **DON'T** call these endpoints for now.

# Level 0: Setup
1. Setup the repo with any necessary dependencies needed (recall no more than one component library and it must be TypeScript/React/Next).

# Level 1: Easy
2. Render a basic component for the table on `localhost:3000` using the API provided to display all the information for each volunteer. The table
   should contain enough columns to fulfill the non-profit's request for information displayed.
3. Ensure the table is styled appropriately and has _responsive_ (i.e. mobile-friendly) design using whatever styling primitives your prefer.

# Level 2: Medium
For the purposes of this exercise, our API will not support `POST`, `PUT`, or `DELETE` operations. We would still like to emulate the ability to support these types of
functionality on the frontend of the VMS. Note, this will mean that your FE shouldn't persist changes in the API only in the FE state.

4. Add the ability to add new volunteers to the table on the frontend.
5. Add the ability to update volunteer information on the frontend.
6. Add the ability to delete volunteer information on the frontend.

# Level 3: Hard
7. The non-profit would only like to see at most 10 volunteers at a time on the FE table. Add pagination to the table to support this request.
8. The non-profit has multiple people that will interact with the application and would like to add internationalization to the application to make it user-friendly to people who speak different languages. Add internationalization to this frontend.
9. The non-profit would like to click on a user to retrieve information about notes they have on this volunteer in a separate page. Please add this functionality for them.
10. We would also like to retrive statistics on how often each volunteer's row is clicked and displayed on this page (this does not have to be persisted anywhere). 

# Level 4: Expert 
For the final part of this VMS, we would like to introduce some form of authentication and authorization to the application.
11. Add functionality to ensure only certain clients can log in to the application. We would like you to add OAuth2 support with google emails to the application.
12. Ensure that updating the table can only be done by people who are authorized to do so. For now, we would like this to be a toggle on the table somewhere.
13. Use Webworkers to collect statistics about user interaction with the VMS and display them somewhere.
14. Unit-test and document your application!!!
