interface Option {
  id: string;
  label: string;
}

interface CheckBoxItemProps {
  option: Option;
  handleSelect: (id: string) => void;
}

function CheckBoxItem({ option, handleSelect }: CheckBoxItemProps) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
      <input
        onChange={() => handleSelect(option.id)}
        type="checkbox"
        name={option.id}
        id={option.id}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />
      <label htmlFor={option.id} className="text-white font-medium cursor-pointer select-none">
        {option.label}
      </label>
    </div>
  );
}

export default CheckBoxItem;
