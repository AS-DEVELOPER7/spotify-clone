import React, { useContext, useEffect, useRef, useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { BsStack } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { createContext } from "react";
import { AiFillHeart } from "react-icons/ai";
const Context = createContext();
const StateContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("multi");
  const [playlistId, setPlaylistId] = useState("");
  const [artistId, setArtistId] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [trackId, setTrackId] = useState("4uUG5RXrOk84mYEfFvj3cK");
  const filters = [
    {
      title: "All",
      type: "multi",
    },
    {
      title: "Albums",
      type: "albums",
    },
    {
      title: "Playlists",
      type: "playlists",
    },
    {
      title: "Artists",
      type: "artists",
    },
    {
      title: "Songs",
      type: "tracks",
    },
  ];
  return (
    <Context.Provider
      value={{
        search,
        setSearch,
        type,
        setType,
        playlistId,
        setPlaylistId,
        artistId,
        setArtistId,
        albumId,
        setAlbumId,
        trackId,
        setTrackId,
        filters,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(Context);
