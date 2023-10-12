import { Link } from "react-router-dom";

function Home() {
  const features: { [feature: string]: string } = {
    routine:
      "A custom routine built by you for each day of the week, it's really intuitive.",
    calendar:
      "A visual testament to your fitness journey. With each completed workout, you illuminate the calendar, creating a radiant record of your dedication and progress, day by day.",
    simplicity:
      "This tool is designed to track your progress without adding unnecessary complexity.",
  };

  return (
    <div className="w-full h-full flex flex-col items-center relative">
      <section className="w-full text-xl font-medium">
        Welcome to
        <span className="text-gold font-bold"> CONST </span>
        your personal fitness app. <br />
        <p className="my-2">App Features</p>
        {Object.entries(features).map(([feature, description], i) => (
          <details key={i} className="mb-2">
            <summary className="text-gold font-bold capitalize">
              {feature}
            </summary>
            <p className="font-light text-sm p-2 bg-black/25 rounded-md">
              {description}
            </p>
          </details>
        ))}
      </section>

      <Link
        to={"/Register"}
        className="btn-style absolute bottom-0 right-0 m-4"
      >
        continue
      </Link>
    </div>
  );
}

export default Home;
