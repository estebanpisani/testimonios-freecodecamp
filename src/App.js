import './App.css';
import Testimonio from './components/Testimonio.jsx';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
        nombre='Emma Bostian'
        pais='Sweden'
        imagen=''
        cargo='Software Engineer'
        empresa='Spotify'
        testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify." />
      </div>
    </div>
  );
}

export default App;
