import Header from "@/components/header";
export default function Home() {
  return (
    <main className="h-full overflow-hidden overflow-y-auto md:rounded-lg bg-neutral-900 w-full">
        <Header>
          <div className="mb-2">
            <span className="text-white hidden md:block text-3xl font-semibold">Good evening</span>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-4 gap-4"></div>
          </div>
        </Header>
 
    </main>
  );
}
