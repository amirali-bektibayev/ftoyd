import MatchList from './components/MatchList/MatchList.js';
import './App.css'
import RefreshButton from './components/RefreshButton/RefreshButton.tsx';
import { useState } from 'react';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.tsx';

function App() {

  const [refresh, setRefresh] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); 

  const handleRefresh = async () => {
    try {
      setError(null); 
      setRefresh(prev => !prev); 
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred'); 
    }
  };


  return (
    <>
    <div className='header' >
      <div className='title' >Match Tracker</div>
      {error && <ErrorMessage />}
      <RefreshButton onRefresh={handleRefresh} />
    </div>
      <MatchList key={refresh.toString()} onError={setError} />
    </>
  )
}

export default App
