# Beauty salon  : 
beauty salon app that facilitates reserving and selling cosmetics


## Live demo :tv: 
[Heroku link , Click here to visit our app](https://beauty-salon-yaki.herokuapp.com/)

[Figma link , check our Figma design](https://www.figma.com/file/4hmZafPVzB3SucO8FeGYaO/Beauty_Salon)



## Main problem :new_moon_with_face: 

Women who are preparing for a special event, have difficulty reserving a specific date


## Solution :bulb:
Build a beauty salon application that helps customers reserve a date from our services (Hair, Nail, Skin Care, Makeup)

## User Stories :open_book:
***As a user :***
* I can see all available reservation time.
* I can reserve a date with specific day.
* I can cancel a reservation.
* I need to create my own profile
* I can sign up into the app 
* I can log in into the app


## User Journey :airplane:

As a user, I can see all available  reservation times to able to reserve, inside my profile I have my information and reservation details.

<!-- ## Prototype :art:
![prototype]() -->

## DATABASE Schema :
![dbimage](https://cdn.discordapp.com/attachments/822914974731993098/824323597014925352/unknown.png)

## Installation Guide :
####  Installation guide :
-   Clone the repository.
-   Navigate to the cloned repo.
##### project setup
-  run npm ito install  all package dependencies & dev-dependencies.
 -  Create 
 ```
 .env
 ```

 file in the project root and add 
 
 ```
 DEV_DB_URL=postgres://team2:0000@localhost:5432/beautysalon
TEST_DB_URL=postgres://team2:0000@localhost:5432/beautysalon_test
```
 

- Create  
```
 .env 
 ```
 in client folder and add 
 -- you can get  your map access token by check [Mapbox access token](https://docs.mapbox.com/help/getting-started/access-tokens/)

```
 REACT_APP_ACCESS_TOKEN= add_your_access_token  
```



### Database setup 
1. If you have pgcli skip this step.

   - Install PostgreSQL database
   - Along side with pgcli
   - [instructions on how to install pgcli](https://www.pgcli.com/install)

2. Open your terminal, run pgcli, navigate through the project to this path: ./server/database/config/build.sql

3. Copy this file path and write in the terminal:

```
    \i <paste your copied path to the file>
```

### Running the project 
1. To run the server, Open your terminal and run:

```
    npm run dev
```


2. To run the React Development server, Open another terminal and run:

```
    npm run client
```

or 

```
    cd client/
    npm start
```
 


3. To run the tests:

```
npm test
```
 

-   Enjoy .



## Technologies :computer:

#### Front-end Technology:

- ReactJS (Hooks).
- Material UI

#### Back-end Technology:

- Node JS
- Express.

#### Database Technology:
 - PostgreSQL.

## Stretch Goals :goal_net:
* create products section for selling cosmetics
* The users can complete the contract and rent the apartment
* user can see the location of the house on the map and compare between two houses
* user can see related houses according to a specific area on the map
* create an admin dashboard
    * admin can view all user's reservations with details. 
     * admin can view, edit, delete all users 
    * admin can view, edit, delete all houses 
* create chat that allows users to contact and negotiate


## team

### Team Members :bat:
* Yasmeen Attallah 
* Khamis albashiti
* Adham Haisami
* Iman Sedky



## Resources :mag:
* https://cloudinary.com/documentation/developer_overview
* https://material-ui.com/
