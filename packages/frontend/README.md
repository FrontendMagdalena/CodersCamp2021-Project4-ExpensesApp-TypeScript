# Coders Camp 2021 | Project 2 | React - Single Page Application

&nbsp;

## Application Demo

If you are curious about the results of our work just try our application :arrow_right: [Scrooge App](https://expenses-app-frontend-63b9u.ondigitalocean.app/).

&nbsp;

## Table of contents

- [Project Team](#project-team)
- [General Info](#general-info)
- [Application](#application)
- [Technologies](#technologies)
- [Setup](#setup)
- [Deployment](#deployment)
- [Status](#status)

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
- [Zuzanna Wypych](https://github.com/zwypych)

&nbsp;

As a part of the project team members have been assigned to additional roles:
&nbsp;

| Name                       | Role in the Project   |
| -------------------------- | --------------------- |
| Magda Zaniewska-Ciecierska | Product Owner         |
| Michał Kowalczyk           | Manager / Team Leader |
| Roman Pavlenko             | Tech Lead             |
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

### Design

Scrooge Application logo: &nbsp;

![](src/assets/readme/Logo.png 'Scrooge logo')

Mockups were prepared in Figma based on Mobile First Design approach.
You can check it on [Figma](https://www.figma.com/file/Nymel3JtzFgVOIX0gdHmr3/Scrooge-App?node-id=12%3A358)

&nbsp;
&nbsp;

## Application

### Homepage

Main purpose of the Homepage is to allow users to choose whether user would like to register as a new user or login when account is already created.

![](src/assets/readme/homepage.png 'Homepage')

### Registration / Login Page

Registration and Login pages handle user account flow.
Additionally, Login page allows user to send request to restore their account with "Forget password".

![](src/assets/readme/login.png 'Login Page')
![](src/assets/readme/registration.png 'Register Page')

### Forget Password Page

With this form user can send request for account recovery based on the email you used for registration.

![](src/assets/readme/forget-password.png 'Forget Password Page')

### Main Page

Main page is full of features. Table at the top shows your current budget, then you have the possibility to add new income/expense using "+" button. Separate section show the list of user's inputs and few options of filtering user data (by name, date range or category). Categories can be scrolled from left to right.
At the bottom there are user records (incomes or expenses). Regarding limited space there is possibility to load more records by selecting "Pokaż więcej". Each record can be edited or removed.

Navigation is simplified and icon-based which increase accessability. It is available only after login/registration of the user. For mobile version navigation bar changes into hamburger menu.

![](src/assets/readme/main.png 'Main page')
![](src/assets/readme/navigation.png 'Main page - navigation')

&nbsp;

Navigation on Web App:

![](src/assets/readme/navigation-desktop.png 'Main page - desktop navigation')

&nbsp;

These pages show alerts that appear when budget is over the limit (Please check [Setting Limit Page](#setting-limit-page)). At first, user receives notification pop-up informing them their budget is over the limit for particular category. It can be dismissed via approval button (first screen). After approving this form, all alerts are visible on click for special button visible below actual budget table (second screen).

&nbsp;
![](src/assets/readme/main-alert1.png 'Main page - limit alert popup')
![](src/assets/readme/main-alert2.png 'Main page - limit alert icon')

### New / Edit Position Page

On this views user can fill/change all details for input.

- date
- income or expense
- category (from this view user can create as well new category)
- value of user's amount
- add attachment (eg. bill)

![](src/assets/readme/newposition.png 'New position page')
![](src/assets/readme/edit.png 'Edit position page')

### Details Page

User is directed to this page from Main page by clicking on each input. Here there are options to edit or delete input as well.

![](src/assets/readme/details.png 'Details page')

### Setting Limit Page

This page gives possibility to set an alarm when amount for category is over budget.

![](src/assets/readme/limit.png 'Limit page')

### Chart Page

Here simply Pie chart shows visually budget status of the user. Data could be filtered by date and show compilation of categories created by the user (not implemented yet).

![](src/assets/readme/chart.png 'Chart page')

### 404 Error Page

When page cannot be found in our App user will see below view:

![](src/assets/readme/404.png '404 Error page')

## Technologies

**Technologies used in Project**:

- React: Create React App, Router, Hooks, PropTypes
- Babel
- Styled Components
- Prettier
- Eslint
- LocalStorage
- Jest

## Setup

To run this project, install it locally on your machine using yarn:

```
$ cd ../
$ yarn install
$ yarn start
```

Application will launch on [http://localhost:3000](http://localhost:3000/) in your browser.

&nbsp;

## Status

As this part of Scrooge App Project is a frontend only Team is going to implement backend as a part of 3rd project of the Coders Camp course. Few minor features are not yet implemented like adding attachments and completed chart with compilation of categories created by the user. These are planned to be added with next release :rocket:
