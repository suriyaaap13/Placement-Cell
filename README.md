# Placement-Cell

An Application that allows a company's employee to store their students details, interview held through them and allows 
the company to download the result of all interviews along with results in a .csv file

## Table of Contents
* Generalinfo
* Technology
* Setup
* Functionality
* status
* Link

## Introduction
A company constantly needs to download their data to compile different reports. This application creates an interface for the employees of this company to fill in the data into the database and then download it in CSV format.

    
## Technology
    1. Node.js
    2. Express
    3. MongoDB
    4. Mongoose
    5. EJS

## Setup
   Make sure that Node.js, Mongodb, robo3T, VS Code(any text editor) and  are installed in your local system. 
   Open the terminal and type the following commands
   * npm install --save-dev nodemon
   * npm install (Tod download all the dependencies)
   * create a .env file in the root of the project
   * Paste the following in your .env file
   
        >SECRET = AnyTextOfYourChoice
        
        >Mongodb_Atlas_URL = mongodb://localhost:27017/PlacementCell_development
   * To run the project type **npm start** in the terminal

## Functionality
The functionalities that are implemented in this project include
    
    1. Employee Sign Up and Sign In
    2. Add Student 
    3. Add Interview
    4. Add Result
    5. View Result
    6. Download Table
   
## Status
The Project is not completly developed, Features such as 
  1. AJAX can be implemented for better user experience
  2. Minify CSS and JS can be implemented using Gulp library 
  3. A preview of the complete table can be shown to the user before download
  4. Flash Messages can be implemented for better user experience
  5. Edit buttons can be implemented throughout all the functionality.
  
