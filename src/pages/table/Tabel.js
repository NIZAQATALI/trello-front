import React from 'react';

const Table = () => {
  const data = [
    { header1: 'Data 1', header2: 'Data 2', header3: 'Data 3' },
    { header1: 'Data 4', header2: 'Data 5', header3: 'Data 6' },
    { header1: 'Data 7', header2: 'Data 8', header3: 'Data 9' },
  ];

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #ddd' }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '8px', backgroundColor: '#f2f2f2' }}>Header 1</th>
          <th style={{ textAlign: 'left', padding: '8px', backgroundColor: '#f2f2f2' }}>Header 2</th>
          <th style={{ textAlign: 'left', padding: '8px', backgroundColor: '#f2f2f2' }}>Header 3</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}>
            <td style={{ textAlign: 'left', padding: '8px' }}>{row.header1}</td>
            <td style={{ textAlign: 'left', padding: '8px' }}>{row.header2}</td>
            <td style={{ textAlign: 'left', padding: '8px' }}>{row.header3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
