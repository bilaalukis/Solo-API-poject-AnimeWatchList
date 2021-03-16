import ReactTable from "react-table";
const columns = [
    {
        Header: 'ID',
        accessor: 'id',
    },
    {  
      Header: 'Anime Name',  
      accessor: 'anime_name' ,
    },
    {  
     Header: 'Description',  
     accessor: 'description' ,
    },
    {  
     Header: 'Status',  
     accessor: 'status',
    },
    {  
      Header: 'Duration',  
      accessor: 'duration',
    },
    {  
      Header: 'Created at',  
      accessor: 'created_at',
    },
    {  
        Header: 'Updated at',  
        accessor: 'updated_at',
    }
]


export default function Animelist (props) {

    return <section className="data">
        {/* {(props.dataArr).length !== 0 ? (
        <ReactTable 
        data={props.dataArr}
        columns={columns}
      />
      ) : (
        <ReactTable 
          data={{id:"00"}}
          columns={columns}
        />
      )} */}
        
    </section>
}

