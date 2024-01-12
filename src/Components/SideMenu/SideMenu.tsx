import * as React from "react";
import { styled } from "@mui/system";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Person2Icon from "@mui/icons-material/Person2";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Settings } from "@mui/icons-material";
import NextLink from "next/link";
import { signOut } from "next-auth/react";
import scss from "./SideMenu.module.scss";

// Styled components
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  justifyContent: "flex-end",
}));

const DrawerList = styled(List)<{ open: boolean }>(({ theme, open }) => ({
  width: open ? 230 : 55,
  marginTop: theme.spacing(1),
}));

const DrawerListItemButton = styled(ListItemButton)<{ open: boolean }>(({ theme, open }) => ({
  display: "block",
  minHeight: 48,
  justifyContent: open ? "initial" : "center",
  px: theme.spacing(2.5),
}));

// Constants
const menuRouteList = ["data", "profile", "settings", ""];
const menuListTranslations = ["Data", "Profile", "Settings", "Sign Out"];
const menuListIcons = [
  <EqualizerIcon />,
  <Person2Icon />,
  <Settings />,
  <ExitToAppIcon />,
];

const SideMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = React.useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const handleListItemButtonClick = React.useCallback((text: string) => {
    if (text === "Sign Out") {
      signOut();
    }
    setOpen(false);
  }, []);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      className={scss.sideMenu}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: '#2c2c2c',
          transition: "width 0.3s ease",
          width: open ? 230 : 55,
          "& .MuiIconButton-root, & .MuiListItemIcon-root, & .MuiTypography-root": {
            color: '#f5f5f5',
          },
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle} edge="start" color="inherit" aria-label="menu">
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Divider />
      <DrawerList open={open}>
        {menuListTranslations.map((text, index) => (
          <ListItem key={index} disablePadding>
            <NextLink href={`/dashboard/${menuRouteList[index]}`}>
              <DrawerListItemButton
                onClick={() => handleListItemButtonClick(text)}
                title={text}
                aria-label={text}
                open={open}
              >
                <ListItemIcon>
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: '#f5f5f5',
                    opacity: open ? 1 : 0,
                  }}
                />
              </DrawerListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </DrawerList>
    </Drawer>
  );
};

export default SideMenu;
