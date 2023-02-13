import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="text-white md:text-center flex flex-col justify-center font-extrabold  md:text-7xl text-5xl w-4/5 text-left h-screen">
          Ahorrar combustible es fácil: presentamos
          <span className="text-red-400 contents"> Gas Saver</span>, tu héroe
          personal del coste del <br />
          combustible
        </div>
      </Layout>
    </>
  );
}
