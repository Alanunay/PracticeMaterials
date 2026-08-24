
export const UserDetails =({name, isOnline, hideOffline}) =>{
 if(hideOffline && !isOnline){
    return null;
 }
 
    if(isOnline){
    return (
    <div>
      <h3>{name}</h3>
      <span>Online</span>
      <p>Available for Chat</p>
      <button>Send Message</button>
    </div>
  );
 }
 return (
    <>
       <h3>{name}</h3>
      <span>Offline</span>
      <p>Not Available</p>
      <small>Check back later</small>
    </>
  )
};
