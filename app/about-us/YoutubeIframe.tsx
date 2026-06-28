interface YoutubeProps {
    data: { videoUrl: string; title: string };
}

export default function YoutubeIframe({ data }: YoutubeProps) {
    return (
        <section className="bg-gray-light py-16 ">
            <div className="container mx-auto aspect-video rounded-xl overflow-hidden  ">
                <iframe
                    src={data.videoUrl}
                    title={data.title}
                    className="w-full h-full px-6 lg:px-8 shadow-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />


            </div>
        </section>
    );
}