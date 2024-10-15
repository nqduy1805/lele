import React, { useEffect, useState } from 'react';
const role={
  "name": "Quản trị viên",
  "modules": [
    {
      "module_name": "Người dùng",
      "actions": ["Xem", "Thêm", "Sửa", "Xóa"]
    },
    {
      "module_name": "Bài viết",
      "actions": ["Xem", "Thêm", "Sửa"]
    }
  ]
}
const RoleDetail = () => {


  if (!role) {
    return <p className="text-center text-blue-500 font-semibold">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-8 p-6">
      {/* Cột trái */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg shadow-lg border border-blue-200">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b border-blue-300 pb-2">Chi tiết vai trò</h2>
        
        {/* Hiển thị Tên vai trò */}
        <div className="mb-4">
          <label className="font-semibold text-blue-600">Tên vai trò:</label>
          <p className="ml-4 text-blue-900 font-medium">{role.name}</p>
        </div>

        {/* Hiển thị Mô-đun */}
        <div className="mb-4">
          <label className="font-semibold text-blue-600">Mô-đun:</label>
          <ul className="ml-4 list-disc text-blue-800">
            {role.modules.map((module, index) => (
              <li key={index} className="mb-1">{module.module_name}</li>
            ))}
          </ul>
        </div>

        {/* Hiển thị Hành động theo format "tên mô đun: hành động" */}
        <div className="mb-4">
          <label className="font-semibold text-blue-600">Hành động:</label>
          <ul className="ml-4 list-disc text-blue-800">
            {role.modules.map((module, index) => (
              <li key={index} className="mb-1">
                <span className="text-blue-700 font-semibold">{module.module_name}</span>: {module.actions.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cột phải */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-300 pb-2">Thông tin liên quan</h2>
        {/* Nội dung cho cột phải, có thể thêm các phần khác tùy nhu cầu */}
        <p className="text-gray-600">Hiển thị các thông tin khác ở đây...</p>
      </div>
    </div>
  );
};

export default RoleDetail;
