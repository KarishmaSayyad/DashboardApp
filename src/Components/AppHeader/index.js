import { Badge,Image,Space,Typography } from "antd";
import {MailOutlined, BellFilled} from '@ant-design/icons'



function AppHeader() {
  return (
    <div className="AppHeader">
       
    <Image
    width={40}
    src=" "
    ></Image>
<Typography.Title>Karu DashBoard</Typography.Title>
<Space>
    <Badge count={20} dot>
    <MailOutlined style={{fontSize:24}}
    />
    </Badge>
    <Badge count={20}>
    <BellFilled style={{fontSize:24}}/>
    </Badge>
</Space>
    </div>
  );
}

export default AppHeader;
