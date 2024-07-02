
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Example from './components/Examples/Example.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Example/>
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
