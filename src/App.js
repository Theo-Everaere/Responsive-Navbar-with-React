import Navbar from "./components/NavBar/Navbar";
import classes from "./App.module.css";

function App() {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>
        <h1>Accueil</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste omnis
          soluta recusandae distinctio nobis suscipit non, neque ex dolor ea
          aperiam magni nulla repellat natus ratione impedit ipsa consequuntur
          ab id! Incidunt dicta accusamus suscipit molestias ab dolores
          voluptatum quos, laborum tempora, recusandae, nemo reiciendis vitae
          eos perspiciatis dignissimos atque?
        </p>
      </main>
    </div>
  );
}

export default App;
