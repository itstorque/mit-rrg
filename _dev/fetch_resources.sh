dir=".";

if [ $path == "_dev" ]; then
	dir="..";
fi

url=https://esiresponse.github.io;

if [ $1 == "-d" ]; then
	url=http://localhost:4000/mit-rrg;
fi

data=$(curl -L "$(echo $url)/scripts_sync/resource_map");

mkdir "$dir/_fetch_cache";

echo "syncing: $data";

IFS=',' read -r -a files <<< "$data";

for file in "${files[@]}"
do
    echo "$url$file";
	curl -L "$url$file" -o "$dir/_fetch_cache" --create-dirs
done

rm -rf "$dir/_site";

mv "$dir/_fetch_cache" "$dir/_site";
