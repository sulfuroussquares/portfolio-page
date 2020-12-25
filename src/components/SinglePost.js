import React from "react";
import {useParams} from "react-router-dom";
import sanityClient from "../client.js";
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
    const {slug} = useParam();

    // uses GROQ query in fetch function
    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]`)
    })

    return ()
}