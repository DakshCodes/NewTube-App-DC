import React from "react";
import {AppContext} from '../src/context/contextApi';
import Header from "./components/Header";
import Feed from './components/Feed';
import SearchResults from './components/SearchResults';
import VideoDetail from './components/VideoDetail';
// Router.
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <AppContext>
     <BrowserRouter>
       <div className="flex flex-col h-full">
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/searchresult/:searchQuery" element={<SearchResults />} />
          <Route path="/video/:id" element={<VideoDetail />} />
        </Routes>
       </div>
     </BrowserRouter>
    </AppContext>
  );
}

export default App;
