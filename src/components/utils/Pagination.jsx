const Pagination = ({ page, lastPage, setPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (page - 1 > 0) {
      setPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  const handleNext = () => {
    if (page < lastPage) {
      setPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <button
        onClick={handlePrev}
        className="border border-color-secondary p-1 rounded-md hover:bg-color-secondary active:bg-color-hover"
      >
        prev
      </button>
      <p className="px-2 text-sm">
        {page} of {lastPage}
      </p>
      <button
        onClick={handleNext}
        className="border border-color-secondary p-1 rounded-md hover:bg-color-secondary active:bg-color-hover"
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
