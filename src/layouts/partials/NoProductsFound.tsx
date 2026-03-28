const NoProductsFound = () => {
  return (
    <section className="section min-h-[50dvh] grid place-items-center">
      <div className="container">
        <div className="text-center">
          <h2 className="text-h4 mb-4">No products found</h2>
          <p className="text-text-dark">Please check back later.</p>
        </div>
      </div>
    </section>
  );
};

export default NoProductsFound;
