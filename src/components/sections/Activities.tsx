import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import LazyImage from "../ui/LazyImage";
import ActivityModal from "../ui/ActivityModal";
import { activities, type Activity } from "../../data/activities";

const CARDS_PER_PAGE = 3;
const totalPages = Math.ceil(activities.length / CARDS_PER_PAGE);

const Activities = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const currentCards = activities.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  const paginate = useCallback((dir: number) => {
    setDirection(dir);
    setPage((prev) => {
      const next = prev + dir;
      if (next < 0) return totalPages - 1;
      if (next >= totalPages) return 0;
      return next;
    });
  }, []);

  const handleModalPrev = useCallback(() => {
    setSelectedActivity((curr) => {
      if (!curr) return null;
      const idx = activities.findIndex((a) => a.id === curr.id);
      return idx > 0 ? activities[idx - 1] : activities[activities.length - 1];
    });
  }, []);

  const handleModalNext = useCallback(() => {
    setSelectedActivity((curr) => {
      if (!curr) return null;
      const idx = activities.findIndex((a) => a.id === curr.id);
      return idx < activities.length - 1 ? activities[idx + 1] : activities[0];
    });
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <>
      <section id="activites" className="py-24 lg:py-32 bg-mft-dark relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-mft-orange/6 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-mft-green/4 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          {/* Header + nav */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="text-mft-orange uppercase tracking-widest text-xs font-bold mb-4 inline-block">
                NOS ACTIVITÉS
              </span>
              <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4 leading-tight">
                Nos domaines d'expertise
              </h2>
              <p className="text-white/50 text-lg">
                Découvrez nos 8 pôles d'activité, nos réalisations et notre
                savoir-faire terrain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-4 shrink-0"
            >
              <div className="flex items-center gap-2 mr-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
                    className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
                      i === page
                        ? "w-8 bg-mft-orange"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => paginate(-1)}
                className="cursor-pointer w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-white/70 hover:border-mft-orange hover:text-mft-orange transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => paginate(1)}
                className="cursor-pointer w-12 h-12 rounded-xl bg-mft-orange text-white flex items-center justify-center hover:bg-mft-orange-light transition-all duration-300 hover:shadow-lg hover:shadow-mft-orange/30"
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>

          {/* Carousel */}
          <div className="relative min-h-[480px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.25 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {currentCards.map((activity, i) => (
                  <motion.article
                    key={activity.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group relative rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500 hover:-translate-y-1 flex flex-col"
                    style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)" }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <LazyImage
                        src={activity.heroImage}
                        alt={activity.title}
                        wrapperClassName="h-52"
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white text-[11px] font-semibold">
                        {activity.images.length} photos
                      </div>

                      {/* Number overlay */}
                      <div className="absolute bottom-3 left-4">
                        <span className={`text-[11px] font-bold backdrop-blur-sm px-2.5 py-1 rounded-md border ${i % 2 === 0 ? "text-mft-orange bg-mft-orange/20 border-mft-orange/30" : "text-mft-green bg-mft-green/20 border-mft-green/30"}`}>
                          0{activity.id}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-heading text-[17px] text-white leading-snug mb-2 line-clamp-2">
                        {activity.title}
                      </h3>
                      <p className="text-[13px] text-white/45 leading-relaxed mb-5 line-clamp-3 flex-1">
                        {activity.summary}
                      </p>

                      <button
                        onClick={() => setSelectedActivity(activity)}
                        className={`cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-white/80 text-sm font-medium hover:text-white transition-all duration-300 self-start ${i % 2 === 0 ? "hover:bg-mft-orange hover:border-mft-orange" : "hover:bg-mft-green hover:border-mft-green"}`}
                      >
                        <Eye size={15} />
                        Voir les détails
                        <ChevronRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile hint */}
          <div className="flex md:hidden justify-center mt-8">
            <div className="flex items-center gap-2 text-xs text-white/40">
              <ChevronLeft size={14} />
              <span>Utilisez les flèches pour naviguer</span>
              <ChevronRight size={14} />
            </div>
          </div>
        </div>
      </section>

      <ActivityModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
        onPrev={handleModalPrev}
        onNext={handleModalNext}
      />
    </>
  );
};

export default Activities;
