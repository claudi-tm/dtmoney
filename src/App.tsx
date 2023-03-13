import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Dashboard></Dashboard>
    </>
  );
}
