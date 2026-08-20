export const  Greetings=({name = "Guest", message = "Hello"})=> {
  return (
    <div>
      <h2>
        {message}, {name}
      </h2>
    </div>
  );
};
