import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Container } from "./styles/container";
import GlobalStyles from "./styles/global";
import Home from "./pages/Home";

/* import Footer from "./template/Footer";
import Header from "./template/Header";
 */
function App() {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={theme}>
        <Container>
          <Home></Home>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
