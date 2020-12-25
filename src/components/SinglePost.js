import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import sanityClient from "../client.js";

import BlockContent from "@sanity/block-content-to-react";

// using image url builder from @sanity/image-url package (npm install @sanity/image-url)
import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}



export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    // slugs are generated and unique for each post. Here, we use the useParam function to retrieve the slug
    // (a-slug-looks-like-this)
    const {slug} = useParams();


    // uses GROQ query in fetch function
    useEffect(() => {
        sanityClient
          .fetch(
            `*[slug.current == "${slug}"]{
                title,
                _id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image
            }`
          )
          .then((data) => setSinglePost(data[0]))
          .catch(console.error);
      }, [slug]);

    

    // If there is not a post to return, display a loading... message
    if (!singlePost) return <div>Loading...</div>;



    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container mx-auto shadow-lg bg-green-100 rounded-lg">
                <header className="relative ">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-white bg-opacity-75 rounded p-12">
                            <h1 className="cursive text-3xl lg:text-6xl mb-4">
                                {singlePost.title}
                            </h1>
                            <div className="flex justify-center text-gray-800">
                                {/* Author Image */}
                                <img src={urlFor(singlePost.authorImage).url()}
                                alt={singlePost.name}
                                className="w-10 h-10 rounded-full" />
                                {/* Author Name */}
                                <p className="cursive flex items-center pl-2 text-2xl">{singlePost.name}</p>
                            </div>
                        </div>
                    </div>
                    {/* Main Image */}
                    <img 
                    // src={singlePost.mainImage.asset.url}
                    src={urlFor(singlePost.mainImage).url()}
                    alt={singlePost.title}
                    className="w-full object-cover rounded-t"
                    style={{height: "400 px"}}/>
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full"></div>
                <BlockContent blocks={singlePost.body} projectId="fzks5u4e" dataset="production"/>
            </article>
        </main>
    );
}