# Welcome to the world of Mini-Insta

## Mini-Insta is basically an interactive website where users can interact with each other in many ways like sharing photos, liking and disliking photos ,uploading photos etc.

### Overview of the technologies used in the project:---

1. Basic layout of pages is made using HTML and designing part has been done with the help of TAILWIND CSS.
2. In this project I have implemented TAILWIND CSS using the CDN link and including it in the header's tag of every HTML page.
3. JavaScript is used to make the website more dynamic like, focussing options for navigation bars.
4. FIREBASE is used extensively for this website right from the authentication to relatime database and storage.
5. PEXELS API is used to (implement the search pictures by tags) functionality. It is done by including jquery initialization in the search.html page.
6. **CSS** is used for :-
    * For making the navigation bars beautiful and attractive.
    * It is also used to make buttons more attractive.
    * To show the photos in grids and structured manner.

## All the pages of website are included in the "All files included here" folder and rest files are containing useful libraries

# System Requirements for running the project :
* A good code editor will help people to understand the code of project easily.
* Full project is solely based on **HTML, Tailwind CSS, JavaScript**, so there is no specific requirement, to run the project, only a browser(preferably Google Chrome) will work fine.

### Brief description of the files of the project:

1. login.html and login.js --- 

    * It is the first page users see when they visit the website. It have log in option for existing users and signup button which when clicked redirects users to the make account page. Where users can make new accounts by providing basic details.

    #### Technology used in it

    * It uses firebase functions to make new account using email and password, and to sign in existing users through email and password.

2. mainpage.html and mainpage.js ---

    * It is the main page as suggested by the name where user lands after successful log in. It is a very diverse page which have many options.

        Options include :

        * In navigation bar user can click on any 5 tabs and user will be redirected to the repective pages to complete the task.
        * There is profile image displayed at this page on which user can click and will be redirected to the profile.html page.
        * Then there are three options one is to check what's my username by clicking on it user will get an pop up window displaying his/her username.
        This functionality basically uses the JavaScript **window.alert function**. In java script file essentially first username of user is read from the firebase realtime database and the displayed through **window.alert**.
        * There is a option for user to provide his or here valuable feedback about the website.
        * There is an option to change username for the user where he/she can type the new username in pop-up window and username will be update simultaneously on profile page also. Using update command of firebase relatime database.
        * Below are the images that are uploade don website. Every image has a like and share button below it, user have to log in their facebook accounts to like and share the pics.

3. contact_us.html and contact_us.js --- 

    * It is basically the page where user can specify his/her problem about the website which will get stored in the relatime database for future reference and can be taken into consideration.
    * It basically takes input from user and then stores it in realtime database using **SET** command.

4. contact_result.html and contact_result.js --- 

    * It is a page where the full problem of the user specified by his/her on the contact us page will be shown for user comfort.
    * It basically uses read operation of realtime database and uses **innerHTML** property of JavaScript to show it in html page.

5. upload.html and upload.js ---

    * This page is specifically designed for the user to upload images of his/her choice on website.
    * It uses the firebase **storage** for accumulation of photos.
    * It first creates reference to the firebase storage location folder where we want to store the photos and then using **USER UID** it stores them at specfied location.
    * By using **.then** function on **task** we can use the **URL** of photos and add it in the database for future use.
    * Now, the url of photos is simultaneously added to the **firebase realtime database**.
    * Finally a pop-up confirms that pictures are uploaded successfully, sometimes pop-up takes some seconds to come.

6. personalpic.html and personalpic.js ---

    * It is basically a personalized photo collection page where the photos uploaded by users are shown.
    * It basically fetches the **URL** of photos from the firebase **realtime database** and shows them on the html using the function of JavaScript **calling theimg tag by it's id and then embedding src with the value obtained from database**.

7. search.html and search.js ---

    * This is a page basically used for searching images based on the tags provided by user.
    * It uses **Pexels API**. First we take input from the user about the tag then we pass it to the pexels API search system using JQuery.
    * The tag is embedded in the search url and passed on to pexels for searching images.

## Limitations of project

1. The **pexels API** is sometimes not accurate in giving images strictly based on the tags it sometimes gives only the bunch of images which are pre defined for **API** so, we can use a more powerful **Image searching API** for the project.  
2. Sometimes it takes time to retrieve images and data from firebase, but after success a pop-up confirms to the user that their action has successfully completed.
