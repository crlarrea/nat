import "./App.css";



function App() {
  return (
    <>
      <header>
        <article>
          <div>
            <p>+Mojitos</p>
            <p>+Snacks</p>
            <p>+Clearance</p>
          </div>
          <h2>
            your club <span>presents</span>
          </h2>

          <div>
            <p>
              rsvp
              <span>only</span>
            </p>
          </div>
        </article>
        <article>
          <div>
            <p>7pm</p>
            <p>11pm</p>
          </div>
          <div>
            <p>sept</p>
            <p>
              15<sup>th</sup>
            </p>
          </div>
        </article>
      </header>
      <main>
        {/* <audio autoPlay>
          <source src={audio} type="audio/mp4" />
        </audio> */}

        <p>very demure</p>
        <p>farewell</p>
        <p>very mindful</p>
      </main>
      <footer>
        <article>
          <span>hosted by</span>
          <p>dj natcase</p>
        </article>
        <article>
          <p>sunday night</p>
          <span>9, La Paz 11300 - La Linea de la Concepción</span>
          <span>
            R.S.V.P:{" "}
            <a href="https://wa.me/34611038624/?text=Hello%2C%20Natasha!">
              +34 611 03 86 24
            </a>
          </span>
        </article>
      </footer>
    </>
  );
}

export default App;
