import {Navbar} from "@/components/navbar";

export default function Home() {
  return (
      <main className="relative bg-black-100 flex justify-center items-center
                flex-col overflow-clip mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
              <Navbar/>
          </div>
      </main>
  );
}
