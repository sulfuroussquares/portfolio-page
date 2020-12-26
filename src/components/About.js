import React, {useState, useEffect} from "react";
import sanityClient from "../client.js";
import background from "../unsplash.jpg"
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";



// Copied from singlepost component
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}


export default function About() {

    // set up state
    const [author, setAuthor] = useState(null);
    useEffect( () => {
        // GROQ syntax in fetch() method
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage" : image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch((e) => console.log(e));

    }, []);

    // if no author, return "loading...."
    if (!author) return <div>Loading...</div>

    return (
        <main className="relative ">
            <img src={background} alt="mountains" className="absolute w-full"></img>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-gray-900 bg-opacity-50 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-gray-100 mb-4">
                            Nice to meet you.
                            {/* {" "}
                            <span className="text-gray-500">{author.name}</span> */}
                        </h1>
                        <div className="prose lg:prose-xl text-white"> <BlockContent blocks={author.bio} projectId="fzks5u4e" dataset="production"/> </div>
                    </div>
                </section>
            </div>
        </main>
    )
} // end About()