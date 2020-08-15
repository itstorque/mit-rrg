echo "Enter kerberos:";
read kerb;

echo ">>> Will connect to athena locker at [/mit/esiresponse] with the kerberos [$kerb], make sure you have sufficient access and the connection doesn't terminate while this script is running";

path=${PWD##*/};

dir=".";

if [ $path == "_dev" ]; then
	dir="..";
fi

echo ">>> Building directory at [$dir] with [$dir/_scripts_config.yml] included";

jekyll build -s "$dir" -d "$dir/_scripts_deploy/" --config "$dir/_config.yml,$dir/_scripts_config.yml";

echo ">>> Finished building";

echo ">>> Initiating upload, requires authentication";

rsync -razP "$dir/_scripts_deploy/" "$kerb@athena.dialup.mit.edu:/mit/esiresponse/web_scripts";

echo ">>> Cleaning up";

rm -rf "$dir/_scripts_deploy/";

echo ">>> Done.";
