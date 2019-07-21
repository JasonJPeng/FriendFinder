# FriendFinder

Please try this program on [_**Heroku server**_](https://warm-hollows-94004.herokuapp.com)

---

This is a prototype of a Dating App, which uses NODE.js and express on the server-side and using jquery and ajax on the client. You  can take a simple survey by answering 10 simple questions about life and love and the program will find the the bast matched friend from the database. 

![survey form](./info/survey.png)

In order to reduce the working load on the server and keep the cleanness of the data, the program will ensure all data are entered and show the preview of user's picture before the survey form is submitted. The matching algorithm is built on the server side to be more efficient and safe to handle the database of all potential customers.

The algorithm is calculate the compatibility is  as follows:


Sum<sub>i=1-10</sub>| X<sub>ij</sub> - X<sub>i0</sub>| 

where X<sub> ij</sub> is the ith score of the jth people and X<sub> i0</sub> is the ith score of the current user.

When we take the absolute value of each score between one of the people X<sub>j</sub>  and the current user X<sub>0</sub> and the add up these 10  scores, the 10 scores array reduces to one compatibility number. This equation can be achieved in JavaScript as follow:

````   X.map((e,i)=>{return Math.abs((e - Y[i]))}).reduce((x,y)=>x+y, 0)   ````

where _**X**_ is the 10 scores array of one of the people in the database and _**Y**_ is the current user's 10 scores array.

After calculating the compatibility of all people in the database against the current user, the program will send back the most compatible people (with the lowest score) to the web in JSON and the local ajax program will publish the  as follows:

![BestMatch](./info/bestmatch.png)

---

This program is hosted on the [_**Heroku server**_](https://warm-hollows-94004.herokuapp.com)




