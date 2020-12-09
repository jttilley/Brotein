import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import WorkoutBanner from '../components/workoutBanner';
import AddWorkout from '../components/addWorkout';
import WorkoutContext from '../utils/workoutContext';
import API from '../utils/API';
import ExcerciseTable from '../components/exerciseTable';

let workoutRows = [];

const newExercisePage = () => {
    let [workout, setWorkout] = useState({
        name: '',
        exercise: '',
        weight: '',
        sets: '',
        reps: '',
        duration: ''
    });

    let [workoutTotals, setWorkoutTotals] = useState({
        wtTotal: 0,
        setTotal: 0,
        repTotal: 0,
        durTotal: 0
    });

    let [rows, setRows] = useState([]);

    useEffect(() => {

    }, [])

    const cleanUpStates = () => {
        setRows(workoutRows);

        //reset form for next exercise
        setWorkout({
            name: workout.name,
            exercise: "",
            reps: "",
            sets: "",
            weight: "",
            duration: ""
        });
    }

    const updateTable = (newExercise) => {
        workoutRows.push(newExercise);

        //initialize totals
        let wtTotal = 0;
        let setTotal = 0;
        let repTotal = 0;
        let durTotal = 0;

        workoutRows.forEach(row => {
            wtTotal += row.weight;
            setTotal += row.sets;
            repTotal += row.reps;
            durTotal += row.duration;
        })

        setWorkoutTotals({
            wtTotal: Math.round(wtTotal * 1000) / 1000,
            setTotal: setTotal,
            repTotal: repTotal,
            durTotal: durTotal
        })
    }

    const handleAddWorkout = (event) => {
        event.preventDefault();

        const { name, exercise } = workout;

        if (exercise === "") {
            return;
        }

        const newExercise = createData(workout);

        workoutRows = [];

        API.getWorkoutByName(name).then((res) => {
            if (res.data) {
                //workout exists already so just add exercise

                res.data.workout.forEach(item => {
                    workoutRows.push(item)
                })

                updateTable(newExercise);

                const body = {
                    workout: newExercise
                }

                API.addExercise(name, body).then(() => {
                    cleanUpStates();
                })

            } else {
                //workout does not exist so create workout
                // console.log('newExercise: ', newExercise);
                workoutRows.push(newExercise);
                // console.log('workoutRows: ', workoutRows);
                setRows(workoutRows);

                const body = {
                    name: workout.name,
                    workout: newExercise
                }

                API.postWorkout(body).then((response) => {
                    console.log('response: ', response);

                    cleanUpStates();
                }).catch((error) => {
                    console.log(error);
                });
            }
        })
    }

    function createData({ exercise, sets, reps, weight, duration }) {
        return { exercise, sets, reps, weight, duration };
    }

    const handleInputChange = (event) => {
        let { name, value } = event.target;
        // console.log('value: ', value);
        // console.log('name: ', name);
        if (name === "name") {
            value = value.split(' ')
                .map(w => {
                    if (w !== "") {
                        return w[0].toUpperCase() + w.substr(1).toLowerCase();
                    }
                })
                .join(' ')
        } else if (name !== "exercise") {
            value = parseFloat(value);
        }

        setWorkout({ ...workout, [name]: value });
        // console.log('workout: ', workout);
    }



    // const rows = [
    //     createData('Bicep Curls', 4, 10, 30, 7),
    //     createData('Hammer Curls', 4, 10, 35, 5),
    //     createData('Shoulder Press', 3, 10, 110, 6),
    // ];

    return (
        <WorkoutContext.Provider value={{
            workout,
            rows,
            workoutTotals,
            handleInputChange,
            handleAddWorkout
        }}>
            <Navbar />
            <WorkoutBanner />
            <AddWorkout />
            <ExcerciseTable />
        </WorkoutContext.Provider>
    );
};
export default newExercisePage;