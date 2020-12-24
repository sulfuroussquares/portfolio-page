// useState and useEffect are part of react hooks
import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";

//background image
import image from "../unsplash.jpg"

// import data from sanity
import sanityClient from "../client.js"

export default function Post() {
    // set state using react hooks
    // postData retrieves data for our state, setPost is what we use to set our state
    const [postData, setPost] = useState(null);

    // the content within the .fetch() function is in GROQ (Graph-Relational Object Queries)
    // This appears to be specific to working with Sanity CMS, but is similar to GraphQL from Facebook
    // https://www.sanity.io/docs/how-queries-work
    useEffect(() => {
        // This reads as follows: Fetch all types equal to post, and grab the title, slug, mainimage, and alt
        sanityClient
        .fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset -> {
                    _id,
                    url
                }
            },
            alt
        }`
    ).then((data) => setPost(data))
    .catch((e) => console.log(e));
    }, []);
    // the [] at the end makes this only run once



    return (
        <main >
            <img src={image} alt="Rocky Mountains" className="absolute object-cover w-full h-full" />
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive"> Blog Posts Page</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12"> Welcome to my Blog Post Page</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    { postData && postData.map((post, index) => (
                    <article>
                        <Link to ={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-black-400 border-l-8" key={index}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute"/>
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-white-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity 75">{post.title}</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}