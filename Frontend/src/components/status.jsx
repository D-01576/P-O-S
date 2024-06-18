import { useEffect, useState } from "react";

export function Status({ text }) {
  const [bg, setBg] = useState("");

  useEffect(() => {
    if (text === "Pending") {
      setBg("bg-orange-200 text-orange-700");
    } else if (text === "Paid") {
      setBg("bg-green-200 text-green-700");
    }
  }, [text]);

  return (
    <span className={`${bg} px-2 py-1 rounded-md text-sm`}>
      {text}
    </span>
  );
}
