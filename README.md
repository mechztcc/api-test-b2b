<h1 align="center"> Api CRUD Mongodb</h1> 
<div align="center">
    <img src="http://img.shields.io/static/v1?label=STATUS&message=Completed&color=GREEN&style=for-the-badge"/>
    <img src="http://img.shields.io/static/v1?label=NodeJs&message=16.14.0&color=ORANGE&style=for-the-badge"/>
    <img src="http://img.shields.io/static/v1?label=Typescript&message=4.7.3&color=ORANGE&style=for-the-badge"/>
</div>

<h3>Simple API with the purpose of collecting and saving information about universities in different countries.</h3>
<h4> This project has academic purposes.</h4>


<h1> How to install this project</h1>

<h6> 
    <b>Make sure your node is version 14+</b> 
</h6>

<h6> Just run the command inside project folder <b> npm install </b> </h6>

<h5> You will need to change the database connection file, look in the project root for the file <b> 'ormconfig.json' </b> </h5>

<h5> If you have any doubts check the link </h5> <span>https://orkhan.gitbook.io/typeorm/docs/using-ormconfig#using-ormconfigjson </span>


<h1> How to run</h1>

<h6> After the installation is successful, you can now run the api!</h6>
<h5> Just run the command 'npm run dev' and the server will starts on http://localhost:3333</h5>

<h6> At the first time the server starts, the database is clean.

There is a route to populate the entire database, with data from universities around the world. See on next chapter</h6>

<h1> Api Routes</h1>

<h4> Populate database</h2>
<h6> POST http://localhost:3333/universities/populate-database</h6>
<h6>
by default this route fetches information from the following countries [argentina,
Brazil,
Chile,
Colombia,
Paraguay,
Peru,
suriname,
uruguay]</h6>

<h6>

<h6>if you need another country, just inform the 'countries' field in the body of the request, it expects an array of strings containing the name of the countries.
<b> Celebrate will help you with formatting the fields. </b> </h6>


<h4> List all content </h4>
<h6> GET http://localhost:3333/universities</h6>

<h4> Find university by id </h4>
<h6> GET http://localhost:3333/universities/:id</h6>

<h4> Delete university by id </h4>
<h6> DELETE http://localhost:3333/universities/:id</h6>

<h4> Store university </h4>
<h6> POST http://localhost:3333/universities</h6>
<h6> Body JSON its required, Celebrate will help you with this.</h6>
<h6> { 
  <br>
	"alpa_two_code": "EU", <br>
	"domains": [ "eu.com.br", "eu.com.br"],<br>
	"country": "teste",<br>
	"state_province": "testando",<br>
	"web_pages": ["eu.com.br"],<br>
	"name": "teste"<br>
}</h6>

<h4> Update university by id</h4>
<h6> PUT http://localhost:3333/universities/:id</h6>
<h6> Body JSON its required, Celebrate will help you with required fields.</h6>
<h6> { 
  <br>
	"domains": [ "eu.com.br", "eu.com.br"],<br>
	"web_pages": ["eu.com.br"],<br>
	"name": "teste"<br>
}</h6>
