import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder)=> ({
    getAllCharacter: builder.query({
        query: (filter) => {
            const param = new URLSearchParams()
            Object.entries(filter).forEach(([key,value])=>{
                if(value){
                    param.append(key,value)
                }
            })
            return {
                url: `character?${param.toString()}`,
                method: "GET"
            }  
        }
    }),
    getCharacter: builder.query({
        query: (id) => `character/${id}`
    }),
    getAllLocations: builder.query({
        query: (filter) => {
            const param = new URLSearchParams()
            Object.entries(filter).forEach(([key,value])=>{
                if(value){
                    param.append(key,value)
                }
            })
            return {
                url: `location?${param.toString()}`,
                method: "GET"
            }  
        }
        // query: (page) => ({
        //     url: `location/?page=${page}`,
        //     method: "GET"
        // })
    }),
    getLocation: builder.query({
        query: (id) => ({
            url: `location/${id}`,
            method: "GET"
        })
    }),
    getAllEpisodes: builder.query({
        query: (filter) => {
            const param = new URLSearchParams()
            Object.entries(filter).forEach(([key,value])=>{
                if(value){
                    param.append(key,value)
                }
            })
            return {
                url: `episode?${param.toString()}`,
                method: "GET"
            }  
        },
        // query: (page) => ({
        //     url: `episode/?page=${page}`,
        //     method: "GET"
        // })
    }),
    getEpisode: builder.query({
        query: (id) => ({
            url: `episode/${id}`,
            method: "GET"
        })
    }),
  }),
})

export const { 
    useGetAllCharacterQuery,
    useGetCharacterQuery,
    useGetAllLocationsQuery,
    useGetLocationQuery,
    useGetAllEpisodesQuery,
    useGetEpisodeQuery
 } = rickAndMortyApi