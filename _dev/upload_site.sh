path=${PWD##*/};

if [ $path == "_dev" ]; then

	scp -r ../_site/ tareq@athena.dialup.mit.edu:/mit/esiresponse/web_scripts/;

else

        scp -r _site/ tareq@athena.dialup.mit.edu:/mit/esiresponse/web_scripts/;

fi
