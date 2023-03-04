import Navbar from "../components/AdminNavbar";
import Sidebar from "../components/AdminSidebar";
import Body from "./Body";
import Footer from "../components/AdminFooter";
import { Box } from "@mui/material";

const AdminHome = () => {
    return (
          <Box>
               <Sidebar />
               <Navbar />
               <Body />
               <Footer />
          </Box>
    )
}

export default AdminHome;