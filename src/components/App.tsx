import { Card } from "./Card";
import { Header } from "./Header";
import { TabSelector } from "./TabSelector";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-[700px] m-auto p-8">
        <Header />
        <TabSelector />
        <Card />
      </div>
    </>
  );
}

export default App;
