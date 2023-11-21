import Header from "@/components/header";
import RecentlyPlayedListItem from "@/components/recently-played-list-item";
export default function Home() {
  return (
    <main className="h-full overflow-hidden overflow-y-auto md:rounded-lg bg-[#121212] w-full">
        <Header>
          <div className="mb-2">
            <span className="text-white hidden md:block text-3xl font-semibold">Good evening</span>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-4">
              <RecentlyPlayedListItem image="/images/madvillainy.jpg" name="Madvillainy" href="/albums/madvillainy"/>
              <RecentlyPlayedListItem image="/images/hugo.png" name="hugo" href="/albums/hugo"/>
              <RecentlyPlayedListItem image="/images/georgetown.jpeg" name="Georgetown" href="/albums/georgetown"/>
              <RecentlyPlayedListItem image="/images/perm-damage-joesef.png" name="Permanent Damage" href="/albums/madvillainy"/>
              

            </div>
          </div>
        </Header>
        <div className="mt-4 mb-7 px-6">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold text-white">Relaxing</span>
          </div>
          <div className="">
            List of songs
          </div>
        </div>
 
    </main>
  );
}
