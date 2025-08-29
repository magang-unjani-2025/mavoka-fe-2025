import { Container } from "@/app/components/Container";

type Props = {
  title: string;
  intro: string;
  children?: React.ReactNode; // nanti isi accordion di sini
};

export function RoleGuideDetail({ title, intro, children }: Props) {
  return (
    <main className="py-10">
      <Container>
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-black/70 mb-6">{intro}</p>
        <div className="rounded-xl border border-black/10 p-4">
          {children ?? <p className="text-black/70">Konten panduan akan ditambahkan.</p>}
        </div>
      </Container>
    </main>
  );
}
