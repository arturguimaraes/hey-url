# heyURL!

![heyURL](https://github.com/arturguimaraes/hey-url/blob/main/src/assets/img/cap1.PNG?raw=true)

## Live Application

Click [here](https://arturguimaraes.github.io/hey-url/) to go to the application.

## Installation

1. `Clone repository`
```js 
git clone https://github.com/arturguimaraes/hey-url.git 
```
2. `Go to directory`
```js 
cd hey-url
```
3. `Install required libraries`
```js 
npm i
```
4. `Start project on http://localhost:3000/`
```js 
npm start
```

## Introduction

Generate short URLs and manage click counts.
Built with ReactJS, Typescript, Saas modules and uses Firebase for API and Database.
Exploring concepts of React Context, useEffect, useState, props, data handling, API Integration (for this project I used the Google Firebase API library), React routing, using components for Layouts, loading components dinamically, and so on.

## Features

shortUrl duplicity check; validation for 5 chars; redirecting to original urls; clicks count; detail page of each url accessing '/url/your-short-url';

## How does it work

How does the click count work: If you click on the link at home page, the system will redirect you for that page and count a click. Or you can acess '/your-short-url', then the system will count the click and redirect you anyway.

## Other screenshots

![heyURL](https://github.com/arturguimaraes/hey-url/blob/main/src/assets/img/cap2.PNG?raw=true)
![heyURL](https://github.com/arturguimaraes/hey-url/blob/main/src/assets/img/cap3.PNG?raw=true)