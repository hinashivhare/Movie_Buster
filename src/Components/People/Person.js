import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { getPopularPeopleAction } from "../../Actions";
import {Card, Pagination} from "antd";



const Person = (props) => {
    const {Meta} = Card;

    const handleCardClick = person => {
        const personName = person.name.split(' ')
        props.history.push({
            pathname: `/person/${person.id}-${personName[0]}-${personName[1]}`
        });
    }
    const peopleList = props.getPopularPeople.popularPeople.people.map(person => {
        const imageLink = `https://www.themoviedb.org/t/p/w440_and_h660_face/${person.profile_path}`
        let knownFor = '';
        for(let movie of person.known_for){
            knownFor = knownFor + movie.title + ' ,'
        };
        return (
            <Card
                hoverable={true}
                style={{width: 370, margin: '15px'}}
                cover={<img
                    style={{width: 320, borderRadius: '20px 20px', height: '420px'}}
                    alt= 'image not found'
                    src={imageLink}/>}
                bordered={true}
                onClick={() => handleCardClick(person)}
            >
                <Meta
                    title={<h5 style={{fontWeight: '700', marginTop: 6}}>{person.name}</h5>}
                    description={<p>{knownFor}</p>}/>
            </Card>
        );
    })

    
    useEffect(() => {
        props.getPopularPeopleAction(1);
    },[])

    const onPaginationChange = PageNo => {
       props.getPopularPeopleAction(PageNo)
    }

    return(
        <div className="popular_person_page">
            <h1 style={{fontWeight: '700', marginBottom: '20px'}}>Popular People</h1>
           <div className='popular_person'>
               {peopleList}
           </div>
            <div className="popular_person_pagination">
                <Pagination
                    style={{fontSize: "40px"}}
                    defaultCurrent={1}
                    total={props.getPopularPeople.popularPeople.totalResults}
                    onChange={onPaginationChange}
                />
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return{
        getPopularPeople: state.getPopularPeople,
    };
}
export default connect(mapStateToProps,{getPopularPeopleAction})(withRouter(Person));