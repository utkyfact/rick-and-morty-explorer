import React from 'react'
import { Link, useParams } from 'react-router'
import { useGetCharacterQuery } from '../features/services/RickandMortyServices'
import EpisodeModal from '../components/EpisodeModal'

function CharacterDetail() {
    const { id } = useParams()
    const { data, isLoading } = useGetCharacterQuery(id)

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
            <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-200 rounded-xl p-6 shadow-xl">
                <div className="w-full md:w-1/3">
                    <img
                        src={data?.image}
                        alt={data?.name}
                        className="rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 w-full"
                    />
                </div>

                <div className="w-full md:w-2/3 space-y-6">
                    <div className="flex justify-between items-center">
                        <h1 className="md:text-4xl text-2xl font-bold text-primary">{data?.name}</h1>

                        <div>
                            <Link to="/character">
                                <p className="text-white font-bold md:text-lg btn btn-primary">Back</p>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="stat bg-base-100 rounded-xl">
                            <div className="stat-title">Status</div>
                            <div className={`font-bold md:text-lg ${data?.status === "Alive" ? "text-success" :
                                data?.status === "Dead" ? "text-error" : "text-warning"
                                }`}>
                                {data?.status}
                            </div>
                        </div>

                        <div className="stat bg-base-100 rounded-xl">
                            <div className="stat-title">Species</div>
                            <div className="font-bold md:text-lg text-accent">{data?.species}</div>
                        </div>

                        <div className="stat bg-base-100 rounded-xl">
                            <div className="stat-title">Gender</div>
                            <div className="font-bold md:text-lg text-secondary">{data?.gender}</div>
                        </div>

                        <div className="stat bg-base-100 rounded-xl">
                            <div className="stat-title">Origin</div>
                            <div className="font-bold md:text-lg text-info">{data?.origin.name}</div>
                        </div>
                    </div>

                    <div className="bg-base-100 p-4 rounded-xl">
                        <h3 className="md:text-xl text-error font-semibold mb-2">Last Location</h3>
                        <Link to={`/location/${data?.location.url.split("/").at(-1)}`} className="md:text-lg btn btn-primary">{data?.location.name}</Link>
                    </div>

                    <div className="bg-base-100 p-4 rounded-xl">
                        <h3 className="text-xl text-warning font-semibold mb-2">Episode Count</h3>
                        <button className='btn btn-primary' onClick={() => document.getElementById('episode_modal').showModal()}>
                            <p className="md:text-lg">{data?.episode.length} episodes</p>
                        </button>
                        <EpisodeModal episode={data?.episode} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail