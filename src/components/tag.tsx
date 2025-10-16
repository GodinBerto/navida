import { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white shadow-xs border-border border-[1px] px-4 py-1 rounded-full text-sm w-fit">
      <span className="flex justify-center items-center gap-3 text-gray-700">
        {children}
      </span>
    </div>
  );
}
