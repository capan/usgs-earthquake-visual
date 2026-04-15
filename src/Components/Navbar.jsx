import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import react_icon from '../Extras/react_icon.webp';
import mapbox_icon from '../Extras/mapbox.png';
import material_icon from '../Extras/material_ui.png';
import bootstrap_icon from '../Extras/bootstrap.png';
import lottie_icon from '../Extras/lottie.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    avatar_root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    avatar_large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        cursor: 'pointer',
    },
}));

export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#459880' }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={() => { window.open('https://earthquake.usgs.gov/fdsnws/event/1/', '_blank'); }}>
                            <span role="img" aria-label="book">📖</span>
                        API Resource
                        </MenuItem>
                        <MenuItem onClick={handleModalOpen}>
                            <span role="img" aria-label="tool">🛠️</span>
                            Tools
                        </MenuItem>
                    </Menu>
                    <Typography variant="h6" className={classes.title}>
                        USGS Earthquake Map
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={modalOpen}
                    onClose={handleModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={modalOpen}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Beautiful Tools Used in This App</h2>
                            <div className="row">
                                <div className="col-md-4" align="center">
                                    <p>
                                        <Tooltip title="React">
                                            <Avatar
                                                alt="React Icon"
                                                src={react_icon}
                                                className={classes.avatar_large}
                                                onClick={() => window.open('https://reactjs.org/', '_blank')}
                                                tooltip="React"
                                            />
                                        </Tooltip>
                                    </p>
                                </div>
                                <div className="col-md-4" align="center">
                                    <p>
                                        <Tooltip title="React Map GL">
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={mapbox_icon}
                                                className={classes.avatar_large}
                                                onClick={() => window.open('https://visgl.github.io/react-map-gl/', '_blank')}
                                            />
                                        </Tooltip>
                                    </p>

                                </div>
                                <div className="col-md-4" align="center">
                                    <p>
                                        <Tooltip title="Material UI">
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={material_icon}
                                                className={classes.avatar_large}
                                                onClick={() => window.open('https://mui.com/', '_blank')}
                                            />
                                        </Tooltip>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4" align="center">
                                    <p>
                                        <Tooltip title="Bootstrap">
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={bootstrap_icon}
                                                className={classes.avatar_large}
                                                onClick={() => window.open('https://getbootstrap.com/', '_blank')}
                                            />
                                        </Tooltip>
                                    </p>
                                </div>
                                <div className="col-md-4" align="center">
                                    <p>
                                        <Tooltip title="Lottie">
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={lottie_icon}
                                                className={classes.avatar_large}
                                                onClick={() => window.open('https://airbnb.design/lottie/', '_blank')}
                                            />
                                        </Tooltip>
                                    </p>
                                </div>
                                <div className="col-md-4" align="center">
                                    <p>
                                        <Tooltip title="React Ticker">
                                            <Avatar
                                                className={classes.avatar_large}
                                                onClick={() => window.open('https://github.com/AndreasFaust/react-ticker', '_blank')}
                                            >
                                                React Ticker
                                            </Avatar>
                                        </Tooltip>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </AppBar>
        </div >
    );
}
