
import { UserInfo } from "./UserInfo";
export const UserCard=(props) =>{
    return(
        <>
             <h2>Details</h2>
            <UserInfo {...props}/>
        </>
    );
};