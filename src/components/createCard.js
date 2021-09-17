import React, {useEffect, useState} from 'react';
import Header from './header';
import {FormGroup, Label, InputGroup, InputGroupText, InputGroupAddon, Input, Card, Form } from 'reactstrap';
import '../App.scss';
import { useDispatch } from 'react-redux';
import {createCard, getCards} from '../actions/cards';
import { Button } from 'reactstrap';
import CardTemplate from './card'
import {useSelector} from 'react-redux';
import View from './viewCard';


const Create = () => {

    function refreshPage(){
        window.location.reload();
    } 

    const [currentId, setCurrentId] = useState(0);
    const [postData, setPostData] = useState({subject:'', question: '', answer: '' });

    const card = useSelector((state) => (currentId ? state.cards.find((question) => question._id === currentId) : null))
    const dispatch = useDispatch();

    useEffect(() => {
        if (card) setPostData(card);
    }, [card])

    useEffect(() => {
        dispatch(getCards());
      }, [currentId, dispatch]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (currentId === 0) {
            dispatch(createCard(postData));
        }
      };
   
    
    return (
        <div>
            <Header />

            <div className="createWrapper">
                <div className="inputs">
                    <h4>Create a Card!</h4>
                    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <InputGroup className="dropdown">

                        <InputGroupAddon className="prepend" addonType="prepend">
                        <InputGroupText >Subject</InputGroupText>
                        </InputGroupAddon>
                            <Input type="select" name="select" id="exampleSelect"
                              value={postData.subject}
                              onChange={(e) => 
                                  setPostData({
                                      ...postData, subject:e.target.value
                                  })}
                               >
                                <option>Click for more</option>
                                <option>History</option>
                                <option>Math</option>
                                <option>Language Arts</option>
                                <option>English</option>
                                <option>Science</option>
                                <option>Technology</option>
                                <option>Other</option>
                            </Input>
                    </InputGroup>
                    <InputGroup className="input">
                        <InputGroupAddon className="prepend" addonType="prepend">
                        <InputGroupText >Question</InputGroupText>
                        </InputGroupAddon>
                            <Input
                                value={postData.question}
                                onChange={(e) => 
                                    setPostData({
                                        ...postData, question:e.target.value
                                    })}
                                placeholder="begin typing..." />
                    </InputGroup>
            <br />
                    <InputGroup className="input">
                        <InputGroupAddon className="prepend" addonType="prepend">
                        <InputGroupText>Answer</InputGroupText>
                        </InputGroupAddon>
                            <Input
                                value={postData.answer}
                                onChange={(e) => 
                                    setPostData({
                                        ...postData, answer:e.target.value
                                })}
                                placeholder="answer here!" />
                    </InputGroup>
                        <Button
                        onClick={refreshPage}
                        id="submitBtn"
                        type="submit"
                        className="submitBtn"
                        outline color="success">
                        submit
                    </Button>{' '}

                    </form>    
                </div>
                <div>
                    <View className="createGrid" setCurrentId={setCurrentId} />
                </div>
            </div>
        </div>
    )
}

export default Create;