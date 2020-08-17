## How to create a new member

1. In the [\_members](../_members) directory, create a new file called [**kerberos.md**], replacing kerberos by your kerberos or a unique id if you don't have one.

2. Follow the [Member File Format Section](#Member_File_Format) to fill out the file you just created.

3. Upload a [**350×350**] **PNG** photo of you to [resources/headshots](../resources/headshots), call the file [**kerberos.png**].

## Member File Format

**The file content should look like this:**

```liquid
---
name: Person's Name
affiliation: College UG/GRAD
detail: Department or Research
teams:
 - jellyfish
 - marine
---

Some text content or description of what they
work on. Anything really, it is currently not
user facing, but this might be added as a feature
later on.
```

**SOME IMPORTANT NOTES:**

 - Stick with the format `College UG` or `College GRAD` with capitalization whenever possible. For example, if your college is MIT write `MIT UG` or `MIT GRAD`.

 - Team names should be **identical** for same team members, the system won't be able to fix spelling mistakes, spacing between words or capitalization in some cases. It is recommended you check with your other team mates so all members show on the project pages.

**Example:** Contents of *tareq.md*

```liquid
---
name: Tareq El Dandachi
affiliation: MIT UG
detail: Quantum Information and Computation
teams:
 - Some Team
---

#### This is a title

Just **some** text about me.
It supports [markdown](markdown).
```
