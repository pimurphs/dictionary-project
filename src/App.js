import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row">
            <div className="col">
              <h1>*DICTIONARY*</h1>
            </div>
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="gradient" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/filipadaguiarrodrigues/"
              rel="noopener noreferrer"
            >
              Filipa Rodrigues
            </a>
            , open-sourced on{" "}
            <a
              href="https://github.com/pimurphs/dictionary-project"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
