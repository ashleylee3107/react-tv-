import "./shows.css";
import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return <p>Please select a show to see episodes.</p>;
  }

  return (
    <div className="show-details">
      <h2>{show.name}</h2>
      <EpisodeDetails episode={selectedEpisode} />

      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
    </div>
  );
}
