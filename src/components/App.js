import React, {useEffect, useState} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
    const [pizzas, setPizzas] = useState([])
    const [selectedPizza, setSelectedPizza] = useState(null)
    //if state is set to an object, we get errors that say we are changing from controlled to uncontrolled input
    //by pass this and set to null instead and have the form check if the selectedPizza state is null or not

    useEffect(() => {
      fetch("http://localhost:3001/pizzas")
        .then(res => res.json())
        .then(setPizzas)
    }, [])

    function handleChangeForm(name, value) {
      setSelectedPizza({
        ...selectedPizza,
        [name]: value,
      });
    }
  
    function handleEditPizza(updatedPizza) {
      const updatedPizzas = pizzas.map((pizza) =>
        pizza.id === updatedPizza.id ? updatedPizza : pizza
      );
      setSelectedPizza(updatedPizza);
      setPizzas(updatedPizzas);
    }

  return (
    <>
      <Header />
      <PizzaForm
        pizza={selectedPizza}
        onChangeForm={handleChangeForm}
        onEditPizza={handleEditPizza} />
      <PizzaList 
        pizzas={pizzas} onSelectedPizza={setSelectedPizza}/>
    </>
  );
}

export default App;
