import { Container } from "@/app/components/Container";

export default function RoleGuideLayout({
  breadcrumb,
  title,
  intro,
  children,
}: {
  breadcrumb: React.ReactNode;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="py-8">
      <Container>
        <nav className="mb-4 text-sm text-black/60">{breadcrumb}</nav>
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
        {intro && <p className="text-black/70 mb-6">{intro}</p>}
        {children}
      </Container>
    </main>
  );
}
