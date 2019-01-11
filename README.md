# Sass example

This repo contains a Sass example based on Gulp. In terms of Sass syntax, it is
not the best way to implement it. It is uploaded only for education purposes.
Check the video below.

# Check the full explanation video (GR)
[![Sass αντί για CSS #74, live](https://img.youtube.com/vi/lgyGvh_sYoQ/0.jpg)](https://youtu.be/lgyGvh_sYoQ)

# Installation
Requirements
- You need to have [Docker](https://docs.docker.com/engine/installation/) and [Docker Compose](https://docs.docker.com/compose/install/) installed

# Run

Run in root folder,
~~~
cp .env.example .env
docker-compose build && docker-compose up -d
~~~~

Start Sass watch,
~~~
docker-compose run tools bash
npm install
gulp
~~~~

Check http://127.0.0.1/ on your browser

Check files on /data/www/public/theme/sass/* on your editor of choice.

Exit the container,
~~~
exit
~~~~

To stop it, go to root folder and type,
~~~~
docker-compose down
~~~~

# By SocialNerds
* [SocialNerds.gr](https://www.socialnerds.gr/)
* [YouTube](https://www.youtube.com/SocialNerdsGR)
* [Facebook](https://www.facebook.com/SocialNerdsGR)
* [Twitter](https://twitter.com/socialnerdsgr)