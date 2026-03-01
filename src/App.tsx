import { useEffect } from "react";
import AppLoader from "./components/ui/AppLoader";
import HomePage from "./pages/HomePage";

function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Outfit:wght@400;600;700;800&family=Syne:wght@600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <AppLoader />
      <HomePage />
    </>
  );
}

export default App;
