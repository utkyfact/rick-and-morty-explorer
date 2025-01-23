import React, { useEffect } from "react";
import { useGetAllCharacterQuery } from "../features/services/RickandMortyServices";
import { Link, useSearchParams } from "react-router";
import { useState } from "react";
import Pagination from "../components/Pagination";

function Character() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [filter, setFilter] = useState({
        page: searchParams.get("page") || 1,
        status: searchParams.get("status") || "",
        gender: searchParams.get("gender") || "",
        name: searchParams.get("name") || "",
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


    const { data, isLoading, isError, isSuccess } = useGetAllCharacterQuery(filter)

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

    const status = [
        {
            name: "Alive", value: "alive"
        },
        {
            name: "Dead", value: "dead"
        },
        {
            name: "Unknown", value: "unknown"
        }
    ]

    const gender = [
        {
            name: "Male", value: "male"
        },
        {
            name: "Female", value: "female"
        },
        {
            name: "Genderless", value: "genderless"
        },
        {
            name: "Unknown", value: "unknown"
        }
    ]

    return (
        <div className="container mx-auto p-1">
            <div>
                <Link to="/" className="block">
                    <p className="text-center md:text-3xl text-xl text-primary font-bold bg-primary-content/40 rounded-md shadow-md shadow-success md:w-1/3 mx-auto my-4 p-2 transition-all duration-300 hover:scale-105 cursor-pointer">All Characters</p>
                </Link>
            </div>
            {/* All Filters */}
            <div className="flex flex-col">
                <p className="text-primary font-bold text-xl">Filter</p>
                <div className="flex md:flex-row flex-col gap-2 mb-5 mt-2">
                    <div className="flex gap-2">
                        {/* Filter by status */}
                        <div>
                            <select value={filter.status} onChange={(e) => setFilter((prev) => ({ ...prev, status: e.target.value }))} className="select select-bordered ">
                                <option value="PLACEHOLDER" disabled>Make a choice</option>
                                {
                                    status.map((e, i) => (
                                        <option key={i} value={e.value}>{e.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* Filter by gender */}
                        <div>
                            <select value={filter.gender} onChange={(e) => setFilter((prev) => ({ ...prev, gender: e.target.value, page: 1 }))} className="select select-bordered">
                                <option value="PLACEHOLDER" disabled>Make a choice</option>
                                {
                                    gender.map((e, i) => (
                                        <option key={i} value={e.value}>{e.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    {/* Filter by name */}
                    <div>
                        <input type="text" value={filter.name} onChange={(e) => setFilter((prev) => ({ ...prev, name: e.target.value, page: 1 }))} className="input input-bordered w-full" placeholder="Search by name" />
                    </div>
                </div>
            </div>

            <div className="grid xl:grid-cols-4 grid-cols-2 gap-4">
                {
                    data && data.results.map((e, i) => (
                        <Link to={`/character/${e.id}`} key={i} className="card bg-base-100 image-full shadow-xl group">
                            <figure>
                                <img
                                    className="h-full w-full object-cover"
                                    src={e.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body group-hover:flex hidden p-2">
                                <h2 className="card-title text-primary ">{e.name}</h2>
                                <span className="text-accent">{e.species}</span>
                                <span className="text-info">{e.status}</span>
                                <span className="text-secondary">{e.gender}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
            {
                data?.info && <Pagination setPage={setFilter} info={data?.info} currentPage={filter.page} />
            }
        </div>
    );
}

export default Character;