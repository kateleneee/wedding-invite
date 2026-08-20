import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const colors = {
  powderBlue: "#DCEBF3",
  deepBlue: "#5E7690",
  butterYellow: "#F8EBAA",
  gold: "#D3B84C",
  cream: "#FAF9F0",
  text: "#66727A",
  muted: "#929B9F",
};

const venues = [
  {
    type: "CEREMONY",
    title: "Sta. Rita de Cascia Parish (Diocese of Cubao)",
    subtitle: "Church",
    image: "/images/church1.jpg",

    address:
      "Sta. Rita De Cascia Church, GXHX+F3M, Quirino Ave, Baclaran, Parañaque, 1702 Kalakhang Maynila",

    mapUrl:
      "https://share.google/kLGZ9267qicTtrMxk",

    icon: ChurchOutlinedIcon,
  },

  {
    type: "RECEPTION",
    title: "Sta. Rita de Cascia Parish Building",
    subtitle: "Reception",
    image: "/images/reception.png",
    address:
      "3rd Floor, Sta. Rita de Cascia Parish Building, Phil-Am Homes, Quezon City, Metro Manila",

    mapUrl:
      "https://share.google/kLGZ9267qicTtrMxk",

    icon: LocationOnOutlinedIcon,
  },
];

export default function WeddingDetails() {
  return (
    <section id="venues">

      <Box
        sx={{
          position: "relative",

          overflow: "hidden",

          backgroundColor: colors.cream,

          py: {
            xs: 10,
            sm: 14,
          },
        }}
      >

        {/* =================================
            DECORATIVE ELEMENTS
        ================================= */}

        <FavoriteBorderRoundedIcon
          sx={{
            position: "absolute",

            top: {
              xs: 35,
              sm: 60,
            },

            left: {
              xs: 25,
              sm: "12%",
            },

            fontSize: {
              xs: 20,
              sm: 26,
            },

            color: colors.gold,

            opacity: 0.3,

            transform:
              "rotate(-12deg)",
          }}
        />

        <FavoriteBorderRoundedIcon
          sx={{
            position: "absolute",

            bottom: 50,

            right: {
              xs: 25,
              sm: "12%",
            },

            fontSize: {
              xs: 18,
              sm: 24,
            },

            color: colors.deepBlue,

            opacity: 0.2,

            transform:
              "rotate(15deg)",
          }}
        />


        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >

          {/* =================================
              HEADER
          ================================= */}

          <Box
            sx={{
              textAlign: "center",

              maxWidth: 550,

              mx: "auto",

              mb: {
                xs: 6,
                sm: 8,
              },
            }}
          >

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "45px 24px 45px",
                  alignItems: "center",
                  justifyItems: "center",
                  columnGap: 10,
                }}
              >
                {/* Left line */}
                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: colors.gold,
                    opacity: 0.6,
                  }}
                />

                {/* Church */}
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ChurchOutlinedIcon
                    sx={{
                      width: 20,
                      height: 20,
                      color: colors.gold,
                    }}
                  />
                </Box>

                {/* Right line */}
                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: colors.gold,
                    opacity: 0.6,
                  }}
                />
              </Box>
            </Box>

            <Typography
              sx={{
                fontFamily:
                  "'Cormorant Garamond', serif",

                fontSize: {
                  xs: "0.65rem",
                  sm: "0.72rem",
                },

                letterSpacing: "0.3em",

                fontWeight: 600,

                color: colors.deepBlue,

                textTransform: "uppercase",
              }}
            >
              Join us here
            </Typography>


            <Typography
              component="h2"
              sx={{
                mt: 2,

                fontFamily:
                  "'Cormorant Garamond', serif",

                fontSize: {
                  xs: "3.8rem",
                  sm: "5rem",
                },

                fontWeight: 400,

                lineHeight: 0.85,

                color: colors.deepBlue,

                letterSpacing: "-0.02em",
              }}
            >
              Ceremony
              <br />

              <Box
                component="span"
                sx={{
                  fontStyle: "italic",
                }}
              >
                & reception
              </Box>
            </Typography>


            <Typography
              sx={{
                mt: 2.5,

                fontFamily:
                  "'Cormorant Garamond', serif",

                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                },

                lineHeight: 1.7,

                color: colors.text,
              }}
            >
              Two places that will hold some of
              our most precious memories.
            </Typography>

          </Box>


          {/* =================================
              VENUE CARDS
          ================================= */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },

              gap: {
                xs: 5,
                md: 4,
              },
            }}
          >

            {venues.map((venue) => {

              const Icon = venue.icon;

              return (
                <VenueCard
                  key={venue.type}
                  venue={venue}
                  Icon={Icon}
                />
              );
            })}

          </Box>

        </Container>

      </Box>

    </section>
  );
}


/* =========================================
   VENUE CARD
========================================= */

function VenueCard({
  venue,
  Icon,
}) {

  return (
    <Box
      sx={{
        backgroundColor:
          "rgba(255,255,255,0.7)",

        border:
          "1px solid rgba(94,118,144,0.12)",

        borderRadius: "4px",

        overflow: "hidden",

        boxShadow:
          "0 12px 35px rgba(94,118,144,0.08)",
      }}
    >

      {/* IMAGE */}

      <Box
        sx={{
          position: "relative",

          width: "100%",

          aspectRatio: {
            xs: "16 / 10",
            sm: "16 / 9",
          },

          overflow: "hidden",
        }}
      >

        <Box
          component="img"
          src={venue.image}
          alt={venue.title}
          loading="lazy"

          sx={{
            width: "100%",
            height: "100%",

            objectFit: "cover",

            display: "block",

            transition:
              "transform 0.6s ease",

            "&:hover": {
              transform:
                "scale(1.03)",
            },
          }}
        />


        {/* IMAGE LABEL */}

        <Box
          sx={{
            position: "absolute",

            left: 14,
            bottom: 14,

            px: 1.5,
            py: 0.7,

            backgroundColor:
              "rgba(250,249,240,0.92)",

            backdropFilter:
              "blur(5px)",
          }}
        >
          <Typography
            sx={{
              fontFamily:
                "'Cormorant Garamond', serif",

              fontSize: "0.65rem",

              letterSpacing:
                "0.18em",

              color: colors.deepBlue,
            }}
          >
            {venue.type}
          </Typography>
        </Box>

      </Box>


      {/* CONTENT */}

      <Box
        sx={{
          p: {
            xs: 3,
            sm: 3.5,
          },
        }}
      >

        {/* Icon + title */}

        <Stack
          direction="row"
          alignItems="flex-start"
          spacing={1.5}
        >

          <Box
            sx={{
              width: 38,
              height: 38,

              flexShrink: 0,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              borderRadius: "50%",

              backgroundColor:
                colors.powderBlue,
            }}
          >

            <Icon
              sx={{
                fontSize: 19,
                color: colors.deepBlue,
              }}
            />

          </Box>


          <Box>

            <Typography
              sx={{
                fontFamily:
                  "'Cormorant Garamond', serif",

                fontSize: {
                  xs: "1.65rem",
                  sm: "1.8rem",
                },

                lineHeight: 1,

                color: colors.deepBlue,

                fontWeight: 500,
              }}
            >
              {venue.title}
            </Typography>

            <Typography
              sx={{
                mt: 0.4,

                fontFamily:
                  "'Great Vibes', cursive",

                fontSize: "1.1rem",

                color: colors.gold,
              }}
            >
              {venue.subtitle}
            </Typography>

          </Box>

        </Stack>


        {/* Address */}

        <Stack
          direction="row"
          alignItems="flex-start"
          spacing={1}
          sx={{
            mt: 2.5,
          }}
        >

          <LocationOnOutlinedIcon
            sx={{
              mt: 0.15,

              fontSize: 17,

              color: colors.muted,
            }}
          />

          <Typography
            sx={{
              fontFamily:
                "'Cormorant Garamond', serif",

              fontSize: "0.95rem",

              lineHeight: 1.5,

              color: colors.text,
            }}
          >
            {venue.address}
          </Typography>

        </Stack>


        {/* Google Maps */}

        <Button
          component="a"
          href={venue.mapUrl}
          target="_blank"
          rel="noopener noreferrer"

          variant="text"

          endIcon={
            <ArrowOutwardRoundedIcon
              sx={{
                fontSize:
                  "15px !important",
              }}
            />
          }

          sx={{
            mt: 2.5,

            px: 0,

            minWidth: 0,

            fontFamily:
              "'Cormorant Garamond', serif",

            fontSize: "0.85rem",

            letterSpacing:
              "0.12em",

            textTransform:
              "uppercase",

            color: colors.deepBlue,

            "&:hover": {
              backgroundColor:
                "transparent",

              color: colors.gold,
            },
          }}
        >
          View on Google Maps
        </Button>

      </Box>

    </Box>
  );
}