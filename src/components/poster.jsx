import One from '../assets/images/poster1.jpg'

const Poster = () => {
    return (
      <section className=" flex items-center justify-center rounded-2xl p-10 animate-fadeIn" style={{ backgroundImage: `url(${One})`, height:"500px" }}>
        <div >
        <div className="text-center text-black px-4">
          <h1 className="text-5xl font-bold">GHG Accounting</h1>
          <h2 className="text-5xl font-bold mt-4">Scope 1, Scope 2, Scope 3</h2>
          <p className="mt-6 text-2xl">
            Track, minimize, offset, and report your carbon emissions effortlessly to drive faster decarbonization progress.
          </p>
        </div>
        </div>
      </section>
    );
  };
  
  export default Poster;
  