interface ArticleContentProps {
  content: string;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-slate max-w-none text-slate-600 space-y-6 leading-relaxed text-sm md:text-base">

      {content.split("\n\n").map((paragraph, index) => {

        if (paragraph.startsWith("###")) {
          return (
            <h3
              key={index}
              className="text-lg md:text-xl font-bold text-primary pt-4 tracking-tight"
            >
              {paragraph.replace("###", "").trim()}
            </h3>
          );
        }

        if (paragraph.startsWith(">")) {
          return (
            <blockquote
              key={index}
              className="border-l-4 border-sky-400 bg-slate-50 p-4 rounded-r-md italic text-slate-700 my-4"
            >
              {paragraph.replace(">", "").trim()}
            </blockquote>
          );
        }

        return (
          <p key={index} className="text-slate-600">
            {paragraph.trim()}
          </p>
        );
      })}

    </div>
  );
}