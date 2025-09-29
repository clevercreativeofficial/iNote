// app/page.tsx
import { INoteApp } from '@/components/inote-app';
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar/>
      <INoteApp />
    </main>
  );
}