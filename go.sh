echo api service build..
/usr/bin/docker-compose build
echo api service stopping..
/usr/bin/docker-compose down
echo api service startinf..
/usr/bin/docker-compose  docker-compose up -d
