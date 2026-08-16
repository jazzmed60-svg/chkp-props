import PlayersList from "./components/PlayersList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Football Players
      </h1>

      <PlayersList />
    </div>
  );
}

export default App;
