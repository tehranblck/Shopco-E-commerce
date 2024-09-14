import AsideProfile from '../../Components/AsideMyAccount.jsx/AsideProfile';
import { Containerr, H2 } from '../../Components/AsideMyAccount.jsx/styled';
import Mydetails from '../../Components/MyDetails/Mydetails';
import DrawerContainer from '../../Components/Drawer/Drawer';
import auth from '../../Config/auth';

function MyAccount() {
  const auth=JSON.parse(localStorage.getItem('users'))?true:false
  
  return (
      <Containerr>
         {auth?<><AsideProfile />
        
        <Mydetails /></>:'Not available without sign'}
      <DrawerContainer/>
      
    </Containerr>
  )
}

export default MyAccount