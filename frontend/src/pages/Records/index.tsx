import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { RecordsResponse } from './types';
import { formatDate } from './helpers';
import Pagination from './Pagination';
import Filters from '../../components/Filters';


const BASE_URL = 'https://ds1pesquisa.herokuapp.com';

const Records = () =>{
    const [records, setRecords] = useState<RecordsResponse>();
    const [activePage, setActivePage] = useState(0);

    useEffect(()=>{
        axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
        .then( res => setRecords(res.data));
    }, [activePage]);

    function handlePageChange(index: number){
        setActivePage(index);
    }

    return (
        <div className="page-container">
            <Filters link="/charts" linkText="Ver Gráficos"/>
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TÍTULO DO GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {records?.content.map(record => (
                         <tr key={record.id}>
                         <td>{formatDate(record.moment)}</td>
                         <td>{record.name}</td>
                         <td>{record.age}</td>
                         <td className="text-secondary">{record.platform}</td>
                         <td>{record.genreName}</td>
                         <td className="text-primary">{record.gameTitle}</td>
                     </tr>
                    ))}
                   
                </tbody>
            </table>

            <Pagination 
            activePage={activePage}
            totalPages={records?.totalPages}
            goToPage={handlePageChange}
            />
        </div>
    )
};


export default Records;