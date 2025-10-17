import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PreMeetingPrep from './pages/PreMeetingPrep';
import OpeningScript from './pages/OpeningScript';
import AzureVsLegacy from './pages/AzureVsLegacy';
import ObjectionHandling from './pages/ObjectionHandling';
import ConversationControl from './pages/ConversationControl';
import ReadingTheRoom from './pages/ReadingTheRoom';
import ClosingTheMeeting from './pages/ClosingTheMeeting';
import Resources from './pages/Resources';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="prep" element={<PreMeetingPrep />} />
          <Route path="opening-script" element={<OpeningScript />} />
          <Route path="azure-vs-legacy" element={<AzureVsLegacy />} />
          <Route path="objections" element={<ObjectionHandling />} />
          <Route path="conversation-control" element={<ConversationControl />} />
          <Route path="reading-the-room" element={<ReadingTheRoom />} />
          <Route path="closing" element={<ClosingTheMeeting />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
