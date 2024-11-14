#!bin/bahs


echo "Mount remote file system"
sshfs am@192.168.1.108:/home/am/ /media/remote_data
echo "Remote file system mounted!"

