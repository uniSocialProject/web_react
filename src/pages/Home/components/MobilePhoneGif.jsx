import { Grid } from '@mui/material';
import Phone from '../../../assets/images/phone.png';

const MobilePhoneGif = () => {
    return (
        <>
            {/* <div
                style={{
                    width: 300,
                    height: 500,
                    backgroundColor: 'black',
                    marginLeft: "200px",
                }}
            ></div> */}
            <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                <img style={{ height:"80vh" }} src={Phone} alt="tel" />
            </Grid>
        </>
    );
};

export default MobilePhoneGif;
