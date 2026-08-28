
export const CustomButton =({text}) =>{
    const name = "Aj";
    const handleClick = () =>{
        console.log(`Hey ${name}, you clicked ${text}`)
        alert("You click")
    };
  return (
    <div>
  <button onClick={handleClick}>{text}</button>
    </div>
  )
}
