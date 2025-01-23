import React, { useEffect, useState } from "react";
import { useGetAllEpisodesQuery } from "../features/services/RickandMortyServices";
import Pagination from "../components/Pagination";
import SpotlightCard from "../components/SpotlightCard";
import { Link, useSearchParams } from "react-router";



function Episode() {

    const [page, setPage] = useState(1)

    const [searchParams, setSearchParams] = useSearchParams()
    const [filter, setFilter] = useState({
        page: searchParams.get("page") || 1,
        name: searchParams.get("name") || "",
        episode: searchParams.get("episode") || "",
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

    const handleFilterChange = (e) => {
        const { name, value } = e.target
        setFilter(prev => ({
            ...prev,
            [name]: value,
            page: 1 // Filtreleme yapıldığında sayfa 1'e dönmeli
        }))
    }


    const { data, isLoading } = useGetAllEpisodesQuery(filter)

    if (isLoading) {
        return (
            <div className="container mx-auto p-2">
                <p className="text-center md:text-3xl text-xl text-primary font-bold bg-primary-content/40 rounded-md shadow-lg shadow-primary w-1/3 mx-auto my-4">Loading...</p>
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
        <div className="container max-auto p-1">
            <div>
                <Link to="/" className="block">
                    <p className="text-center md:text-3xl text-xl text-secondary font-bold bg-primary-content/40 rounded-md shadow-md shadow-success md:w-1/3 mx-auto my-4 p-2 transition-all duration-300 hover:scale-105 cursor-pointer">All Episodes</p>
                </Link>
            </div>
            <div className="flex flex-col">
                <p className="text-primary font-bold text-xl">Filter</p>
                <div className="flex gap-4 mb-4">
                    <input
                        type="text"
                        name="name"
                        value={filter.name}
                        onChange={handleFilterChange}
                        placeholder="Search for episode name..."
                        className="input input-bordered w-full max-w-xs md:text-lg text-sm"
                    />
                    <input
                        type="text"
                        name="episode"
                        value={filter.episode}
                        onChange={handleFilterChange}
                        placeholder="Search for episode code... (e.g. S01E01)"
                        className="input input-bordered w-full max-w-xs md:text-lg text-sm"
                    />
                </div>
            </div>
            <div className="grid xl:grid-cols-4 grid-cols-2 gap-4">
                {
                    data?.results && data?.results.map((e, i) => {
                        return (
                            <Link to={`/episode/${e.id}`} key={i}>
                                <SpotlightCard className="h-52" spotlightColor="lightgreen">
                                    <p className="text-primary md:text-xl text-lg">{e.name}</p>
                                    <p className="text-secondary">{e.episode}</p>
                                    <p className="text-info text-sm">{e.air_date}</p>

                                </SpotlightCard>
                            </Link>
                        )

                    })
                }
            </div>



            {
                data?.info && <Pagination page={page} setPage={setPage} info={data?.info} />
            }
        </div>
    );
}

export default Episode;