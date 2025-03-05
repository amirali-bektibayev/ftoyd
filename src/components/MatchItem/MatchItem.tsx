import React from 'react';
import { Match } from '../../types';
import TeamIcon from '../../assets/match__item_team-icon.png'
import classNames from 'classnames';
import './MatchItem.css'

interface MatchItemProps {
    match: Match;
}

const MatchItem: React.FC<MatchItemProps> = ({ match }) => {

    const statusClass = classNames('match__item-status', {
        'match__item-status_finished': match.status === 'Finished',
        'match__item-status_ongoing': match.status === 'Ongoing',
        'match__item-status_scheduled': match.status === 'Scheduled',
    });

    const statusText =
        match.status === 'Scheduled' ? 'Match preparing' :
            match.status === 'Ongoing' ? 'Live' :
                'Finished';

    return (
        <div className='match__item' >
            <div className='match__item-team match__item-team-home' >
                <div><img src={TeamIcon} alt="" /></div>
                <div className='match__item-team-name' >{match.homeTeam.name}</div>
            </div>
            <div className='match__item-info' >
                <div className='match__item-score' >{match.homeScore} :  {match.awayScore}</div>
                <div className={statusClass} >
                    {statusText}
                </div>
            </div>
            <div className='match__item-team match__item-team-away' >
                <div className='match__item-team-name' >{match.awayTeam.name}</div>
                <div><img src={TeamIcon} alt="" /></div>
            </div>

        </div>
    );
};

export default MatchItem;