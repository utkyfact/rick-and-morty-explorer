import React from "react";
import { Link } from "react-router";
import ASCIIText from "../components/Ascii-text";



function HomePage() {

    const cards = [
        {
            title: "According to Characters",
            description: "All episodes of Rick and Morty are available. (Yes, all of them!)",
            image: "./karakterler.jpg",
            url: "/character"
        },
        {
            title: "According to Locations",
            description: "All locations of Rick and Morty are available. (Yes, all of them!)",
            image: "./portal.jpg",
            url: "/location"
        },
        {
            title: "According to Seasons",
            description: "All seasons of Rick and Morty are available. (Yes, all of them!)",
            image: "./rickvemorty.jpg",
            url: "/episode"
        }
    ]


    return (
        <div className="container max-auto p-2 bg-base-100">
            <div className="bg-primary-content/40 rounded-md shadow-md shadow-success p-4 mb-5">
                <p className="text-2xl text-center text-primary font-bold p-2">Welcome to the Rick and Morty universe.</p>
                <p className="text-xl text-center text-secondary font-bold">You can search and browse through Characters, Locations, and Seasons.</p>
            </div>
            {/* <div className="flex justify-center items-center flex-col gap-4 py-20 my-10" >
                <ASCIIText
                    text='RICK AND MORTY'
                    textFontSize={20}
                    enableWaves={true}
                    asciiFontSize={8}
                />
            </div> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    cards.map((card, i) =>
                        <div key={i} className="card bg-base-100 image-full shadow-xl group h-96">
                            <figure>
                                <img
                                    className="h-full w-full object-cover"
                                    src={card.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body group-hover:flex hidden">
                                <h2 className="card-title">{card.title}</h2>
                                <p>{card.description}</p>
                                <div className="card-actions justify-end">
                                    <Link to={card.url} className="btn btn-primary">Detaya git</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default HomePage;