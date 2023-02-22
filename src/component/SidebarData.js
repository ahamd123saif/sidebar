import * as FaIcoins from "react-icons/fa";
import * as AiIcoins from "react-icons/ai";
import * as IoIcoins from "react-icons/io";

const SidebarData=[
    {
        title : 'Home',
        path :'/',
        icon :<AiIcoins.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title : 'Report',
        path :'/report',
        icon :<IoIcoins.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title : 'products',
        path :'/product',
        icon :<FaIcoins.FaCartPlus/>,
        cName:'nav-text'
    },
    {
        title : 'Team',
        path :'/Team',
        icon :<IoIcoins.IoMdPeople/>,
        cName:'nav-text'
    },
    {
        title : 'Message',
        path :'/message',
        icon :<FaIcoins.FaEnvelopeOpenText/>,
        cName:'nav-text'
    },
    {
        title : 'Support',
        path :'/support',
        icon :<IoIcoins.IoMdHelpCircle/>,
        cName:'nav-text'
    },
]
export default SidebarData;