import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Activity } from "../../data/activities";
import LazyImage from "./LazyImage";

interface ActivityModalProps {
  activity: Activity | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

const ActivityModal = ({ activity, onClose, onPrev, onNext }: ActivityModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activity) {
      document.body.style.overflow = "hidden";
      contentRef.current?.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activity]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!activity) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activity, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {activity && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center cursor-pointer"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-[95vw] max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col cursor-default"
          >
            <div className="relative h-48 sm:h-64 shrink-0">
              <LazyImage
                src={activity.heroImage}
                alt={activity.title}
                wrapperClassName="h-full"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-xs uppercase tracking-widest text-mft-orange font-bold mb-2">
                  Activité #{activity.id}
                </p>
                <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-white leading-snug">
                  {activity.title}
                </h2>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-2">
                {onPrev && (
                  <button
                    onClick={(e) => { e.stopPropagation(); onPrev(); }}
                    className="cursor-pointer w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200"
                  >
                    <ChevronLeft size={18} />
                  </button>
                )}
                {onNext && (
                  <button
                    onClick={(e) => { e.stopPropagation(); onNext(); }}
                    className="cursor-pointer w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200"
                  >
                    <ChevronRight size={18} />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="cursor-pointer w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-red-500/80 hover:border-red-400/40 transition-all duration-200"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div ref={contentRef} className="flex-1 overflow-y-auto overscroll-contain">
              <div className="p-6 sm:p-8 space-y-8">
                <div className="space-y-6">
                  {activity.content.map((block, index) => (
                    <div key={`${activity.slug}-block-${index}`} className="space-y-3">
                      {block.title && (
                        <h3 className="font-heading text-lg text-mft-dark flex items-center gap-2">
                          <span className="w-1.5 h-6 rounded-full bg-mft-orange inline-block shrink-0" />
                          {block.title}
                        </h3>
                      )}

                      {block.text && (
                        <p className="text-mft-grey-dark leading-relaxed text-[15px]">
                          {block.text}
                        </p>
                      )}

                      {block.bullets?.length ? (
                        <ul className="space-y-2 pl-1">
                          {block.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mft-orange shrink-0" />
                              <span className="text-mft-grey-dark leading-relaxed text-sm">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-heading text-lg text-mft-dark mb-4">
                    Galerie ({activity.images.length} photos)
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {activity.images.map((img, i) => (
                      <LazyImage
                        key={img}
                        src={img}
                        alt={`${activity.title} - ${i + 1}`}
                        wrapperClassName="aspect-[4/3] rounded-xl overflow-hidden bg-mft-bg border border-gray-100"
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ActivityModal;
