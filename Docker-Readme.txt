Open a terminal in/change directory to the current directory.

Compile the docker image like so:
`docker build -t <your-name>/showtime-app .`

Run the docker image as a container:
`docker run -v $(pwd):/var/www -p 8100 <your-name>/showtime-app`

Open a new terminal and find the docker container port:
`docker ps`

It should give you something like this:
CONTAINER ID        IMAGE                         COMMAND                  CREATED              STATUS              PORTS                     NAMES
5c3278bf66e2        zaclittleberry/showtime-app   "bash /var/www/sta..."   About a minute ago   Up About a minute   0.0.0.0:32768->8100/tcp   determined_einstein

You want to go to the PORTS section, and use the number after the first semicolon (:) and before the arrow (->). That will be [container-port].

Go to http://localhost:[container-port]
