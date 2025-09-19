import { useState } from "react";
import DashhboardLayout from "./layout/DashboardLayout";

function App() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelect = (id: string) => {
    setSelectedOptions((prev) => (prev.includes(id) ? prev.filter((opt) => opt !== id) : [...prev, id]));
  };

  const renderContent = () => {
    if (selectedOptions.length === 0) {
      return <div className="text-red-500 flex-1 text-center">No content found!!!</div>;
    }
    return selectedOptions.map((item) => (
      <div
        key={item}
        className={`bg-red-500 text-white p-8 rounded-xl shadow-md flex-1 basis-[calc((100%-16px)/4)] min-w-[100px]`}
      >
        {item}
      </div>
    ));
  };

  return (
    <DashhboardLayout handleSelect={handleSelect}>
      <div className="flex flex-wrap gap-4">{renderContent()}</div>
    </DashhboardLayout>
  );
}

export default App;
