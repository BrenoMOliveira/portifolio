import { styled, Grid, Container, Typography, Button } from "@mui/material";
import Profile from "../../../../assets/images/profile.png";
import DownloadingIcon from '@mui/icons-material/Downloading';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Hero = () => {
  const StyleHero = styled("div")(() => ({
    background: "linear-gradient(140deg, #000000, rgba(44,0,89,0.9), #000000)",
    height: "100vh",
    margin: "0px"
  }));

  const StyleImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <StyleHero>
      <Container maxWidth={"lg"}>
        <Grid container spacing={2} margin={"0px"}>
          <Grid xs={12} md={4}>
            <StyleImg src={Profile} alt="Profile" />
          </Grid>
          <Grid xs={12} md={8}>
            <Typography color="primary" variant="h1" textAlign={"center"}>Breno Oliveira</Typography>
            <Typography color="primary" variant="h2" textAlign={"center"}>Sou Engenheiro de Software</Typography>
            <Grid container display={"flex"} justifyContent={"center"}>
              <Grid item xs={12} md={3} display={"flex"} justifyContent={"center"}>
                <Button>
                <DownloadingIcon/>
                Download CV</Button>
              </Grid>
              <Grid item xs={12} md={3} display={"flex"} justifyContent={"center"}>
                <Button>
                <LocalPhoneIcon/>
                Contatos</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyleHero>
  );
};

export default Hero;