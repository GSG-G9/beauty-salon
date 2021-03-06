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
- I can see all available reservation times.
- I can reserve a date with a specific day.
- I can cancel a reservation.
- I need to create my profile
- I can sign up into the app
- I can log in to the app


## User Journey :airplane:

As a user, I can see all available  reservation times to able to reserve, inside my profile I have my information and reservation details.


## DATABASE Schema :
![dbimage](https://cdn.discordapp.com/attachments/822914974731993098/824323597014925352/unknown.png)

## Installation Guide :
-   Clone the repository.
-   Navigate to the cloned repo.
##### project setup
-  run npm to install all package dependencies & dev-dependencies in the root folder and client folder
 -  in the root directory create `.env` file in the project root and add 
 
 ```
 DEV_DB_URL=postgres://team2:0000@localhost:5432/beautysalon
TEST_DB_URL=postgres://team2:0000@localhost:5432/beautysalon_test
```
 

- In the client folder Create `.env` and add ` REACT_APP_ACCESS_TOKEN= add_your_access_token` you can get your map access token by check [Mapbox access token](https://docs.mapbox.com/help/getting-started/access-tokens/)



### Database setup 
1. If you have pgcli skip this step.

   - Install PostgreSQL database
   - Alongside with pgcli
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
* create products section for selling cosmetics.
* create cart section.
* create an admin dashboard.


## team

### Team Members :bat:
* Yasmeen Attallah 
* Khamis albashiti
* Adham Haisami
* Iman Sedky

