import { HowToReg, Mail } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Landing = () => {
  const features = [
    {
      title: "Secure User Registration:",
      content:
        " Register new users with comprehensive backend validation, including email verification for added protection.",
    },
    {
      title: "Streamlined Login",
      content:
        "Effortlessly log in users and maintain access through token refresh mechanisms.",
    },
    {
      title: " Password Reset",
      content:
        "Easily reset passwords with the help of a convenient email reset link.",
    },
    {
      title: " Password Reset",
      content:
        "Easily reset passwords with the help of a convenient email reset link.Users can change their passwords directly within the application.",
    },
    {
      title: "Email Notifications",
      content:
        "Stay informed with timely email notifications for both password reset requests and confirmations. Granular Password Management.",
    },
  ];
  return (
    <Box sx={{ paddingY: 8, paddingX: { xs: 2, sm: 3, md: 10, lg: 20 } }}>
      <Typography fontSize={25} textAlign="center">
        Authentication System
      </Typography>{" "}
      <Divider textAlign="center">
        <i>yosef emyayu</i>
      </Divider>
      <Typography
        sx={{ textAlign: { sm: "start", md: "center" } }}
        textAlign="center"
        fontSize={20}
      >
        Is Production level project Built with a focus on security and
        scalability, this authentication system leverages the power of Django
        (Python backend) and React.js (frontend framework). Seamless
        communication is ensured through the REST framework.{" "}
      </Typography>{" "}
      <Typography py={2} fontSize={25} textAlign="center">
        Key Features
      </Typography>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
        flexGrow={true}
      >
        {/* display="flex" // direction="row" flexDirection="row" spacing={1}
        justifyContent="space-between" flexGrow={true}> */}
        {features.map((feature) => (
          <Card flex={4} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Test it</Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Landing;
