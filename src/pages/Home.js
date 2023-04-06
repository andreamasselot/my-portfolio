import banner from "../assets/img/home-banner.jpg";
const Home = () => {
  return (
    <>
      <div className="homepage-container">
        <div className="home-title">
          <h1>Andréa Masselot</h1>
          <h2>Web Developer</h2>
          <h3>Javascript, React.js, Node.js</h3>
          <button>Next</button>
        </div>
        <section className="homepage-body">
          <div className="banner-image">
            <img src={banner} alt="illustration" />
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
