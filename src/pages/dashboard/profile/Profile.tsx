import React, { useState } from "react";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

interface FormData {
  firstName: string;
  lastName: string;
  email: string | undefined;
  password: string;
  confirmPassword: string;
  receiveEmails: boolean;
}

const Profile: React.FC = () => {
  const { data: session } = useSession();

  const names = session?.user?.name?.split(" ") || [];
  const firstName = names[0] || "";
  const lastName = names.slice(1).join(" ") || "";

  const [formData, setFormData] = useState<FormData>({
    firstName: firstName,
    lastName: lastName,
    email: session?.user?.email || "",
    password: "",
    confirmPassword: "",
    receiveEmails: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receiveEmails" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData); // Submit form data to server here
  };

  const background = {
    background: "none",
    boxShadow: "none",
    width: "auto",
    justifyContent: "center",
    border: "none",
    height: "auto",
    display: "flex",
    alignItems: "center"
  }

  const h1title = {
    marginTop: "50px"
  }

  const font ={
    fontFamily: "sans-serif"
  }



  return (
    <div style={font}>
      <h1 style={h1title}>Profile</h1>
      <Box>
        <Typography variant="h4" sx={{ paddingBottom: 4 }} >
          Hey {session?.user?.name || "User"}, welcome to your profile 👋
        </Typography>
        <Paper sx={{ padding: "1rem 2rem" }}style={background}>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  sx={{
                    height: 100,
                    width: 100,
                    marginBottom: 2,
                  }}
                  src={session?.user?.image as string}
                />
              </Box>
              <form
                onSubmit={handleSubmit}
                style={{ maxWidth: 600, margin: "0 auto" }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="email"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="receiveEmails"
                          checked={formData.receiveEmails}
                          onChange={handleChange}
                          color="primary"
                        />
                      }
                      label="Receive sales analytics emails"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Save Changes
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default Profile;
