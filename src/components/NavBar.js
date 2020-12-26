import React from "react";
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";


export default function NavBar() {

    return (

        <header className="bg-black">
            <div className="container flex mx-auto justify-between" >
                <nav className="flex">
                    <NavLink to="/"
                    exact
                    activeClassName="text-green-50"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-green-50 hover:text-green-800 text-4xl font-bold cursive tracking-widest"> 
                        Home
                    </NavLink>

                    <NavLink to="/about"
                    activeClassName="text-green-50 bg-gray-500 bg-opacity-20"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-50 hover:text-green-800"> 
                        About Me
                    </NavLink>

                    <NavLink to="/post"
                    activeClassName="text-green-50 bg-gray-500 bg-opacity-20"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-50 hover:text-green-800"> 
                        Posts
                    </NavLink>

                    <NavLink to="/project"
                    activeClassName="text-green-50 bg-gray-500 bg-opacity-20"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-green-50 hover:text-green-800"> 
                        Projects
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6" >
                    {/* Using React Social Icons */}
                    <SocialIcon url = "https://www.linkedin.com/in/bibetancourt/" className="mr-4" target="_blank" fgColor="#C8E6B0" style={{ height: 35, width: 35}}/>
                    <SocialIcon url = "https://github.com/sulfuroussquares" className="mr-4" target="_blank" fgColor="#C8E6B0" style={{ height: 35, width: 35}}/>
                    <SocialIcon url = "https://medium.com/@jasonsummercamp" className="mr-4" target="_blank" fgColor="#C8E6B0" style={{ height: 35, width: 35}}/>
                    
                </div>
            </div>
        </header>



    )
}