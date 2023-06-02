import React from 'react'

const ResultTable = () => {
  return (
    <div>
      <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                {/* { !data ?? <div>No Data Found </div>} */}
                {/* { */}
                    {/* // data.map((v, i) => ( */}
                        <tr className='table-body'>
                            {/* <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td> */}
                            <td>Daily Tutorial</td>
                            <td>03</td>
                            <td>20</td>
                            <td>Pass</td>
                        </tr>
                    {/* // )) */}
                {/* // } */}
                
            </tbody>
        </table>
    </div>
  )
}

export default ResultTable
