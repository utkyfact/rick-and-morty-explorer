import React from "react";
import { Link } from "react-router";



function ResidentModal({ residents }) {



    return (
        <>
            <dialog id="resident_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Related Residents</h3>
                    <div className="grid md:grid-cols-6 grid-cols-3 gap-3">
                        {residents && residents.map((e, i) => (
                            <Link className="btn btn-primary md:text-md text-xs" key={i} to={`/character/${e.split("/").at(-1)}`}>
                                {e.split("/").at(-1)}. Character
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

export default ResidentModal;