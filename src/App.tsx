import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import GlobalStyles from "./styles/global";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

/* import Footer from "./template/Footer";
import Header from "./template/Header";
 */
function App() {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={theme}>
        <Home></Home>
        <About></About>
        <Projects></Projects>
      </ThemeProvider>
    </>
  );
}

export default App;
