import { styled, Grid, Container, Typography, Button } from "@mui/material";
import Profile from "../../../../assets/images/profile.png";
import DownloadingIcon from '@mui/icons-material/Downloading';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Hero = () => {
  const StyleHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

  const StyleImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <StyleHero>
      <Container maxWidth={"lg"}>
        <Grid container spacing={2}>
          <Grid xs={12} md={4}>
            <StyleImg src={Profile} alt="Profile" />
          </Grid>
          <Grid xs={12} md={8}>
            <Typography color="primary" variant="h1" textAlign={"center"}>Breno Martins Oliveira</Typography>
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