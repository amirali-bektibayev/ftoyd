import React, { useEffect, useState } from 'react';
import { fetchMatches } from '../../services/api';
import { Match } from '../../types';
import MatchItem from '../MatchItem/MatchItem';
import Loader from '../Loader/Loader';
import './MatchList.css'


interface MatchListProps {
    onError: (error: string | null) => void; 
}


const MatchList: React.FC<MatchListProps> = ({onError }) => {
    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    

    useEffect(() => {
        const loadMatches = async () => {
          try {
            const data = await fetchMatches();
            setMatches(data.data.matches);
            onError(null);
          } catch (error) {
            onError(error instanceof Error ? error.message : 'An error occurred');
          } finally {
            setLoading(false);
          }
        };
    
        loadMatches();
      }, [onError]);
    
      if (loading) return <Loader />;

    return (
        <div className='match__list' >
            {matches.map(match => (
                <MatchItem key={match.time} match={match} />
            ))}
        </div>
    );
};

export default MatchList;