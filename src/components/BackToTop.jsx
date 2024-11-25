import React from "react";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <a
        href="/"
        onClick="topFunction()"
        id="back-to-top"
        className="back-to-top rounded fs-5"
      >
        <i data-feather="arrow-up" className="fea icon-sm align-middle">
          {scrollToTop}
        </i>
      </a>
    </>
  );
};

export default BackToTop;
