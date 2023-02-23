import Body from './Body';
import Footer from '../../components/Footer';
import { Stack } from '@mui/material';
import NavBar from "../navBar/NavBarHome2";
import { motion } from 'framer-motion';


const BTPPage = () => {
    return (
        <motion.div initial={{opacity: 0, width:0}}
                    animate={{opacity: 1, width:"100%"}}
                    exit={{opacity: 0, x: window.innerWidth, transition:{ duration: 0.1}}}>
                    <Stack>
                          <NavBar />
                          <Body />
                          <Footer />
                    </Stack>
        </motion.div>
    )
}

export default BTPPage;