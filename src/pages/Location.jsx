import React, { useEffect } from "react";
import { useGetAllLocationsQuery } from "../features/services/RickandMortyServices";
import { Link, useSearchParams } from "react-router";
import { useState } from "react";
import PixelCard from "../components/PixelCard";
import Pagination from "../components/Pagination";

function Location() {

    const [page, setPage] = useState(1)

    const [searchParams, setSearchParams] = useSearchParams()
    const [filter, setFilter] = useState({
        page: searchParams.get("page") || 1,
        name: searchParams.get("name") || "",
        type: searchParams.get("type") || "",

    })

    useEffect(() => {
        const params = new URLSearchParams()
        Object.entries(filter).forEach(([key, value]) => {
            if (value) {
                params.append(key, value)
            }
        })
        setSearchParams(params)
    }, [filter])

    const { data, isLoading, isError, isSuccess } = useGetAllLocationsQuery(filter)

    if (isLoading) {
        return (
            <div className="container mx-auto p-2">
                <p className="text-center text-primary text-2xl font-bold">Loading...</p>
                <div className="grid xl:grid-cols-4 grid-cols-2 gap-4">
                    {
                        Array(12).fill(null).map((e, i) => {
                            return (
                                <div key={i} className="skeleton h-96 w-full group shadow-xl">

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-1">
            <div>
                <Link to="/" className="block">
                    <p className="text-center md:text-3xl text-xl text-success font-bold bg-primary-content/40 rounded-md shadow-md shadow-success md:w-1/3 mx-auto my-4 p-2 transition-all duration-300 hover:scale-105 cursor-pointer">All Locations</p>
                </Link>
            </div>
            <div className="flex flex-col">
                <p className="text-primary font-bold text-xl">Filter</p>
                <div className="flex gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search by location"
                        value={filter.name}
                        onChange={(e) => setFilter(prev => ({ ...prev, name: e.target.value }))}
                        className="input input-bordered w-full max-w-xs md:text-lg text-sm"
                    />
                    <input
                        type="text"
                        placeholder="Search by type"
                        value={filter.type}
                        onChange={(e) => setFilter(prev => ({ ...prev, type: e.target.value }))}
                        className="input input-bordered w-full max-w-xs md:text-lg text-sm"
                    />
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                {
                    data && data.results.map((e, i) => (
                        <Link className="" to={`/location/${e.id}`} key={i}>
                            <PixelCard variant="yellow" className='flex justify-center items-center rounded-md   group shadow-xl  bg-primary-content'>
                                <div className="absolute">
                                    <h2 className="text-primary text-lg">{e.name}</h2>
                                    {
                                        e.dimension != "unknown" && <span className="text-success text-sm">{e.dimension}</span>
                                    }
                                </div>
                            </PixelCard>
                        </Link>
                    ))
                }
            </div>
            {
                data?.info && <Pagination setPage={setPage} info={data?.info} />
            }
        </div>
    );
}

export default Location;