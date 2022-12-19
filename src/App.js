import { Route, Routes } from "react-router-dom";
import Directory from "./components/directory/directory.component.jsx";
import NavigationBar from "./components/navigation/navigation.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route to="/" element={<NavigationBar />}>
        <Route index element={<Directory />} />
      </Route>
    </Routes>
  );
};

export default App;
