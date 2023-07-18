import { Fragment, useState } from 'react';
import { data } from '../useStateHook/data.js'

const ListData = () => {
    const [person, setPerson] = useState(data)
    const RemoveSelected = (id) => {
        console.log(id)
        setPerson((previousData) => {
            return previousData.filter((p) => p.id != id)
        })
    }
    const RemoveAll = () => {
        console.log("remove all")
        setPerson([])
    }
    return (
        <div className='container'>
            <h3 className='text-center'>List Data</h3>
            {person.map((person) => {
                return (
                    <Fragment key={person.id}>
                        {console.log('person: ', person)}
                        <h4>{person.name}</h4>
                        <button className='btn btn-ligh' onClick={() => RemoveSelected(person.id)}>Remove</button><br></br>
                    </Fragment>
                )
            })}
            <button className='btn btn-dark' onClick={RemoveAll}>Remove All</button>
        </div>
    );
};

export default ListData;