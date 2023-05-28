import { Routes, Route } from "react-router-dom";
import Page from "./scene/Page";
import Landing from "./scene/Landing";
import Category from "./scene/Category";
import NotFound from "./scene/NotFound";
const App = () => {
  return (
    <div className="app">
      <Routes>
        {/* TODO render partly on root; load more blogs */}
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path=":slug" element={<Page />} />
        </Route>
        <Route path="/categories/">
          <Route index element={<NotFound />} />
          <Route path=":category" element={<Category />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
