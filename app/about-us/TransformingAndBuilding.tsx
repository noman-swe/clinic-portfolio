import Image from "next/image";

interface Card { id: number; image: string; }
interface SectionProps {
  data: { title: string; subtitle: string; description: string; cards: Card[] };
}

export default function TransformingAndBuilding({ data }: SectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto space-y-16 px-6 lg:px-8">
        {/* Top Segment */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">{data.title}</h2>
          {/* <div className="h-1 w-16 bg-secondary mx-auto" /> */}
        </div>

        {/* Gallery Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {data.cards.map((card) => (
            <div key={card.id} className="relative h-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src={card?.image}
                alt="Healthcare delivery"
                fill
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Bottom Segment */}
        <div className="text-center container px-6 lg:px-8 mx-auto space-y-4 pt-8">
          <h3 className="text-2xl md:text-3xl font-bold text-primary">{data.subtitle}</h3>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">{data.description}</p>
        </div>
      </div>
    </section>
  );
}