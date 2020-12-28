# Portfolio Site

This portfolio is created using **React** and **Sanity CMS**. React serves as a dynamic front-end, and retrieves content to display from Sanity.

--- 
## The Goal

I'm creating this portfolio (and documenting my journey) in order to learn new concepts and tools quickly, as well as to create a place to share the things I'm working on and learning moving forward. 

I *really* like Data Science and related things, but I believe Data Science does not exist in a vacuum. Rather, it is a field with approaches and tools that can augment or enhance other capabilities. Learning how to develop and deploy software fits into the larger capability of being able to tell a story using data.

---
## User Stories

In keeping with the spirit of Agile, these are functionalities populated before I picked an approach and started coding.

 * 1. The portfolio site runs on my Digital Ocean droplet and is publicly accessible at port 80 or 443
 * 2. The portfolio site automatically pulls from my Github to display project information
 * 3. The portfolio site is deployed using one or more **Docker** containers
 * 4. The portfolio site is navigable using a modern routing strategy
 (*i.e. http://site/projects/project-name*)
 * 5. I can bring up/down/restart all of the required pages at once
 * 6. I can build and add new site pages in an automated fashion
 (*i.e. with a **Jenkins** CI server or similar tool*)

---
## Execution
The site is now deployed and running thanks to DigitalOcean's serverless app deployment option, which automatically pulls from the master branch of this repository.

### Completed Stories
 * 2. ~~The portfolio site automatically pulls from my Github to display project information~~
 * 4. ~~The portfolio site is navigable using a modern routing strategy~~

### Partially Complete
 * 1. ~~The portfolio site runs on my Digital Ocean droplet and is publicly accessible at port 80 or 443~~
 *The portfolio site is running via Digital Ocean but not on a **droplet**, as this would mean it is running in a self-managed VM.*

### Incomplete
* 3. The portfolio site is deployed using one or more **Docker** containers
* 5. I can bring up/down/restart all of the required pages at once
* 6. I can build and add new site pages in an automated fashion

For the incomplete stories, this will take more investigation on my part. I've successfully deployed a containerized project in the past using AWS ECR/ECS, but I'd like to understand React Router and Node in more depth before I take this part on. Additionally, while containerization is nice, I want to decide on use cases which should drive the approach.

---
## What I learned

Using a CMS to power the backend in conjunction with a simple frontend is increasingly common, and is referred to as a JAMstack (JavaScript, API, Markup). The API’s are the means to getting data (such as content), and the Markup is the “view” or the representation of data that the site’s visitors see. In this project, the API function is handled by our headless CMS, Sanity. The “headless” just means that the front-end is completely decoupled away, and we are focusing on data retrieval and management.

Wordpress, Ghost, and Strapi offer similar capabilities to Sanity. The CMS already has packaged within it various modules for connections as well as an intuitive dashboard for managing content, hence they are **content management systems**.

This was also my first interaction with **Tailwind CSS**, and I found it relatively straightforward to use thanks to their [awesome documentation](https://tailwindcss.com/docs).

## Why it Matters

By letting a pre-built package handle CMS functions, we can work on developing or designing basic websites quickly instead of trying to create a full stack application for projects that don’t necessarily need all that effort. In this case, my portfolio is just a central location to find information.

Additionally, users are only retrieving HTML from our JAMstack site. If there is a sudden spike in requests, this is easier to handle than if we serve dynamic content or have heavy server-side computations.

## Closing Thoughts

This was fun and I will probably attempt to create a new JAMstack application using GatsbyJS next time. GatsbyJS abstracts away the process of creating React pages quickly. It is very popular and has no shortage of documentation. While this section is for **closing thoughts**, this project will very much remain alive as I tinker with its components, styling, and deployment.


 ---
 ## Credits

 I'm using various sources of knowledge to rapidly learn and implement concepts.

 - Thank you to [Kapele/Traversy Media](https://www.youtube.com/watch?v=NO7_jgzVgbc&t=1480s) for your intro to Sanity + React tutorial, as I **coded along to provide the base structure for this project.** While this was a tutorial, I found that various components and functions didn't necessarily work as they did in the video which required investigation into documentation for React and Tailwind. Additionally, I made modifications to fit my stylistic goals, pieced together a logo and background, and came up with a deployment solution (the tutorial used Netlify, I used Digital Ocean).

 - Mountain logo icon came free for use from [Flaticon](https://www.flaticon.com/) and was made by [freepik](https://www.flaticon.com/authors/freepik) (with some editing on my part).

 - Background wallpaper originally by [Reymark Franke](https://unsplash.com/@reymark_franke) and is free for use via [Unsplash](https://unsplash.com/photos/90BVtqyLY0Q). Effects and filters added by me in Photoshop.