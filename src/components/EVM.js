import React from 'react';
import PartyRow from './PartyRow';
import './css/EVM.css';

const EVM = () => {
    return (
        <div className='evm'>
            <table>
                <thead>
                    <tr className='headTr'>
                        <th>Party Logo</th>
                        <th>Party Name</th>
                        <th>Party Candidate Name</th>
                        <th>Vote Button</th>
                    </tr>
                </thead>
                <tbody>
                        <PartyRow />
                        <PartyRow />
                        <PartyRow />
                        <PartyRow />
                        <PartyRow />
                        <PartyRow />
                        <PartyRow />
                        <PartyRow />
                </tbody>
            </table>
        </div>
    );
}

export default EVM;