import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menuItems = [
  { label: "Home", id: "home" },
  { label: "Wedding", id: "wedding" },
  { label: "Our Story", id: "story" },
  { label: "Gallery", id: "gallery" },
  { label: "Timeline", id: "timeline" },
  { label: "Entourage", id: "entourage" },
  { label: "Our Songs", id: "playlist" },
  { label: "RSVP", id: "rsvp" },
  { label: "Gift Guide", id: "gifts" },
];

export default function ResponsiveAppBar() {
  const theme = useTheme();

  // true when screen is below MUI's md breakpoint
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleNavigation = (id) => {
    setDrawerOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          // position: "absolute",
          top: 0,
          backgroundColor: "#FAF9F0",
          color: "#66727A",
          borderBottom: "1px solid rgba(94, 118, 144, 0.15)",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 64, md: 72 },
            px: { xs: 2, md: 5 },
            justifyContent: "space-between",
          }}
        >
          {/* Logo / Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
              fontSize: { xs: "1.3rem", md: "1.5rem" },
              color: "#5E7690",
              letterSpacing: "0.05em",
            }}
          >
            D & K
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {menuItems.map((item) => (
                <Box
                  key={item.id}
                  component="button"
                  onClick={() => handleNavigation(item.id)}
                  sx={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    color: "#66727A",
                    p: 1,
                    // fontFamily: "inherit",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    // fontSize: "1.1rem",
                    letterSpacing: "0.03em",
                    transition: "all 0.2s ease",

                    "&:hover": {
                      color: "#5E7690",
                      backgroundColor: "rgba(220, 235, 243, 0.5)",
                    },
                  }}
                >
                  {/* <Typography> */}
                  {item.label}
                  {/* </Typography> */}
                </Box>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              aria-label="open navigation menu"
              sx={{
                color: "#5E7690",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: { xs: "82%", sm: 320 },
            maxWidth: 360,
            backgroundColor: "#FAF9F0",
            color: "#66727A",
            boxShadow: "-8px 0 30px rgba(67, 83, 91, 0.12)",
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            py: 2,
            borderBottom: "1px solid rgba(94, 118, 144, 0.15)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "#5E7690",
              // letterSpacing: "0.08em",
            }}
          >
            D & K
          </Typography>

          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              color: "#5E7690",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Navigation */}
        <List sx={{ px: 2, }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{ mb: 0.5 }}
            >
              <ListItemButton
                onClick={() => handleNavigation(item.id)}
                sx={{
                  borderRadius: 2,
                  px: 2,
                  "&:hover": {
                    backgroundColor: "rgba(220, 235, 243, 0.65)",
                  },
                  "&:active": {
                    backgroundColor: "#DCEBF3",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontWeight: 700,
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.1rem",
                        color: "#5E7690",
                        letterSpacing: "0.03em",
                      }
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
