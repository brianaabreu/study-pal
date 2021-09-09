import React, {useState} from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import "../App.scss"
import ReactCardFlip from 'react-card-flip';
import { useDispatch } from 'react-redux';

const CardTemplate = ({card, setCurrentId}) => {
    
    const [isFlipped, setIsFlipped] = useState(false);
    const dispatch = useDispatch();
    
      
    function handleClick (e) {
          e.preventDefault();
          setIsFlipped(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    
    

    return (
            
            <div>
        
                <ReactCardFlip isFlipped={isFlipped.isFlipped} flipDirection="horizontal">
                    <Card className="cardTemp" body outline color="success">
                        <CardTitle className="" tag="h5">{card.subject}</CardTitle>
                        <CardText className="">{card.question}</CardText>
                        <Button outline color="success" className="cardBtn" style={{marginTop: 'auto'}}  onClick={handleClick}>See Answer</Button>
                    </Card>
                    
            
                    <Card className="cardTemp" body outline color="success">
                        <CardTitle tag="h5">{card.subject}</CardTitle>
                        <CardText>{card.answer}</CardText>
                    <Button outline color="success" className="cardBtn" style={{marginTop: 'auto'}} onClick={handleClick}>See Question</Button>
                    </Card>
      </ReactCardFlip>
                

            </div>
        )

    // }
}

export default CardTemplate;