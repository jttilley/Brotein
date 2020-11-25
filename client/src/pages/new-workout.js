import React, {useEffect, useState} from 'react';
import API from '../utils/API';
import exercises from '../utils/exercises';
import Navbar from '../components/navbar';
import ExcerciseTable from '../components/ExerciseTable';


function NewWorkOutPage() {
    let [search, setSearch] = useState ("");

    const handleChange = () => {

    }
    
    return (
        <div>
            <Navbar />
            <h2>New Work Out Page</h2>
            <ExcerciseTable />
        </div>
    );
};
export default NewWorkOutPage;