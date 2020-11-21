import React from 'react';
import API from '../utils/API';

let exercises = [];

function NewWorkOutPage() {

    // Load all books and store them with setBooks
    useEffect(() => {
        loadExercises()
    }, [])

    function loadExercises(){
        API.getExercises() .then(res => {
            exercises = res.results;
        })
    }

    return (
        <div>
            <h2>New Work Out Page</h2>
        </div>

    );
};
export default NewWorkOutPage;