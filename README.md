# Coders Camp 2022 | Project  | React - TypeScript

&nbsp;

## Application Demo

If you are curious about the results of our work just try our application: [Scrooge App](https://scrooge-f6e34.ondigitalocean.app/).

&nbsp;

## Table of contents

- [Project Team](#project-team)
- [General Info](#general-info)
- [Technologies](#technologies)
- [Development](#development)
- [Setup](#setup)
- [Deployment](#deployment)

&nbsp;

## Project Team

The Project was created as a part of [CodersCamp](https://CodersCamp.pl) initiative by participants of the course, supervised by a mentor.
We encourage you to familiarize yourself with team members' profiles and their portfolio:

**Mentor**: [Michał Ciborowski](https://github.com/Cidebur)

**Participants of Coders Camp course:**

- [Barbara Korytkowska](https://github.com/korytba)
- [Magda Zaniewska-Ciecierska](https://github.com/FrontendMagdalena)
- [Michał Kowalczyk](https://github.com/michakow)
- [Roman Pavlenko](https://github.com/rpavlenko)

&nbsp;

As a part of the project team members have been assigned to additional roles:
&nbsp;

| Name                       | Role in the Project   |
| -------------------------- | --------------------- |
| Magda Zaniewska-Ciecierska | Tech Lead             |
| Barbara Korytkowska        | Manager / Team Leader |
| Michał Kowalczyk           | Product Owner         |
| Michał Ciborowski          | Client                |

&nbsp;

## General info

### About Project

"Scrooge" is a budget Web application developed with the idea to help potential users make the best decisions with their money. Design of Scrooge was designed to be as simple as possible. Easy navigation and balanced layout make our application accesible for wide range of people with different needs. Main features of Scrooge include:

- create/edit/delete incomes and expenses
- categorization (custom categories)
- possibility to add attachment (eg. bills) to the account (not implemented yet)
- setting alarms for budget limits
- creating simple chart based on category

&nbsp;

## Technologies

**Technologies used in Project**:

Frontend: 
- React: Create React App, Router, Hooks
- TypeScript
- Babel
- Styled Components
- Prettier
- Eslint
- LocalStorage
- Jest

Backend:
- Node.js: Express, mongoose, nodemon, cors, jsonwebtoken, bcrypt, nodemailer
- TypeScript
- React: Create React App, Router, Hooks
- Axios
- MongoDB Atlas
- Postman / Advanced REST client (Google Chrome tool)
- Prettier
- Eslint
  
&nbsp;

##Development

🌵 Branches
1. dev is the development branch.
2. main is the production branch.

📁 File Structure

We use monorepo repository that holds frontend and backend in packages folder. 

![](packages/frontend/src/assets/readme/File structure.png)

&nbsp;

## Setup

To run this project locally clone repository:

$ git clone https://github.com/FrontendMagdalena/CodersCamp2021-Project4-ExpensesApp-TypeScript

Install dependencies:

npm install

Split terminal to two windows:

Start local server:

1/ backend:

npm run start:server 

2/ frontend:

npm run start:client

The app is available at http://localhost:3001 and the API at http://localhost:3000/api/

&nbsp;

##Deployment

We have deployed our app using DigitalOcean platform, and it is available at https://scrooge-f6e34.ondigitalocean.app/
