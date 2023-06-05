import { Menu } from "antd";
import {AppstoreOutlined,UserOutlined,ShopOutlined,ShoppingCartOutlined} from "@ant-design/icons"
import { useNavigate } from "react-router-dom";

function SideMenu(){
    const navigate=useNavigate();
    return<>
        <div className="SideMenu">
            <Menu
            onClick={(item)=>{
                    // item.key

                    navigate(item.key)
            }}
                items={[
                    {
                        label:"Dashboard",
                        icon:<AppstoreOutlined/>,
                        key:"/"
                    },
                    {
                        label:"Inventory",
                        icon:<ShopOutlined/>,
                        key:"/inventory"
                    },
                    {
                        label:"Orders",
                        icon:<ShoppingCartOutlined/>,
                        key:"/orders"
                    },
                    {
                        label:"Customers",
                        icon:<UserOutlined/>,
                        key:"/customers"
                    },
                ]}>

            </Menu>
        </div>
    </>
}

export default SideMenu;