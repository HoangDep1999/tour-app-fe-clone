import HomePage from "./component/AppContent/HomePage/HomePage";
import AppHeader from "./component/AppHeader/AppHeader";

function App() {
  return (
    <>
      <div className="h-screen min-w-full relative">
        <AppHeader />
        <HomePage />
      </div>
    </>
  );
}

export default App;
