import { Typography, Box, TextField, Grid, Button } from "@mui/material";
import image from "../images/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPasswd, setEnteredPasswd] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/");
    }
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(enteredEmail, enteredPasswd);

    return setIsLoggedIn(true);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#F7F7F7" }}
    >
      <Grid container>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",

            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Giriş Yap
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={enteredEmail}
                onChange={(e) => {
                  setEnteredEmail(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Şifre"
                type="password"
                id="password"
                autoComplete="current-password"
                value={enteredPasswd}
                onChange={(e) => {
                  setEnteredPasswd(e.target.value);
                }}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Giriş Yap
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AuthPage;
