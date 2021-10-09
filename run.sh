#
# Build and tag the docker image.
#
docker build -t drmidnite/header-csp:1.0 .

#
# Start it. The web server will be on port 3000,
# and the container will remove itself after shutdown.
#
docker run --rm -p3000:3000 drmidnite/header-csp:1.0