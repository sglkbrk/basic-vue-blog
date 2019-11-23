echo api service stopping..
docker-compose -f /home/sys/vue/docker-compose.yaml down
echo api service startinf..
docker-compose -f /home/sys/vue/docker-compose.yaml up -d --build
