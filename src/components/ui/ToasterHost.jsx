"use client";

import { Toaster } from "sonner";

export default function ToasterHost() {
  return (
    <Toaster
      richColors
      position="top-center"
      closeButton
      toastOptions={{
        classNames: {
          toast: "font-sans",
        },
      }}
    />
  );
}
