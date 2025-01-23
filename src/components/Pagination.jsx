import React from "react";



function Pagination({ info,setPage, currentPage }) {


    return (
        <>
            {
                info.pages > 1 && (
                    <div className="flex justify-center gap-4 my-4">
                        <button onClick={() => setPage((prev) => ({...prev,page:1}))} className="btn btn-primary">1</button>


                        <button className={`btn ${info?.prev ? "btn-primary" : "btn-disabled"}`} onClick={() => setPage((prev) => ({...prev,page:Number(prev.page) - 1}))}>-</button>

                        <button className="btn btn-primary">{currentPage}</button>

                        <button className={`btn ${info?.next ? "btn-primary" : "btn-disabled"}`} onClick={() => setPage((prev) => ({...prev,page:Number(prev.page) + 1}))}>+</button>


                        <button onClick={() => setPage((prev) => ({...prev,page:info.pages}))} className="btn btn-primary">{info.pages}</button>
                    </div>
                )
            }
        </>
    );
}

export default Pagination;