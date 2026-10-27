"use client";

import { useEffect, useRef, useState } from "react";

export function Toaster() {
  const [msg, setMsg] = useState("");
  const [on, setOn] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const handler = (e: Event) => {
      setMsg((e as CustomEvent<string>).detail);
      setOn(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setOn(false), 3600);
    };
    window.addEventListener("vms-toast", handler);
    return () => {
      window.removeEventListener("vms-toast", handler);
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className={`toast${on ? " on" : ""}`} role="status" aria-live="polite">
      {msg}
    </div>
  );
}
