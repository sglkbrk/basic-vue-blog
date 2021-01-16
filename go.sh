echo api service build..
$PATH/usr/bin/docker-compose build
echo api service stopping..
$PATH/usr/bin/docker-compose down
echo api service startinf..
$PATH/usr/bin/docker-compose  docker-compose up -d
