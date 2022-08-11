import config from '../gitprofile.config';
import GitProfile from './components/GitProfile';

function App() {
  return (
    <div>
      <GitProfile config={config} />
    </div>
  );
}

export default App;
