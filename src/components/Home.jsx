import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Navbar } from "./";
import { Loader } from "./";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) navigate("/login");
  }, [user, loading]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Box sx={{ paddingTop: 10 }}>
            <Outlet />
          </Box>
        </>
      )}
    </>
  );
}
