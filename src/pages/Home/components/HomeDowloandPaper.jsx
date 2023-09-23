//packages
import { Grid, IconButton, Typography,Box , Paper } from '@mui/material';
import '@fontsource/roboto/400.css';
//icons
import AppStoreIcon from '../../../assets/svgs/AppStoreIcon';
import googlePlayBadge from '../../../assets/images/google-play-badge.png';

const HomeDowloandPaper = () => {

    const token = localStorage.getItem('token');

    return (
        
        <Grid
            container
            sx={{
                mt: {
                    xs: 10,
                    sm: 20,
                },
            }}
        >
            {/* {entire dowloand section with Typography`s} */}
            <Grid item xs={12} sm={12} md={7} lg={6}>
                <Box
                    sx={{
                        px: {
                            xs: 2,
                            sm: 4,
                            md: 6,
                            lg: 7,
                            xl: 8,
                        },
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        '& > :not(style)': {
                            minWidth: {
                                xs: 250,
                                sm: 300,
                                md: 450,
                                lg: 500,
                            },
                        },
                    }}
                >
                    {token && <p>{token}</p>}
                    <Paper elevation={0} sx={{bgcolor:'transparent'}} >
                        <Typography
                            variant="h2"
                            fontFamily={'roboto'}
                            sx={{ p: 3 }}
                            align="left"
                            fontSize={{
                                xs: 40,
                                sm: 45,
                                md: 50,
                                lg: 55,
                                xl: 60,
                            }}
                            fontWeight={'bold'}
                        >
                            Create Your website today with{' '}
                            <span className="text-purple-600">Zone</span>
                        </Typography>
                        <Typography
                            variant="h6"
                            fontFamily={'roboto'}
                            sx={{ p: 3 }}
                            align="left"
                            fontSize={{
                                xs: 13,
                                sm: 14,
                                md: 15,
                                lg: 16,
                                xl: 18,
                            }}
                            fontWeight={'thin'}
                            color={'gray'}
                        >
                            The Zone is built on top of MUI, a powerful library
                            that provides flexible, customizable, and
                            easy-to-use components
                        </Typography>
                        {/* {dowloand icon`s section} */}
                        <Grid
                            container
                            flexDirection={{
                                xs: 'column',
                                vs: 'column',
                                sm: 'row',
                                md: 'row',
                            }}
                            sx={{
                                display: 'flex',
                                alignContent: {
                                    vs: 'center',
                                },
                            }}
                        >
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: {
                                        xs:'center',
                                        vs:'center',
                                        md:'left',
                                    },
                                }}
                            >
                                <IconButton disableRipple>
                                    <AppStoreIcon width={205} height={60} />
                                </IconButton>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: {
                                        xs:'center',
                                        vs:'center',
                                        md:'center',
                                        vl:'right'
                                    },
                                }}
                            >
                                <IconButton disableRipple>
                                    <img
                                        width={205}
                                        alt="googleplay"
                                        src={googlePlayBadge}
                                    />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    );
};

export default HomeDowloandPaper;

