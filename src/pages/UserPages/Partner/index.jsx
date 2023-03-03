import { Box } from '@mui/material';
import NavBarUser from '../../navBar/NavBarUser';
import Footer from '../../../components/FooterUser';
import Body from './Body';
import { motion } from 'framer-motion';
//import { useSelector } from "react-redux";


const PartnerPage = () => {

    //const user = useSelector((state) => state.UserReducer.user);
    
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

export default PartnerPage;