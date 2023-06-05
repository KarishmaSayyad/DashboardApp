import { Typography } from "antd";


function AppFooter(){
    return <>
    <div className="AppFooter">
         <Typography.Link href="tel:1234578">91-123456789</Typography.Link>
         <Typography.Link href="https://www.google.com" target={"_blank"}>Privacy Policy</Typography.Link>
         <Typography.Link href="https://www.google.com" target={"_blank"}> Terms Of Use</Typography.Link>
    </div>
    </>
}

export default AppFooter;