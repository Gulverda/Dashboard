import React from "react";
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Avatar, Tooltip, Menu, MenuItem } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { signIn, signOut, useSession } from "next-auth/react";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const { data: session } = useSession();
  const userProfileImg = session?.user?.image as string;
  const [anchorElUser, setAnchorElUser] = React.useState<HTMLElement | null>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const tabletCheck = useMediaQuery("(min-width: 768px)");

  return (
    <AppBar position="static" sx={{ marginBottom: "30px", paddingLeft: "50px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DataSoft
          </Typography>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DataSoft
          </Typography>
          {tabletCheck && (
            <Box sx={{ paddingRight: 5, marginLeft: "auto" }}>
              <Typography>Signed in as {session?.user?.email}</Typography>
            </Box>
          )}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={session?.user?.name as string} src={userProfileImg} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              disableScrollLock // Add this prop to disable scroll lock
            >
              <MenuItem onClick={() => (session ? signOut() : signIn())}>
                <Typography textAlign="center">{session ? "Logout" : "Login"}</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
