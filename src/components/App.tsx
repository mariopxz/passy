import { useState } from "react";
import { Card } from "./Card";
import { Header } from "./Header";
import { TabSelector } from "./TabSelector";
import { Templates } from "./Templates";

function App() {
  const [activeTab, setActiveTab] = useState<"generator" | "templates">("generator");

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-2 md:h-screen md:w-xl m-auto md:p-8">
        <Header />
        <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "generator" ? (
          <Card />
        ) : (
          <Templates />
        )}
      </div>
    </>
  );
}

export default App;
