import Intro from "../Components/Intro.jsx";
import StarBackground  from "../Components/StarBackground.jsx";

const Home = () => {
  return (
    <>
    <Intro/>
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      {/* Your home page content */}
    </div>
    </>
  );
};

export default Home;