## How to create a new project

1. In the [\_projects](../_projects) directory, create a new file called [**project_link.md**], replacing [project_link] with whatever you want the url to your project to be.

	If your filename is **jellyfish.md**, then the url to the project would be <ins>_rrg.mit.edu/projects/jellyfish/_</ins>.

2. Follow the [Project File Format Section](#Project_File_Format) to fill out the file you just created.

## Project File Format

You need to set a couple of necessary parameters for your project, these include the title of the project, an image, a thumbnail and the content.

Check the [Image Section](#Image_Format) for details of uploading images and thumbs.

The other parameters are:

 - team: This is the name of the team that manages the project, it should be identical to at least one team name of every member's **teams** field, see [_dev_notes/member.md](member.md) for more info.

 - excerpt_separator: This species a string that should end the excerpt anywhere there is a preview of the project and requires it to cut from the long text. It is recommended you use `<!--excerpt_end-->` as the separator for consistency.

 	If your project content is `hello<!--excerpt_end-->hi`, the project preview will only have the excerpt `hello`, however your project page will display `hellohi`.

 - excerpt: In some cases, you want to write out your own excerpt from scratch. The text following this parameter will overwrite anything defined in excerpt_separator.

 If neither `excerpt_separator` or `excerpt`, the site will decide what the best excerpt should be by truncating at a length that fits the box, it is strongly recommended you fill out one of the fields.

The final most important part of the project file is the content, this is all the text that comes after the section enclosed by two `---`. It supports both [markdown](markdown.md) and html snippets.

**The file should look like this:**

```liquid
---
name: Project Title
image: resources/uploads/IMAGE.jpg
thumb: resources/uploads/IMAGE_thumb.jpg
team: marine
excerpt_separator: <!--excerpt_end-->
excerpt: A short description of the project that should span 2-3 lines max.
---

Long Text Content

```

## Image Format

The image should be a high-res photo, at least [1920×1080] of any format. The thumb is a lower-res version of the project image, the recommended resolution is [560×373].

You have two options for project photos and thumbs:

1. Photo from URL, you can paste a URL of the photo and thumb provided by an external source such as [Unsplash](https://unsplash.com/).

	Make sure the content provider can also provide a version compatible with the thumb photo, for example the Unsplash Source API can provide photos with the following spec: <ins>_source.unsplash.com/{PHOTO ID}/{WIDTHxHEIGHT}_</ins>.

	<center><img src="https://source.unsplash.com/WLUHO9A_xik/640x360" style="width: 200px"/></center>

	For example: The image hosted on Unsplash with the ID **WLUHO9A_xik** can have an image with this url:

		https://source.unsplash.com/WLUHO9A_xik/3200x1800

	And a thumb with this url

		https://source.unsplash.com/WLUHO9A_xik/640x360
