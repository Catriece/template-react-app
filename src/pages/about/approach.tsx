import {
  Box,
  Card,
  CardContent,
  Divider,
  Icon,
  Typography,
} from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { mobileView } from "../../styles/constants";

const approach = [
  {
    id: 1,
    icon: <VolunteerActivismIcon />,
    title: "Careful Planning",
    description:
      "We take the time to understand your needs and cater plans designed for you.",
  },
  {
    id: 2,
    icon: <VolunteerActivismIcon />,
    title: "Careful Planning",
    description:
      "We take the time to understand your needs and cater plans designed for you.",
  },
  {
    id: 3,
    icon: <VolunteerActivismIcon />,
    title: "Careful Planning",
    description:
      "We take the time to understand your needs and cater plans designed for you.",
  },
];

export const Approach = () => {
  const { isMobile } = mobileView();
  return (
    <Box
      sx={[
        {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        },
        (theme) => ({
          backgroundColor: theme.palette.primary.main,
        }),
      ]}
    >
      <Typography variant="h3" sx={{ marginTop: 5, color: "white" }}>
        Our Approach
      </Typography>
      <Typography
        variant="h5"
        sx={{ marginTop: 2, color: "white", textAlign: "center" }}
      >
        Subheading will go here.
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 1,
          marginBottom: 6,
        }}
      >
        {approach.map((step) => (
          <Card
            key={step.id}
            elevation={10}
            variant="serviceSmall"
            sx={{
              borderRadius: 4,
              marginRight: isMobile ? 0 : step.id < 3 ? 8 : 0,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Icon sx={{ width: "100%", height: "40px" }}>{step.icon}</Icon>
              <Typography
                sx={{ fontSize: "18pt", marginTop: 2, textAlign: "center" }}
              >
                {step.title}
              </Typography>
              <Divider sx={{ margin: "10px 0" }} />
              <Typography
                sx={{ fontSize: "13pt", marginTop: 2, textAlign: "center" }}
              >
                {step.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
