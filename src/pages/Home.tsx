import { Link } from "react-router-dom";

function Home() {
  const features: { [feature: string]: string } = {
    schedule: "Build a custom routine for each day of the week.",
    calendar: "A reactive calendar that fills up based on your history.",
    reports: "Set a periodic time frame to get reports on your progress.",
  };

  return (
    <div className="h-full flex flex-col items-center">
      <section className="w-full text-xl font-medium">
        <p className="text-center">
          Welcome to
          <span className="text-gold font-bold"> CONST </span>
          your personal fitness application.
        </p>
        <br />
        {Object.entries(features).map(([feature, description], i) => (
          <div key={i} className="mb-2">
            <h1 className="text-gold font-light uppercase tracking-widest">{feature}</h1>
            <p className="text-sm py-2">
              {description}
            </p>
          </div>
        ))}
      </section>

      <Link to={"/Register"} className="btn-style mt-auto w-full text-center">
        continue
      </Link>
    </div>
  );
}

export default Home;
