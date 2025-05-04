// App.jsx
import RepInfoForm from "./components/RepInfoForm";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header />
      <RepInfoForm />
      {/* بقیه فرم‌ها اینجا اضافه می‌شن */}
    </div>
  );
}
