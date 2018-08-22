# LetterTypingGame
A game where you have 30 seconds to press the correct letter as many times as possible.
This should help people learning to touchtype.

The website is built using Javascript/HTML5/CSS5 for the front-end, PHP for the back-end, PostgreSQL as the DB and is deployed on heroku.


# Independent Setup
If you are interested in mimicking the process of deploying this app on heroku and running your own database then this part is for you.

First off, if you're looking to deploy locally you will need to use the branch 'databasesync' as thats the branch which is configured to deploy locally using php/pg admin.

If you would like to deploy this app on heroku using herokus PostgreSQL addon follow these steps:

1. Create a heroku project using the source code on branch master
2. Add Heroku PostgreSQL addon to the project
3. Using either Heroku PostgreSQL CLI or *heroku-data-explorer* (highly recommended, basically a web interface for managing your heroku database) run the scripts located under src/queries/create_scripts in the following order:
-create_scores_table
-create_total_games_table
-insert_total_games_table

After this you should be ready to just deploy the application and access it, everything else should be taken care of in the source code.

Let me know what you think, enjoy!

Pawel Kusnierek
