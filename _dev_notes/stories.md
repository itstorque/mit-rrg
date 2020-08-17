## How to create a new project story

1. In the [\_posts](../_posts) directory, create a new file called [**YEAR-MONTH-DAY-title.md**], where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers and title is a link to the story.

	If your filename is **2020-08-13-some-project-story.md**, then the url to the story would be <ins>_rrg.mit.edu/2020/08/13/some-project-story.html_</ins>.

2. Follow the [Project Story File Format Section](#Project_Story_File_Format) to fill out the file you just created.

## Project Story File Format

```liquid
---
title:  "This is a project story!"
author_kerb: ffarrow
team: marine
published: true
image: https://images.unsplash.com/photo-1587908401327-648d15e7b73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80
tags:
 - tag 1
 - tag 2
# excerpt: "overwrite the excerpt separator." #uncomment this to overwrite the excerpt
excerpt_separator: <!--excerpt_end-->
---
```

#### Parameters:

- author_kerb: the kerberos of the person who authored the post.
- team: the team responsible for the post.
- published: if this is unset, it will publish the post. This is helpful whenever you wanna draft a post and finish it later, just add `published: false` and the post won't appear on the site.
- image: look at the Image Section inside [\_dev\_notes/projects](projects.md) for details about this parameter.
- tags: tags that help your post be found by google searches
- excerpt and excerpt_separator: identical to what is in projects.md
