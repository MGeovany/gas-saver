import Layout from "@/components/layout";
import { useSignInModal } from "@/components/layout/signInModal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const About = () => {
  const { data: session } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();

  const router = useRouter();

  const toDashboard = () => {
    if (!session) {
      setShowSignInModal(true);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <Layout>
      <div className="mt-20 md:h-screen  flex flex-col items-center justify-center md:w-11/12 sm:w-full">
        <h1 className="leading-snug md:text-7xl text-4xl font-bold mb-10">
          About <span className="text-red-400 contents"> Gas Saver</span>
        </h1>
        <div className="md:w-4/6 w-full px-5">
          <p className="text-xl leading-relaxed text-justify">
            Gas-Saver se fundó con la misión de ayudar a los conductores a
            ahorrar dinero en combustible. Nuestro equipo de expertos en los
            campos de la tecnología y el transporte se han unido para crear un
            producto que es a la vez fácil de usar y preciso. Comprendemos la
            frustración que supone preocuparse constantemente{" "}
            <span className=" text-red-400">
              por el coste de la gasolina para los desplazamientos diarios
            </span>{" "}
            y los viajes por carretera, y nos dedicamos a ofrecer una solución
            que elimine ese estrés.
            <br />
            <br />
            Nuestra aplicación está diseñada para ser fácil de usar y eficiente,
            para que pueda realizar un seguimiento rápido del consumo de
            combustible de su coche,{" "}
            <span className=" text-green-400">
              calcular los gastos y comparar los costes de los diferentes
              vehículos.
            </span>{" "}
            Nuestro objetivo es ayudarle a reducir sus gastos de combustible y
            <span className=" text-blue-400">maximizar sus ahorros,</span> para
            que pueda dedicar más tiempo a las cosas que más le importan.
          </p>
          <button
            onClick={() => toDashboard()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-2 w-80 rounded-lg mt-20"
          >
            {!session ? "Iniciar" : "Probar Demo"}
          </button>
        </div>
      </div>
      <SignInModal />
    </Layout>
  );
};

export default About;
