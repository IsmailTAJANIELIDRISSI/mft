import { ChevronLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import LazyImage from "../components/ui/LazyImage";
import { activities } from "../data/activities";

const ActivityDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const activity = activities.find((item) => item.slug === slug);

  if (!activity) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-mft-bg text-mft-grey-dark">
      <header className="sticky top-0 z-30 bg-mft-dark/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="MFT Logo" className="h-11 md:h-12" />
          </Link>
          <Link
            to="/#activites"
            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-mft-orange transition-colors"
          >
            <ChevronLeft size={16} />
            Retour aux activités
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-12 py-14 lg:py-18">
        <div className="max-w-4xl mb-10">
          <p className="text-xs uppercase tracking-widest text-mft-orange font-bold mb-4">
            Activité #{activity.id}
          </p>
          <h1 className="font-heading text-3xl lg:text-5xl text-mft-dark mb-5 leading-tight">
            {activity.detailTitle ?? activity.title}
          </h1>
          <p className="text-lg text-mft-grey leading-relaxed">
            {activity.summary}
          </p>
        </div>

        <LazyImage
          src={activity.heroImage}
          alt={activity.title}
          wrapperClassName="rounded-2xl overflow-hidden shadow-md mb-12"
          className="w-full max-h-[520px] object-cover"
        />

        <section className="bg-white rounded-2xl border border-gray-100 p-8 lg:p-10 shadow-sm mb-12">
          <div className="space-y-8">
            {activity.content.map((block, index) => (
              <article key={`${activity.slug}-${index}`} className="space-y-4">
                {block.title ? (
                  <h2 className="text-xl lg:text-2xl text-mft-dark">
                    {block.title}
                  </h2>
                ) : null}

                {block.text ? (
                  <p className="text-mft-grey-dark leading-relaxed">{block.text}</p>
                ) : null}

                {block.bullets?.length ? (
                  <ul className="space-y-2">
                    {block.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-mft-orange shrink-0" />
                        <span className="text-mft-grey-dark leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl lg:text-3xl text-mft-dark mb-6">
            Galerie de l'activité
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {activity.images.map((image, index) => (
              <LazyImage
                key={image}
                src={image}
                alt={`${activity.title} - visuel ${index + 1}`}
                wrapperClassName="h-64 rounded-xl shadow-sm border border-gray-100 bg-white"
                className="h-full w-full object-cover"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ActivityDetailPage;
