import * as React from "react";
import { CSSObject } from "@mui/system";
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
  Theme,
  useMediaQuery,
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

// Styled components
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  justifyContent: "flex-end",
}));

const DrawerList = styled(List)(({ theme }) => ({
  width: 240,
  marginTop: theme.spacing(1),
}));

const DrawerListItemButton = styled(ListItemButton)(({ theme, open }) => ({
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
  const mobileCheck = useMediaQuery("(min-width: 600px)");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleListItemButtonClick = (text: string) => {
    if (text === "Sign Out") {
      signOut();
    }
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          // Your styles here
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Divider />
      <DrawerList>
        {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding>
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
                    color: theme.palette.text.primary,
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
