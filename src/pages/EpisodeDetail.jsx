import React from 'react'
import { Link, useParams } from 'react-router'
import { useGetEpisodeQuery } from '../features/services/RickandMortyServices'
import ResidentModal from '../components/ResidentModal'

function EpisodeDetail() {

    const { id } = useParams()
    const { data, isLoading, error } = useGetEpisodeQuery(id)

    if (isLoading) {
        return (
            <div className="min-h-screen container mx-auto p-4">
                <div className="items-center bg-gray-200 rounded-xl p-6 shadow-xl">

                    <div className="w-full space-y-6">
                        <div className="h-10 bg-gray-300 rounded-lg animate-pulse w-1/2"></div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="stat bg-gray-300 rounded-xl animate-pulse h-20"></div>
                            <div className="stat bg-gray-300 rounded-xl animate-pulse h-20"></div>
                        </div>

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
                        <h1 className="text-3xl font-bold text-primary">{data?.name}</h1>
                        <Link to="/episode">
                            <p className="text-white font-bold md:text-lg btn btn-primary">Back</p>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4">

                        <div className="stat bg-base-100 rounded-xl">

                            <div className="stat-title">Episode</div>
                            <div className="font-bold md:text-lg">
                                {data?.episode}
                            </div>
                        </div>


                        <div className="stat bg-base-100 rounded-xl">
                            <div className="stat-title">Air Date</div>

                            <div className="font-bold md:text-lg text-accent">{data?.air_date}</div>

                        </div>
                    </div>

                    <div className="bg-base-100 p-4 rounded-xl">
                        <h3 className="text-xl text-warning font-semibold mb-2">Character Count</h3>
                        <button className='btn btn-primary' onClick={() => document.getElementById('resident_modal').showModal()}>
                            <p className="md:text-lg">
                                Has a Character of {data?.characters?.length} residents</p>
                        </button>
                        <ResidentModal residents={data?.characters} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EpisodeDetail