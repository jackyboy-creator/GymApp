import React from 'react'
import axios from "axios";

class GymExercises extends React.Component{

    constructor() {
        super();
        this.state={
            exercises:[]

    }}

    componentDidMount() {               //run some code right after component mounts on screen for first time
        const that = this
        axios.get('https://wger.de/api/v2/workout/' , {


            headers: {
                'Authorization': 'Token 02e8415ba449aa795760ca36f26139a79016224e'
            }
        })

            .then(function (result){
                console.log(result)
                that.setState({exercises: result.data.results})
            })


    }

    render(){
        return(
            <div>

                {this.state.exercises.map(function(exericse){
                    return  <li> {exericse.name}</li>
                })}

            </div>

        )
    }
}

export default GymExercises