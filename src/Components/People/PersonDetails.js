import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import {Button, Row, Col, Tooltip, Progress, Card} from "antd";
import { CaretRightFilled, InstagramOutlined, FacebookFilled,TwitterOutlined, VideoCameraFilled }  from '@ant-design/icons'
import { connect } from 'react-redux';
import {personDetailsAction} from "../../Actions";

const PersonDetails = (props) => {
    const[ isExpanded, setIsExpanded] = useState(false);
    const {Meta} = Card;
    let { id } = useParams();
        id = id.split('-')[0];

   useEffect(() => {
       props.personDetailsAction(id)
   },[])

    const { personal } = props.person.person;
   const { socialLinks } = props.person.person;

    let imageLink;
    if(personal){
        imageLink = `https://www.themoviedb.org/t/p/w440_and_h660_face/${personal.profile_path}`
    }

    let age;
   if(personal.birthday){
       age = (personal.birthday).split('').slice(0,4).join('');
       const date = new Date();
       age = date.getFullYear() - age;
   }

    let knownAs;
    if(personal.also_known_as){
         knownAs = personal.also_known_as.map(ele => {
            return <h5>{ele}</h5>
        })
    }

    let bio1;
    let bio2;
    if(personal.biography){
        let bio =(personal.biography).split(' ')
        let len = Math.floor((bio.length * 3)/4)
        bio1 = bio.slice(0, len).join(' ')
        bio2 = bio.slice(len, bio.length).join(' ')
    }
    const handleReadMoreButton = () => {
        setIsExpanded(true)
    }

    const detectGender = () => {
        if(personal.gender == 1){
            return(
                <h5>Male</h5>
            );
        }else{
            return(
                <h5>Female</h5>
            );
        }
    }
    let knownForList
    if(props.person){
         knownForList = props.person.popularPeople.people.map(ele => {
            if(id == ele.id){
                const movieList = ele.known_for.map(movie => {
                    ;const image = `https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`
                    return(
                        <Card
                            hoverable={true}
                            style={{width: 240, padding: " 15px", margin: '10px'}}
                            cover={<img
                                style={{width: 200, borderRadius: '20px 20px'}}
                                alt="example"
                                src={image}/>}
                            bordered={true}
                        >
                            <Meta
                                title={<h5 style={{fontWeight: '700', marginTop: 6}}>{movie.title}</h5>}/>
                        </Card>
                    );
                })
                return movieList;
            }
        })
    }


    let editName = ['',''];
    if(personal.name){
        editName = personal.name.split(' ');
    }

    if(socialLinks){
        console.log(socialLinks)
    }

    return (
        <div>
            <div className='Person_details_menu'>
                <Button type='text'>Overview</Button>
                <Button type='text'>Media</Button>
                <Button type='text'>Fandom</Button>
                <Button type='text'>Share</Button>
            </div>
            <div className='person_details_page'>
            <Row>
                <Col span={6}>
                    <img src={imageLink}/>
                   <div style={{ marginTop: '20px'}}>
                       <Button
                           style={socialLinks && socialLinks.facebook_id? {fontSize: '60px', color:'blue'} : {display: 'none'}}
                           type='text'
                           href={socialLinks? `https://www.facebook.com/${socialLinks.facebook_id}/` : null}
                       >
                           {<FacebookFilled />}
                       </Button>
                       <Button
                           style={socialLinks? {fontSize: '60px', color:'#f5c518'} : {display: 'none'}}
                           type='text'
                           href={socialLinks? `https://www.imdb.com/name/${socialLinks.imdb_id}/` : null}
                       >
                           {<VideoCameraFilled />}
                       </Button>
                       <Button
                           style={socialLinks? {fontSize: '60px', color:'#1ea2f1'} : {display: 'none'}}
                           type='text'
                           href={socialLinks? `https://twitter.com/${socialLinks.twitter_id}/` : null}
                       >
                           {<TwitterOutlined />}
                       </Button>
                       <Button
                           style={socialLinks? {fontSize: '60px', color: '#bd3c7e'} : {display: 'none'}}
                           type='text'
                           href={socialLinks? `https://www.instagram.com/${socialLinks.instagram_id}/` : null}
                       >
                           {<InstagramOutlined />}
                       </Button>
                   </div>
                    <h3 style={{ marginTop: '30px', fontWeight: 'bold'}}>Personal Info</h3>
                    <div className='person_details'>
                        <div>
                            <h4>Known For</h4>
                            <h5>{personal.known_for_department}</h5>
                        </div>
                        <div>
                            <h4>Known Credits</h4>
                            <h5>{props.person.person.credits}</h5>
                        </div>
                        <div>
                            <h4>Gender</h4>
                            {detectGender()}
                        </div>
                        <div>
                            <h4>Birthday</h4>
                            <h5>{personal.birthday}({age} years old)</h5>
                        </div>
                        <div>
                            <h4>Place of Birth</h4>
                            <h5>{personal.place_of_birth}</h5>
                        </div>
                        <div>
                            <h4>Also Known As</h4>
                            {knownAs}
                        </div>
                        <Link to={`/person/${id}-${editName[0]}-${editName[1]}/edit/`}>
                            <Button style={{ marginBottom: '20px', height: '70px',
                                backgroundColor: '#04b4e4', fontSize: '30px', width: '200px',
                                borderRadius: '34px', color: 'white'}}
                            >
                                EDIT PAGE
                            </Button>
                        </Link>
                    </div>
                </Col>
                <Col span={18}>
                    <h1 style={{fontSize: 70,fontWeight: 700, marginBottom: 60}}>{personal.name}</h1>
                    <h3 style={{fontWeight: 600}}>Biography</h3>
                        <h4 style={{fontWeight: 400}}>{bio1}
                            {isExpanded? bio2 : null}
                            <Button type='text'
                                    onClick={handleReadMoreButton}
                                    icon={<CaretRightFilled/>}
                                    style = {isExpanded? {display: "none",fontSize: '31px', color: 'blue'} :
                                        {fontSize: '31px', color: 'blue'}}
                            >
                                Read More
                            </Button>
                        </h4>
                    <h3 style={{fontWeight: 600, marginTop: '50px'}}>Known For</h3>
                    <p style={{display: 'flex'}}>{knownForList}</p>
                </Col>
            </Row>
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