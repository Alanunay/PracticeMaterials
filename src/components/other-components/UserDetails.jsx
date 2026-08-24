
export const UserDetails =({ name, isOnline, isPremium, isNew, role}) =>{
//  if(hideOffline && !isOnline){
//     return null;
//  }

let roleBadge = null;
if (role === "Administrator"){
    roleBadge = <span>Admin</span>;
}
else if(role === "Moderator"){
    roleBadge = <span>Moderator</span>;
}
else if(role === "VIP"){
    roleBadge = <span>VIP</span>
}
return (
    <div>
        <h3>{name}</h3>
          {isPremium &&  <span>⭐</span>}
          {isNew &&  <span>New</span>}
          {roleBadge}
        <span>{isOnline ? "Online":"Offline"}</span>
        <p>{isOnline ? "Available for chat":"Not available"}</p>
        {
            isOnline ? (
                <button>Send Messages</button>
            ) : (
                <small>Check back later</small>
            )
        }
    </div>
)
}
