#/bin/sh

cd /var/lib/docker/containers

for dr in $(du -h . | sort -h |  awk '/^[0-9]{3}M|^[0-9]*G/ {print}' | sed '$d' | awk '{print $2}' | cut -d '/' -f2)
do
        truncate -s 0  ${dr}/${dr}-json.log

done
