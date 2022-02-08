import Login from "components/Login";
import React from "react";

const AdminLogin = () => {
  const handleSubmit = async (username: string, password: string) => {
    if (username.length <= 0 || password.length <= 0) return "Wajib diisi";

    await new Promise<void>((res) => setTimeout(() => res(), 1000));

    return "Test error";
  };

  return <Login onSubmit={handleSubmit} />;
};

export default AdminLogin;
