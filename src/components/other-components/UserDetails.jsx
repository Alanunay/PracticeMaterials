
export const UserDetails =({ name, isOnline, isPremium, isNew}) =>{
//  if(hideOffline && !isOnline){
//     return null;
//  }

return (
    <div>
        <h3>{name}</h3>
        <span>{isOnline ? "Online":"Offline"}</span>
        {isPremium &&  <span>⭐</span>}
        {isNew &&  <span>New</span>}
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
