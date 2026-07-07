import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpenses from "../components/Fragments/CardExpenses";
import { expenseService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const data = await expenseService();
      console.log("Expenses API response:", data);
      console.log("First item:", data?.[0]);
      setExpenses(data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data expenses",
        severity: "error",
      });
      if (err.status === 401) {
        setTimeout(() => {
          logout();
        }, 3000);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <MainLayout>
        <CardExpenses data={expenses} loading={loading} />

        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  );
}

export default Expense;
