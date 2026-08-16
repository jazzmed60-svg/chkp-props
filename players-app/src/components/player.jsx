function Player({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-72 hover:scale-105 transition-transform">
      <img src={image} alt={name} className="w-full h-64 object-cover" />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{name}</h2>

        <p className="text-gray-600">
          <strong>Team:</strong> {team}
        </p>

        <p className="text-gray-600">
          <strong>Nationality:</strong> {nationality}
        </p>

        <p className="text-gray-600">
          <strong>Jersey Number:</strong> {jerseyNumber}
        </p>

        <p className="text-gray-600">
          <strong>Age:</strong> {age}
        </p>
      </div>
    </div>
  );
}

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "https://placehold.co/400x400",
};

export default Player;
