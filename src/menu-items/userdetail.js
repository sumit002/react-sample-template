// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - USETDETAILS ||============================== //

const userDetails = {
    id: 'userDetails',
    title: 'User Details',
    type: 'group',
    children: [
        {
            id: 'user-viewdetails',
            title: 'View Profile',
            type: 'item',
            url: '/viewprofile',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'user-editdetails',
            title: 'Edit Profile',
            type: 'item',
            url: '/editprofile',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'user-socialprofile',
            title: 'Social Profile',
            type: 'item',
            url: '/socialprofile',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'user-billing',
            title: 'Billing',
            type: 'item',
            url: '/billing',
            icon: icons.FontSizeOutlined,
            breadcrumbs: false
        }
    ]
};

export default userDetails;
