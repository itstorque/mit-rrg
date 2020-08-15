---
# This is supposed to write into resource_map.html
# The console has a list of all the files being output
---

{% assign all_files =
	  		  site.static_files
	| concat: site.pages
	| concat: site.documents
%}

files = [
	{% for file in all_files %}
		{%- if file.url -%}
			'{{ file.url }}',
		{%- else -%}
			'{{ file.path }}',
		{%- endif -%}
	{% endfor %}
];

const extension = (file) => file.split('.').pop();
const strip_extension = (file) => file.split('.').slice(0, -1).join('.');

files.forEach(function (item, index) {

  if (item == "/README.md") {

	  return

  } else if (extension(item) == "md") {

	  item = strip_extension(item) + "/index.html";

  }

  if (item[0] == "_") {
	  item = item.substr(1);
  }

  if (item.substr(-1) == "/") {
	  item = item + "index.html";
  }

  console.log(item)

  document.write(item+"\n");

});
