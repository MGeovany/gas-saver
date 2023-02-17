import Card from "@/components/home/card";
import Layout from "@/components/layout";

export default function Home() {
  const features = [
    {
      title: "Optimización de ruta",
      description:
        "con Gas-Saver podrá optimizar la ruta en función de factores como la distancia, el tiempo y la eficiencia del combustible.",
    },
    {
      title: "Entradas personalizables",
      description:
        "Gas-Saver permite a los usuarios ingresar sus propios valores para variables como costos de combustible, marca y modelo del vehículo y condiciones de conducción.",
    },
    {
      title: "Información actualizada sobre el costo del combustible",
      description:
        "Gas-Saver proporciona información precisa y actualizada sobre el costo del combustible según la ubicación del usuario.",
    },
    {
      title: "Planificación de viajes",
      description:
        "Gas-Saver podrá permitir a los usuarios planificar viajes ingresando una ubicación de inicio y finalización, así como la hora de llegada deseada, y calcular el costo estimado del viaje.",
    },
    {
      title: "Informes y exportación de datos",
      description:
        "Con Gas-Saver podrá generar informes detallados y permitir a los usuarios exportar datos para su posterior análisis.",
    },
    {
      title: "Integraciones con terceros",
      description:
        "La API de Gas-Saver se podría integrar con terceros que deseen ofrecer como un agregado una estimación de costos dentro de sus aplicaciones",
    },
  ];
  return (
    <>
      <Layout scrollPosition={50}>
        <div className="text-white md:text-center flex flex-col justify-center items-center font-bold md:text-7xl text-5xl w-4/5 text-left h-screen">
          Aprende a ahorrar dinero en combustible con
          <span className="text-red-400 contents main-title-color font-extrabold">
            {" "}
            Gas Saver
          </span>
          , tu héroe personal en el coste del combustible.
          <button className="main-button text-white font-bold text-4xl py-2 w-80 rounded-lg mt-48">
            Pruébalo Ahora!
          </button>
        </div>
        <div className="my-10 md:h-screen flex flex-col justify-center items-center features-background-color">
          <p className="font-extrabold text-5xl text-center features-text">Características</p>
          <div className="my-10 grid align-middle justify-items-center sm:w-full animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 md:w-9/12 px-10 md:grid-cols-3 features-text">
            {features.map(({ title, description }) => (
              <Card key={title} title={title} description={description} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
