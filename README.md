# Content-Security-Policy Header Examples
A small project for me to test out the Content-Security-Policy header.

## Running

To run the web server, run the command `./run.sh` from the root directory of the project.
This will build and run a Docker image hosting the site. The site will be 
available at [http://localhost:3000](http://localhost:3000).

Hit `^C` to kill the web server. The shutdown will remove the docker container.

## Testing Different Policies

There are three files of note in this project.

[index.html](site/index.html) - This will try to load several files and to execute some JavaScript. 
It will load a JavaScript deployed with the application itself and try to load
[jQuery](https://jquery.com) & [Bootstrap](https://getbootstrap.com), both hosted on their 
respective CDNs.

[script.js](site/script.js) - This includes various JavaScript that may or may not
work depending on the settings of the Content-Security-Policy header.

[default.conf](default.conf) - This demonstrates various Content-Security-Policy settings. 
The settings and their affect are in comments in that file. You can comment out and 
uncomment the different settings in this file and re-run to see what they do.

When loading the page in your browser, keep the JavaScript console open as that may be the
only indication that something is not working.