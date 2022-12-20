import { Route, Routes } from "react-router-dom";
import Directory from "./components/directory/directory.component.jsx";
import NavigationBar from "./components/navigation/navigation.component.jsx";
import SignIn from "./pages/sign-in/sign-in.component.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Directory />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
