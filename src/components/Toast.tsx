"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";

export default function Toast({ open, message }: { open: boolean; message: string }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] as const }}
          role="status"
          aria-live="polite"
          className="fixed bottom-8 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-[0.15em]"
          style={{ background: "var(--yellow)", color: "#000" }}
        >
          <Check className="h-4 w-4" />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
