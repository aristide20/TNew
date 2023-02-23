import Body from './Body';
import Footer from '../../components/Footer';
import { Stack } from '@mui/material';
import NavBar from "../navBar/index";
import { motion } from 'framer-motion';


const HomePage = () => {
    return (
        <motion.div initial={{opacity: 0, width:0}}
                    animate={{opacity: 1, width:"100%"}}
                    exit={{opacity: 0, x: window.innerWidth, transition:{ duration: 0.2}}}>
                   <Stack >
                          <NavBar />
                          <Body />
                          <Footer />
                    </Stack>
        </motion.div>
    )
}

export default HomePage;