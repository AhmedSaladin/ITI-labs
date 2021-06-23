// import "./404.css";
export default function Not_found() {
  return (
    <header className="top-header">
      {/* dust particel */}
      <div>
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>
      {/* Dust particle end */}

      <div className="lamp__wrap">
        <div className="lamp">
          <div className="cable"></div>
          <div className="cover"></div>
          <div className="in-cover">
            <div className="bulb"></div>
          </div>
          <div className="light"></div>
        </div>
      </div>
      {/* END Lamp */}
      <section className="error">
        {/* Content */}
        <div className="error__content">
          <div className="error__message message">
            <h1 className="message__title">Page Not Found</h1>
            <p className="message__text">
              We're sorry, the page you were looking for isn't found here. The
              link you followed may either be broken or no longer exists. Please
              try again
            </p>
          </div>
          <div className="error__nav e-nav">
            <a
              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwisr8GLiIHsAhXUX3wKHSQ9C944HhAWMAd6BAgIEAE&url=https%3A%2F%2Fwww.enationalelectronics.com%2F&usg=AOvVaw0CoGpfiGKRton9yE4Q8_Hv"
              className="e-nav__link"
            ></a>
          </div>
        </div>
        {/* END Content  */}
      </section>
    </header>
  );
}
