import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const GET_TRACK = gql(`
  query GetTracks {
    tracksForHome {   
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
        }
        }
        }
        `);

const Tracks = () => {
  const { loading, error, data } = useQuery(GET_TRACK);
  if (error) return `Error! ${error.message}`;
  if (loading) return "Loading...";
  return <Layout grid>{JSON.stringify(data)}</Layout>;
};

export default Tracks;
