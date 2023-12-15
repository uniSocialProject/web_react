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
                    backgroundImage: `url(${Clouds})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                }}
            >
                <Grid item xs={6} mt={20}>
                    <HomeDownloandPaper />
                </Grid>
                <Grid item xs={6} mt={15}>
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
