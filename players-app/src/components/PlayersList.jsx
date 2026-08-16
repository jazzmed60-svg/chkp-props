import Player from "./Player";
import players from "../players";

function PlayersList() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {players.map((player) => (
        <Player key={player.name} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;
