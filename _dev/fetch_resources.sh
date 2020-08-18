dir=".";
final="web_scripts"

path=${PWD##*/};

if [ $path == "_dev" ]; then
	dir="..";
fi

url=https://tareqdandachi.github.io/mit-rrg;

if [ $1 == "-d" ]; then
	url=http://localhost:4000/mit-rrg;
	final="_site";
fi

data=$(curl -L "$(echo $url)/scripts_sync/resource_map");

mkdir "$dir/_fetch_cache";

echo "syncing: $data";

IFS=',' read -r -a files <<< "$data";

for file in "${files[@]}"
do
	if [ "${file: -1}" == "~" ]; then
		target="${file%?}.html";
		file="${file%?}/";
	else
		target=$file;
	fi
	echo "$url$file > $dir/_fetch_cache$target";
	curl -LsS "$url$file" -o "$dir/_fetch_cache$target" --create-dirs;
done

rm -rf "$dir/$final";

mv "$dir/_fetch_cache" "$dir/$final";

mv "$dir/$final/scripts_sync/htaccess.html" "$dir/$final/.htaccess";

echo "Need to migrate site.baseurl";

find . -type f -exec sed -i 's/\/mit-rrg\//\//g' {} +;

echo "Migration Complete.";

wget -O "$dir/$final/scripts_status.svg" "https://img.shields.io/static/v1?label=Last%20Updated&message=$(date +"%H:%M:%S %m-%d-%y")&color=informational";
