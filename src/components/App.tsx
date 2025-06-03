import { useState } from "react";
import { Card } from "./Card";
import { Header } from "./Header";
import { TabSelector } from "./TabSelector";
import { Templates } from "./Templates";
import { TemplatePasswordView } from "./TemplatePasswordView";

function App() {
  const [activeTab, setActiveTab] = useState<"generator" | "templates">(
    "generator"
  );
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full p-2 md:h-screen md:w-xl m-auto md:p-8">
        <Header />
        <TabSelector
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            if (tab === "generator") setActiveTemplate(null);
            if (tab === "templates") setActiveTemplate(null);
          }}
        />
        {activeTemplate ? (
          <TemplatePasswordView templateName={activeTemplate} />
        ) : activeTab === "generator" ? (
          <Card />
        ) : (
          <Templates onUseTemplate={(templateName: string) => setActiveTemplate(templateName)} />
        )}
      </div>
    </>
  );
}

export default App;
