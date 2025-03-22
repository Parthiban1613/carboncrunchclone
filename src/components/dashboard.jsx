const DashBoard = () => {
    return (
        <section className="bg-white p-5">
            <div className="bg-green-500  px-6 py-6 rounded-3xl overflow-hidden">
                <iframe 
                    src="https://carboncrunch.in" 
                    width="100%" 
                    height="500px" 
                    title="CarbonCrunch Dashboard"
                    className="rounded-lg border-0"
                />
            </div>
        </section>
    );
};

export default DashBoard;

  