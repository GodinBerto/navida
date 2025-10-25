export default function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
}) {
  return (
    <label className="inline-flex items-center cursor-pointer gap-2 select-none relative">
      {/* Checkbox input */}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer appearance-none h-5 w-5 border border-gray-300 rounded-sm
                   checked:bg-white checked:border-blue-700
                   flex items-center justify-center transition-all duration-200"
      />

      {/* Check icon */}
      <svg
        className="absolute left-[3px] w-3.5 h-3.5 text-blue-700 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.414a1 1 0 111.414-1.414L8 11.293l6.293-6.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>

      {/* Label text */}
      <span className="text-gray-800 text-sm">{label}</span>
    </label>
  );
}
