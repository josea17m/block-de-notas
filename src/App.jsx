/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

// import { useSwipeable } from "react-swipeable";

function App() {
  const [notas, setNotas] = useState([]);
  const [notaEditar, setNotaEditar] = useState({});

  const [nb, setNb] = useState(false);

  const [themeBg, setThemeBg] = useState("b1f1f1f");
  const [themeText, setThemeText] = useState("tfff");
  const [theme, setTheme] = useState({ themeText, themeBg });

  const notaSave = (n) => {
    const notasActualizados = notas.map((notaState) =>
      notaState.id === n.id ? n : notaState
    );
    setNotas(notasActualizados);
    setNotaEditar({});
  };

  const saveNote = (n) => {
    const notasActualizados = notas.map((notaState) =>
      notaState.id === n.id ? n : notaState
    );
    if (n.id) {
      console.log("Editando");
    }
    setNotas([...notas, n]);
  };

  // Theme
  const switchTheme = () => {
    if (themeBg == "b1f1f1f") {
      setThemeBg("bfff");
      setThemeText("t000");
      return;
    }
    setThemeText("tfff");
    setThemeBg("b1f1f1f");
  };
  useEffect(() => {
    setTheme({ themeText, themeBg });
  }, [themeBg, themeText]);

  // const handlers = useSwipeable({
  //   trackMouse: true,
  //   onSwipedRight: () => setNb(true),
  // });

  //{...handlers}

  return (
    <Layout>
      <Navbar nb={nb} setNb={setNb} theme={theme} switchTheme={switchTheme} />
      <MainContent notas={notas} saveNote={saveNote} nb={nb} setNb={setNb} theme={theme} />
    </Layout>
  );
}

export default App;
