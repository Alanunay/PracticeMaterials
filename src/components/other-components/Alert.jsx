export const Alert =({children, type = "success"}) =>{
return (
    <div style={{
    backgroundColor: type === "success" ? "#7FFF00" : "#FF0000",
    color: "black",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "16px",
    marginLeft: "250px",
    marginRight: "250px",

}}>{children}</div>
)
};