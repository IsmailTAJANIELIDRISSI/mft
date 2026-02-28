import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Full-screen branded loading screen that is visible on the initial page
 * load, then fades out once the browser `load` event fires (all resources
 * ready) or after a 3 s safety timeout — whichever comes first.
 */
const AppLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const hide = () => {
      // Small delay so the exit animation feels intentional
      timeout = setTimeout(() => setVisible(false), 300);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
      // Safety net – never block the UI for more than 3 seconds
      const safety = setTimeout(() => setVisible(false), 3000);
      return () => {
        clearTimeout(safety);
        clearTimeout(timeout);
        window.removeEventListener("load", hide);
      };
    }

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="app-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] bg-mft-dark flex flex-col items-center justify-center gap-8 pointer-events-none"
          aria-hidden="true"
        >
          {/* Brand block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="flex flex-col items-center gap-2 select-none"
          >
            <span className="font-heading font-extrabold text-5xl text-white tracking-tight">
              MFT
            </span>
            <span className="text-mft-orange text-[10px] uppercase tracking-[0.25em] font-bold">
              Solutions Industrielles Pétrolières
            </span>
          </motion.div>

          {/* Animated progress bar */}
          <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 2.2,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="h-full w-full bg-mft-orange rounded-full"
            />
          </div>

          {/* Subtle pulsing dot */}
          <div className="w-2 h-2 rounded-full bg-mft-orange animate-pulse opacity-60" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppLoader;
