import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CommercialPage } from './pages/CommercialPage';
import { ResidentialPage } from './pages/ResidentialPage';
import { CommercialWindowCleaningPage } from './pages/CommercialWindowCleaningPage';
import { HotelCleaningPage } from './pages/HotelCleaningPage';
import { DataCenterCleaningPage } from './pages/DataCenterCleaningPage';
import { ChurchCleaningPage } from './pages/ChurchCleaningPage';
import { SchoolsUniversityCleaningPage } from './pages/SchoolsUniversityCleaningPage';
import { MedicalCleaningPage } from './pages/MedicalCleaningPage';
import { LargeRetailCleaningPage } from './pages/LargeRetailCleaningPage';
import { ConvenienceStoreCleaningPage } from './pages/ConvenienceStoreCleaningPage';
import { HouseWashingPage } from './pages/HouseWashingPage';
import { RoofWashingPage } from './pages/RoofWashingPage';
import { SolarWashingPage } from './pages/SolarWashingPage';
import { RealtorPage } from './pages/RealtorPage';
import { AshburnPage } from './pages/AshburnPage';
import { GreatFallsPage } from './pages/GreatFallsPage';
import { RestonPage } from './pages/RestonPage';
import { LeesburgPage } from './pages/LeesburgPage';
import { MiddleburgPage } from './pages/MiddleburgPage';
import { PurcellvillePage } from './pages/PurcellvillePage';
import { SafetyPage } from './pages/SafetyPage';
import { BlogsPage } from './pages/BlogsPage';
import { ImageUploadPage } from './pages/ImageUploadPage';
import { ValidationPage } from './pages/ValidationPage';
import { TermsPage } from './pages/TermsPage';
import CareersPage from './pages/CareersPage';
import { OurProcessPage } from './pages/OurProcessPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/commercial/window-cleaning" element={<CommercialWindowCleaningPage />} />
          <Route path="/commercial/hotel-cleaning" element={<HotelCleaningPage />} />
          <Route path="/commercial/data-center-cleaning" element={<DataCenterCleaningPage />} />
          <Route path="/commercial/church-cleaning" element={<ChurchCleaningPage />} />
          <Route path="/commercial/schools-university-washing" element={<SchoolsUniversityCleaningPage />} />
          <Route path="/commercial/medical-cleaning" element={<MedicalCleaningPage />} />
          <Route path="/commercial/large-retail" element={<LargeRetailCleaningPage />} />
          <Route path="/commercial/convenience" element={<ConvenienceStoreCleaningPage />} />
          <Route path="/residential" element={<ResidentialPage />} />
          <Route path="/residential/house-washing" element={<HouseWashingPage />} />
          <Route path="/residential/roof-washing" element={<RoofWashingPage />} />
          <Route path="/residential/solar-washing" element={<SolarWashingPage />} />
          <Route path="/residential/who-we-serve/realtor" element={<RealtorPage />} />
          <Route path="/locations/ashburn" element={<AshburnPage />} />
          <Route path="/locations/greatfalls" element={<GreatFallsPage />} />
          <Route path="/locations/reston" element={<RestonPage />} />
          <Route path="/locations/leesburg" element={<LeesburgPage />} />
          <Route path="/locations/middleburg" element={<MiddleburgPage />} />
          <Route path="/locations/purcellville" element={<PurcellvillePage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/our-process" element={<OurProcessPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/admin/upload-image" element={<ImageUploadPage />} />
          <Route path="/validate" element={<ValidationPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
