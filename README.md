# DvttViz_EQdataset-ReactJS
A project based on Data Visualization Tools &amp; Techniques - Tableau. This is a simple React JS page using [Tableau Public APIv3](https://help.tableau.com/current/api/embedding_api/en-us/index.html) which embed sheets into a webpage. We have taken Earthquake Dataset for analysis of seismic waves and activity, displaying patterns and trends over a time period. This Analysis helps reduce destruction of future Earthquakes.

# Pre-Requisites
- [Node JS](https://nodejs.org/en/about) must be pre-installed.
- [NPM](https://docs.npmjs.com/about-npm) should be pre-installed & configured.
- Any IDE should be pre-installed, preferably [VS Code](https://code.visualstudio.com/docs).
- Internet connection is required for loading the Tableau webpage container using [Tableau API](https://help.tableau.com/current/api/embedding_api/en-us/index.html).

# Installation
- The Dataset used for analysis is attached along with all the files in the repository.
- Use <code>git clone</code> command
- Clone the repository
- You cannot directly run this project after cloning the repo as node_modules is not attached because of <code>.gitignore</code> ( it contains the line that excludes the node_modules from being pushed to repository.)
- If users want to run this project locally, they will have to run <code>npm i</code> before <code>npm start</code>.
- Or the best way to avoid errors is to create a new react project and then replace the files with my files.
- For creating a new react app use the command <code>npx create-react-app /*project_name*/</code> .
- After creating the new react project copy all files from the repository to that directory.

# Running the project
- The Tableau public link for this [project](https://public.tableau.com/views/Ca-4FINAL/Dashboard1). 
- After successfully copying all the files, open any IDE
- Open a seperate terminal and use the <code>cd</code> command to navigate to the project directory or If you are using VS Code use the built-in terminal.
- [React-Router-Dom](https://reactrouter.com/en/main) package is used in this project, to install that package use command <code>npm install react-router-dom</code>.
- Wait for react-router-dom package to finish installing.
- Type command <code>npm start</code>
- After executing the scripts it should automatically open the localhost url in default browser.
- If automatic opening is not executed, open any browser and go to url - http://localhost:3000/
- The project will be successfully loaded on your webpage.
<br>
<br>


# Outputs


![Screenshot 2023-06-30 141733](https://github.com/jubinjacob03/DvttViz_EQdataset-ReactJS/assets/118928433/023eca18-3f80-42fb-952e-1b9ee4d602f6)
![Screenshot 2023-06-30 141927](https://github.com/jubinjacob03/DvttViz_EQdataset-ReactJS/assets/118928433/2b242ae3-5849-44ae-b380-314dfb0d69fe)
![Screenshot 2023-06-30 141938](https://github.com/jubinjacob03/DvttViz_EQdataset-ReactJS/assets/118928433/7cd2515d-4892-42cd-b2da-d908748362a0)
![Screenshot 2023-06-30 151727](https://github.com/jubinjacob03/DvttViz_EQdataset-ReactJS/assets/118928433/39d87902-095c-4fb6-a63e-bd1d6833ea78)
![Screenshot 2023-06-30 142110](https://github.com/jubinjacob03/DvttViz_EQdataset-ReactJS/assets/118928433/a9d661a3-9c93-49a0-8811-275f4eef310f)


# Help and Reference

<mark><h3>Modifying the project -</h3></mark>
<p><ol>
<li> App.js : This is the main home page component.</li>
<li> index.js : File is responsible for routing.</li>
Every component has both inline and seperate css files, so edit those to change the appearance of the webpage.
<li> DvttDashboard.js & sheet(no:).js : These are the javascript files that act as the container for each sheet.Change the url and add your custom tableau public. </li> 
<li> Remaining files : These are basic structural components of a react project, keep them as it is unless you have a proper idea of what you are doing.</li>
</ol></p>
<br>

- For reading the documentation on how Tableau Public embed APIv3 works [click here](https://help.tableau.com/current/api/embedding_api/en-us/index.html).
- Page routing and navigation using [Route, Routes, useNavigate and react-router-dom](https://bobbyhadz.com/blog/react-onclick-redirect).
