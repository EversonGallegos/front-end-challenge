import ArticleDetail from "./pages/ArticleDetail";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { Suspense } from "react";

function App() {
  const HomePage = React.lazy(() => import('./pages/Home'))
  const Article = React.lazy(() => import('./pages/ArticleDetail'))
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/:slug" element={<Article />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
