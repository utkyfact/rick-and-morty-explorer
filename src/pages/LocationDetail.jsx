import React from 'react'
import { Link, useParams } from 'react-router'
import { useGetLocationQuery } from '../features/services/RickandMortyServices'
import ResidentModal from '../components/ResidentModal'

function LocationDetail() {
    const { id } = useParams()
    const { data, isLoading, error } = useGetLocationQuery(id)

    if (isLoading) {
        return (
            <div className="min-h-screen container mx-auto p-4">
                <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-200 rounded-xl p-6 shadow-xl">
                    <div className="skeleton w-full md:w-1/3">
                        <div className="rounded-xl shadow-2xl w-full bg-gray-300 animate-pulse h-64"></div>
                    </div>

                    <div className="skeleton w-full md:w-2/3 space-y-6">
                        <div className="skeleton h-10 bg-gray-300 rounded-lg animate-pulse w-1/2"></div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="stat bg-gray-300 rounded-xl animate-pulse h-20"></div>
                            <div className="stat bg-gray-300 rounded-xl animate-pulse h-20"></div>
                            <div className="stat bg-gray-300 rounded-xl animate-pulse h-20"></div>
                            <div className="stat bg-gray-300 rounded-xl animate-pulse h-20"></div>
                        </div>

                        <div className="bg-gray-300 p-4 rounded-xl animate-pulse h-24"></div>

                        <div className="bg-gray-300 p-4 rounded-xl animate-pulse h-24"></div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen container mx-auto p-4">
            <div className="items-center bg-gray-200 rounded-xl p-6 shadow-xl">


                <div className="w-full space-y-6">

                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-primary">{data?.name ?? ""}</h1>
                        <Link to="/location">
                            <p className="text-white font-bold md:text-lg btn btn-primary">Back</p>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {data?.dimension != "unknown" &&
                            <div className="stat bg-base-100 rounded-xl">

                                <div className="stat-title">Dimension</div>
                                <div className={`md:text-lg font-bold ${data?.status === "Alive" ? "text-success" :
                                    data?.status === "Dead" ? "text-error" : "text-warning"
                                    }`}>
                                    {data?.dimension}
                                </div>
                            </div>
                        }

                        <div className="stat bg-base-100 rounded-xl">
                            <div className="stat-title">Planet</div>
                            {
                                data?.type && <div className="font-bold md:text-lg text-accent">{data?.type}</div>
                            }
                        </div>
                    </div>

                    <div className="bg-base-100 p-4 rounded-xl">
                        <h3 className="text-xl text-warning font-semibold mb-2">Episode Count</h3>
                        <button className='btn btn-primary' onClick={() => document.getElementById('resident_modal').showModal()}>
                            <p className="md:text-lg text-sm">
                                Has a population of {data?.residents?.length ?? ""} residents</p>
                        </button>
                        <ResidentModal residents={data?.residents} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationDetail