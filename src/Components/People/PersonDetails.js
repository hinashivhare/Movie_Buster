import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom'
import {Button} from "antd";
import { connect } from 'react-redux';
import {personDetailsAction} from "../../Actions";

const PersonDetails = (props) => {
    let { id } = useParams();
   id = id.split('-')[0];

   console.log(props.person.person)
   useEffect(() => {
       props.personDetailsAction(id)
   },[])

    return (
        <div>
            <div className='Person_details_menu'>
                <Button type='text'>Overview</Button>
                <Button type='text'>Media</Button>
                <Button type='text'>Fandom</Button>
                <Button type='text'>Share</Button>
            </div>
            <div className='person_details_page'>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        person : state.getPopularPeople
    };
}

export default connect(mapStateToProps, { personDetailsAction })(PersonDetails);