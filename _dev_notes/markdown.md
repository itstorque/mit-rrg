# About Markdown

You probably used markdown syntax at some point without knowing
it, it is written in plain text format with some **special**
characters that make your file look _~pretty~_. These are some of the basic markdown features you will probably want most.

## Cheat sheet

### Small Useful Things

Here is how to get:

 - **bold** text: Place the text between two double asterisks, `**text**`.

 - *italics* text: Place the text between two single asterisks, `*text*` or two underscores, `_text_`.

 - <ins>underlined</ins> text: Place the text inside an _ins_ tag, `<ins>text</ins>`.

 - [A link to a url](https://google.com) looks like this `[TITLE](LINK)`, leave the brackets and replace TITLE and LINK.
  TITLE is what the user sees, so in the example it is
  'A link to a url' and the link is where it links you to,
  'https://google.com' in this example.
  The example looks like this `[A link to a url](https://google.com)`.

 - [link to another page on the site](/support) is the same except you specify the text after rrg.mit.edu only. In this example above `[link to another page on the site](/support)`.

### Titles & Headers

Placing a single hashtag (`#`) on the beginning of the line indicates this line is a heading for the section.

Two hashtags (`##`) means it's a subheading.

Three hashtags (`###`) subsubheading.

And so on...

Example:

```
# Biggest Heading
## A Subheading
text
### Subsubhead
more text
```

<!-- looks like this:

# Biggest Heading
## A Subheading
text
### Subsubhead
more text -->

### Placing Images

You can place an image quickly using markdown

![image description](/resources/uploads/fallback_project_thumb.jpg)

Can be placed by typing: `![image description](/resources/uploads/fallback_project_thumb.jpg)`, you can also put an external url instead of a [`/resources/uploads/...`] path.

If you want more control over the image, you can use the html img tag.

### Lists

This is an example that showcases lists, putting spaces or tabs helps indent the output

```
1. Item 1
2. Item 2
	* SubItem 2
	* Another SubItem 2
3. Item 2
	1. SubItem 3.1
	2. SubItem 3.2

* Just a bullet
* Another star bullet

- Minus Bullet

+ Plus bullet
+ Longer bullets can wrap on a new line by adding
	spaces or tabs.
+ Force a newline if  
	you place two spaces at the end of the line you want to break at.
```

1. Item 1
2. Item 2
	* SubItem 2
	* Another SubItem 2
3. Item 2
	1. SubItem 3.1
	2. SubItem 3.2

* Just a bullet
* Another star bullet

- Minus Bullet

+ Plus bullet
+ Longer bullets can wrap on a new line by adding
	spaces or tabs.
+ Force a newline if  
	you place two spaces at the end of the line you want to break at.

### Blockquotes

```
> This is a **blockquote**.
> This line exists on the previous line

Break.

> Longer blockquotes can wrap automatically, look at this: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

> This is a **blockquote**.
> This line exists on the previous line

Break.

> Longer blockquotes can wrap automatically, look at this: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## Markdown is cool

These are some of the basic markdown features you will probably want most, there are many resources online about markdown that are **way better**.
So check those out if you want to make your posts cooler!
