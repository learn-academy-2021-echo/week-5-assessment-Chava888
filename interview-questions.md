# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a block in Ruby?

Your answer:
A block in ruby is a set of instructions that are wrapped inside a do-end or one line block code {} of a method. An example of using block code is inside a .map and .select or rspec "it". Everytime a method is called and has a do-end the block code gets executed.

Researched answer:
Ruby blocks are created with the do/end or single line code {}. A block is a chunk of code that is passed to a method in ruby. The block of code is invoked when the method is called.

2. What is a gem?

Your answer:
A gem is a package of code that has been pre-built and available in the ruby language. In order to access a gem the user must import the gem to the local computer once, by using "gem install 'name of gem'". The gem only needs to be installed once because the installation is done globally in the computer, meaning it is avaiable to any ruby file from any directory.

Researched answer:
A package of code also known as a library that contains a set of functionality that can be use in ruby. The gems can be installed by "gem install <name_of_gem>". After a gem has been installed the user must use 'require <name_of_gem>' to access the gem in the local ruby file.

3. What is Ruby on Rails?

Your answer:
Rails is a back-end framework that allows the user to have a dynamic app by allowing information to be exchanged from a front-end to back-end and store in a database. Rails by itself already has a default front-end and a structured back-end framework that facilitates in creating apps. Rails uses a ORM "activie record" to connect a database to rails.

Researched answer:
Rails is a back-end framework (gem in ruby) built in the ruby language. Rails is a model-view-controller framework (MVC). The Model (Active Record) interacts with the database. The Views (Action Views) is all the html files and structure. The Controller(Action controller) interacts with the views and model to specify the actions of the application.

4. What is a relational database? Are there other kinds of databases?

Your answer:
A relational database has a data structure of rows and columns, example Postgres SQL. The information is stored in a collection of tables that are related to each other in someway to create a database. There are other kinds of databases that are not relational, example MongoDB.

Researched answer:
A relational database displays information in rows and columns. The database can contain many tables that are related to each other. Other non-relational databases includes MongoDB, Google Cloud Firestore, Cassandra, Redis, and etc.

5. What are primary keys? Why are they important?

Your answer:
Primary keys are id's that are immutable, unique and provided to every entry of information. The keys are important because it allows the database to identify a unique set of data based on the key. An example of the importance of keys is as follows, say we have two sets of data that are identical by having primary keys for each the database can differentiate the information. Furthermore, once an entry of data gets deleted the key also gets removed and not reassign to another set of data.

Researched answer:
Primary keys are unique that specify a particular row within a table in a relational database. The importance of keys, it allows the program to identify which row to select when duplicates exist.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:

RESTful routes are defined conventional paths to conduct CRUD with REST guidelines. Essentially, RESTful routes are naming patters that describe the action done based on the use of CRUD and HTTP verbs. An example of a restful route would be "/comments/:id/edit" that represents a updated with GET.

2. JSON:
   JSON stands for JavaScript object notation. JSON is a format that allows the exchange of data from APIs. Easy to read syntax and a example is {"Name":"Chava"}.

3. ERB:
   ERB is embedded ruby templating that allows the user to add ruby to a plain text document such as HTML. ERB needs to be required and rubby is embedded in <%--Ruby Code--%>.

4. Params:
   Params stands for parameters used for API. In order to access an API it typically request some params to give the user an output data. Parameters are typically attached at the end point of a link to get a specific response back from an API.

5. API:
   API stands for application programming interface. It allows the interactoin of two applications to communicate with each other. The behavior of an api is that it receives a request and sends back a response with accordance with the params used.
