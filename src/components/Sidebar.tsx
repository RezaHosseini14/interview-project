import { fakeOptions } from "../jsons/fakeOptions";
import CheckBoxItem from "./sidebar/CheckBoxItem";

function Sidebar({ handleSelect }: { handleSelect: (id: string) => void }) {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-600 xl:w-80 lg:w-72 w-60 h-full rounded-xl p-6 shadow-lg flex flex-col gap-4">
      {fakeOptions.map((opt) => (
        <CheckBoxItem key={opt.id} option={opt} handleSelect={handleSelect} />
      ))}
    </div>
  );
}

export default Sidebar;
