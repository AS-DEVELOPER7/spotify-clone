import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const spotify = createApi({
  reducerPath: "spotify",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify23.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    // homePage
    topindia: builder.query({
      query: () => ({
        url: "search/",
        method: "GET",
        params: {
          q: "top india",
          type: "playlists",
          offset: "0",
          limit: "20",
          numberOfTopResults: "10",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    tophits: builder.query({
      query: () => ({
        url: "search/",
        method: "GET",
        params: {
          q: "top",
          type: "playlists",
          offset: "0",
          limit: "20",
          numberOfTopResults: "10",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    bestofartists: builder.query({
      query: () => ({
        url: "search/",
        method: "GET",
        params: {
          q: "this is",
          type: "playlists",
          offset: "0",
          limit: "20",
          numberOfTopResults: "10",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    topartists: builder.query({
      query: () => ({
        url: "search/",
        method: "GET",
        params: {
          q: "top",
          type: "artists",
          offset: "0",
          limit: "20",
          numberOfTopResults: "10",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    topartists: builder.query({
      query: () => ({
        url: "search/",
        method: "GET",
        params: {
          q: "top",
          type: "artists",
          offset: "0",
          limit: "20",
          numberOfTopResults: "10",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    topAlbums: builder.query({
      query: () => ({
        url: "search/",
        method: "GET",
        params: {
          q: "top",
          type: "albums",
          offset: "0",
          limit: "20",
          numberOfTopResults: "10",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),

    // search
    search: builder.query({
      query: ({ search, type }) => ({
        url: "search/",
        method: "GET",
        params: {
          q: search,
          type: type,
          offset: "0",
          limit: "100",
          numberOfTopResults: "10",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),

    // albums
    albumDetails: builder.query({
      query: (albumId) => ({
        url: "albums/",
        method: "GET",
        params: {
          ids: albumId,
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    albumMetadata: builder.query({
      query: (albumId) => ({
        url: "album_metadata/",
        method: "GET",
        params: {
          ids: albumId,
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),

    // artist
    artistDetails: builder.query({
      query: (artistId) => ({
        url: "artist_overview/",
        method: "GET",
        params: {
          id: artistId,
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),

    // track
    trackDetails: builder.query({
      query: (trackId) => ({
        url: "tracks/",
        method: "GET",
        params: {
          ids: trackId,
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),

    // playlist
    playlistDetails: builder.query({
      query: (playlistId) => ({
        url: "playlist/",
        method: "GET",
        params: {
          id: playlistId,
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
    playlistTracks: builder.query({
      query: (playlistId) => ({
        url: "playlist_tracks/",
        method: "GET",
        params: {
          id: playlistId,
          offset: "0",
          limit: "100",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),

    // users
    userDetails: builder.query({
      query: (userId) => ({
        url: "user_profile/",
        method: "GET",
        params: {
          id: userId,
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }),
    }),
  }),
});
export const {
  useTopindiaQuery,
  useTophitsQuery,
  useBestofartistsQuery,
  useTopartistsQuery,
  useTopAlbumsQuery,
  useSearchQuery,
  useAlbumDetailsQuery,
  useAlbumMetadataQuery,
  useArtistDetailsQuery,
  useTrackDetailsQuery,
  usePlaylistDetailsQuery,
  usePlaylistTracksQuery,
  useUserDetailsQuery,
} = spotify;
