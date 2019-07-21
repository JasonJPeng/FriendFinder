# FriendFinder
This is a prototype of a Dating App, which uses NODE.js and express on the server-side and using jquery and ajax on the client. You  can take a simple survey by answering 10 simple questions about life and love and the program will find the the bast matched friend from the database. 

In order to reduce the working load on the server and keep the cleanness of the data, the program will ensure all data are entered and show the preview of user's picture before the survey form is submitted. The matching algorithm is built on the server side to be more efficient and safe to handle the database of all potential customers.

The algorithm is calculate the compatibility is  as follows:


Sum<sub>i=1-10</sub>| X<sub>ij</sub> - X<sub>i0</sub>| 

where X<sub> ij</sub> is the ith score of the jth people and X<sub> i0</sub>


