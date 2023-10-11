import { Link } from "react-router-dom";

function Home() {
  const features: { [feature: string]: string } = {
    routine:
      "Build a custom routine to follow throughout your week, it's pretty simple.",
    calendar:
      "The calendar is a dynamic workout chart where days illuminate based on workout entry.",
    simplicity:
      "Our app prioritizes essential information, providing a streamlined and intuitive experience for tracking routine progress.",
  };

  return (
    <div className="w-full h-full flex flex-col items-center relative">
      <section className="w-full text-xl font-medium">
        Welcome to
        <span className="text-gold font-bold"> CONST </span>
        your personal fitness app. <br /> <br />
        App Features <br />
        {Object.entries(features).map(([feature, description], i) => (
          <details key={i} className="mb-2">
            <summary className="text-gold font-bold capitalize">
              {feature}
            </summary>
            <p className="font-light text-sm p-2">{description}</p>
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
