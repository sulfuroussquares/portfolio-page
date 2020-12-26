import React from "react";
import image from "../unsplash.jpg"


export default function Home() {

    

    return (
        <main>
            <img src={image} alt="Rocky Mountains" className="absolute object-cover w-full h-full" />
            <section className="bg-gray-900 bg-opacity-10 rounded-lg relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hi, I'm Brian.</h1>
            </section>
        </main>
        // footer <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    )
}