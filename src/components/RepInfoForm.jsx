import { useState } from "react";

export default function RepInfoForm() {
  const [repInfo, setRepInfo] = useState({
    repCode: "",
    repName: "",
    repPhone: "",
    userCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRepInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        اطلاعات نماینده
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className="input"
          placeholder="کد نماینده"
          name="repCode"
          value={repInfo.repCode}
          onChange={handleChange}
        />
        <input
          className="input"
          placeholder="نام نماینده"
          name="repName"
          value={repInfo.repName}
          onChange={handleChange}
        />
        <input
          className="input"
          placeholder="شماره تماس"
          name="repPhone"
          value={repInfo.repPhone}
          onChange={handleChange}
        />
        <input
          className="input"
          placeholder="کد مشتری"
          name="userCode"
          value={repInfo.userCode}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
