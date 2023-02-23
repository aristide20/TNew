
import { Box } from '@mui/material';
import NavBarUser from '../navBar/NavBarUser';
import Footer from '../../components/FooterUser';
import Body from './HomeUserPage';
import { motion } from 'framer-motion';


const HomeUserPage = () => {

    
    return (
        <motion.div initial={{opacity: 0, width:0}}
                    animate={{opacity: 1, width:"100%"}}
                    exit={{opacity: 0, x: window.innerWidth, transition:{ duration: 0.1}}}>
                    <Box >
                          <NavBarUser />
                          <Body />
                          <Footer />
                    </Box>
        </motion.div>
    )
}

export default HomeUserPage;