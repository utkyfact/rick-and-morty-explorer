import React from "react";
import { Link } from "react-router";



function EpisodeModal({ episode }) {



    return (
        <>
            <dialog id="episode_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Related Episodes</h3>
                    <div className="grid md:grid-cols-6 grid-cols-3 gap-3">
                        {episode && episode.map((e, i) => (
                            <Link className="btn btn-primary" key={i} to={`/episode/${e.split("/").at(-1)}`}>
                                Episode. {e.split("/").at(-1)}
                            </Link>
                        ))}
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
}

export default EpisodeModal;