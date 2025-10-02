// app/page.tsx
import { INoteApp } from '@/components/inote-app';

export default function Home() {
  return (
    <main className="min-h-fit bg-background">
      <INoteApp />
    </main>
  );
}