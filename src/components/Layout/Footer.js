import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`${classes["footer-container"]} text-center fixed-bottom bg-light`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className={`${classes["copyright-author"]} text-secondary mb-0`}>
              Copyright &copy;
              <span id="year"> {new Date().getFullYear()} </span>
              <span>
                Designed & Developed by
                <span className="text-primary"> Sujay</span>
              </span>
            </p>
            <p className={`${classes["credits"]} text-secondary mb-0`}>
              Icons & Images Credits -
              <a
                href="https://www.flaticon.com/icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Flaticon
              </a>
              <a
                href="https://www.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Freepik
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
