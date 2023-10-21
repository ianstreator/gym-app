import { Link } from "react-router-dom";

function Home() {
  const features: { [feature: string]: string } = {
    routine: "Build a custom routine for each day of the week.",
    calendar: "A reactive calendar that fills up based on your history.",
    reports: "Set a periodic time frame to get reports on your progress.",
  };

  return (
    <div className="w-full h-full flex flex-col items-center relative">
      <section className="w-full text-xl font-medium">
        <span className="text-gold font-bold"> CONST </span>
        your personal fitness log. <br />
        {Object.entries(features).map(([feature, description], i) => (
          <div key={i} className="mb-2">
            <h1 className="text-gold font-bold capitalize">
              {feature}
            </h1>
            <p className="font-light text-sm p-2 bg-black/25 rounded-md">
              {description}
            </p>
          </div>
        ))}
      </section>

      <Link
        to={"/Register"}
        className="btn-style mt-auto w-full text-center"
      >
        continue
      </Link>
    </div>
  );
}

export default Home;
