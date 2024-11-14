#!bin/bash

clear

while [ 1 ]
do
	 freq=$(cat /proc/cpuinfo | grep "MHz")
	 echo "current frequency: \n$freq"
	 sleep 2
	 clear
done

