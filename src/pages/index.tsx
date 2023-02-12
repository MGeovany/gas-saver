import Layout from "@/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <p className="text-white md:text-center items-center font-extrabold  md:text-7xl text-5xl w-4/5 text-left">
          Ahorrar combustible es fácil: presentamos
          <span className="text text-red-400"> Gas Saver</span>, tu héroe
          personal del coste del
          <br /> combustible
        </p>
      </Layout>
    </>
  );
}
