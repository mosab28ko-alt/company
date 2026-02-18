import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // الصفحة التي أنشأناها فوق
import WorkPage from "./pages/WorkPage"; // صفحة الأعمال الجديدة

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-16 pt-6 md:px-6 lg:px-8">
          
          {/* الـ Header يبقى ثابتاً في كل الصفحات */}
          <Header />

          <Routes>
            {/* المسار الرئيسي يعرض كل السكاشن */}
            <Route path="/" element={<Home />} />
            
            {/* مسار الأعمال يفتح صفحة منفصلة تماماً */}
            <Route path="/work" element={<WorkPage />} />
          </Routes>

          {/* الـ Footer يبقى ثابتاً */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}