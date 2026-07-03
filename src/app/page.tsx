import { MainLayout } from "../layouts/main/main-layout";
import { SkillSection } from "../components/skill-section/skill-section";
import { WorkCard } from "../components/work-card/work-card";



const works = [
  {
    title: "Portfolio Site",
    description: "自分のプロフィール、スキル、制作物をまとめるサイトです。",
    href: "#",
  },
  {
    title: "Todo App",
    description: "タスクの追加、完了、削除ができる練習用アプリです。",
    href: "#",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-10 py-7">
        <section className="rounded-3xl px-6 py-12 bg-neutral-950 text-white">
          <p className="text-sm font-bold text-sky-300">Portfolio</p>
          <h1 className="mt-4 text-4xl font-bold">Hello,World I am Alto</h1>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Next.jsとTailwind CSSを使って、ポートフォリオを作っています。
          </p>
        </section>

        <SkillSection />

        <section id="works">
          <h2 className="text-2xl font-bold text-neutral-900">Works</h2>
          <div className="grid gap-8 mt-6 md:grid-cols-3">
            {works.map((work) =>(
              <WorkCard
                key={work.title}
                title={work.title}
                description={work.description}
                href={work.href}
              />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
