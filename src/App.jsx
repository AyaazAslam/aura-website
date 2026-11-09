import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import LanguageProvider from "./common/LanguageProvider";
import ScrollToTop from "./common/ScrollToTop";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import { forthcomingPages } from "./common/navigation";
import Home from "./pages/home";
import Edito from "./pages/Edito";
import InOut from "./pages/InOut";
import Forthcoming from "./pages/Forthcoming";
import NotFound from "./pages/NotFound";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />

        <div className="flex min-h-screen flex-col">
          <Navbar />

          <div className="flex-1">
            <Routes>
              {/* Site default landing — Edito (matches Vercel `/` → `/edito`) */}
              <Route path="/" element={<Navigate to="/edito" replace />} />
              <Route path="/edito" element={<Edito />} />
              {/* Full magazine home (Hero, Beauty, Latest, …) */}
              <Route path="/magazine" element={<Home />} />
              <Route path="/in-out" element={<InOut />} />

              {Object.entries(forthcomingPages).map(([slug, page]) => (
                <Route
                  key={slug}
                  path={`/${slug}`}
                  element={<Forthcoming page={page} />}
                />
              ))}

              <Route path="/stories/:slug" element={<ArticlePage />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
