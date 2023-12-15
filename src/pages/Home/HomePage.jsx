//packages
import { Grid } from '@mui/material';
//components
import HomeDownloandPaper from './components/HomeDowloandPaper';
import MobilePhoneGif from './components/MobilePhoneGif';
//background image
import Clouds from '../../assets/images/clouds.jpg';

const HomePage = () => {
    return (
        <>
            <Grid
                container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundImage: `url(${Clouds})`, // Use backgroundImage property
                    backgroundSize: 'cover', // Optional: adjust based on your needs
                    backgroundRepeat: 'no-repeat', // Optional: adjust based on your needs
                }}
            >
                <Grid item xs={6} mt={12}>
                    <HomeDownloandPaper />
                </Grid>
                <Grid item xs={6} mt={7}>
                    <MobilePhoneGif />
                </Grid>
            </Grid>
        </>
    );
};

const HomeDowloandPaperGridStyles = {
    mt: 18,
    display: 'flex',
    justifyContent: 'center',
};

export default HomePage;
