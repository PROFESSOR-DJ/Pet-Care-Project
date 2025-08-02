// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/care-centers" element={<CareCenterListing />} />
        <Route path="/care-centers/:id" element={<CareCenterDetail />} />
        <Route path="/adoption-exchange" element={<AdoptionHub />} />
        <Route path="/adoption-exchange/:id" element={<AdoptionDetail />} />
        <Route path="/vet-clinics" element={<VetClinicListing />} />
        <Route path="/vet-clinics/:id" element={<VetClinicDetail />} />
        <Route path="/pet-info" element={<PetInfoOverview />} />
        <Route path="/pet-info/:species" element={<PetSpeciesPage />} />
        <Route path="/pet-shop" element={<PetShopListing />} />
        <Route path="/pet-shop/:id" element={<AccessoryDetail />} />
        <Route path="/login" element={<AuthPage mode="login" />} />
        <Route path="/signup" element={<AuthPage mode="signup" />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/booking-confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}