
export const PersonalInfo =() =>{

    const persons =[{
                        id: 1,
                        name: "Aj",
                        lastname: "Alanunay",
                        age: 22,
                        sex: "Male",
                   },
                   {
                        id: 2,
                        name: "Meljun",
                        lastname: "Mariquit",
                        age: 22,
                        sex: "Male",
                   },
                   {
                        id: 3,
                        name: "Joel",
                        lastname: "Monterde",
                        age: 27,
                        sex: "Male",
                   },
                   {
                        id: 4,
                        name: "Jerald",
                        lastname: "Palma",
                        age: 25,
                        sex: "Male",
                   },
                   {
                        id: 5,
                        name: "Christian",
                        lastname: "Jutba",
                        age: 23,
                        sex: "tomboy",
                   }
                  ]
  return (
    <div>
      {
        persons.map((person) =>{
            return(
                <div>
                    <h4>{person.id + "."}{person.name + " " + person.lastname}
                    </h4>
                    <p>Age: {person.age}</p>
                    <p>Sex: {person.sex}</p>
                </div>
            )
        })
      }
    </div>
  )
}
