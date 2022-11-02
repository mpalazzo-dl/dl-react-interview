Instructions:
Create a User Listing & Management Screen.
Feel free to utlize and library you want, and you are open to Google anything you need. We will be using this API. Here is the documentation: https://reqres.in/

1.API Call & retrieve data:
AC1: Get Page 1 of users and display a list of users by their First Name and Last Name.

2.Style User Listing
AC1: Display the users in a 3 column grid
AC2: For each user, display their Avatar image with their First Name and Last Name below.
AC3: Center align user image and name.

3.Sort data:
AC1: Sort the users in ascending order by Last Name.

4.Create a Load More feature:
AC1: Display a Load More button at the bottom of the User Listing.
AC2: When the user clicks on this button, it should append users from Page 2 to the the User Listing.
AC3: Users should again be sorted in ascending order by Last Name.

5.Create a Loading State for Load More:
AC1: Change your APIs to https://reqres.in/api/users?page=1&delay=1 for Page 1, and https://reqres.in/api/users?page=2&delay=1 for Page 2 to simulate a loading delay.
AC2: Whenever a call to the API is made, as the data is loading display a loading gif.
AC3: Once data is retrieved, display the listing and hide the loading gif, Gif can be found in /public folder.
AC4: Load More button should no longer display after new users are displayed.

6.Create a Remove User feature:
AC1: For each user, display a button labeled 'Remove User'.
AC2: When clicking this button, that user should be removed from the User Listing.

7.Create a Form to Add a New User:
AC1: At the bottom of the User Listing, add a form with the following fields: Name, Job
AC2: The form should submit the data to https://reqres.in/api/users, and console log the response. See https://reqres.in/ for Post Create info.
AC3: Once user is submitted, hide form and show success message.
