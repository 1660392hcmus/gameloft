import { Container, Card } from '../stylesheets/EventPromotionCard.style';
import shareIcon from '../assets/icons/share.svg';

const EventPromotionCard = (props) => {
    const { mainCard, src }= props;
    return (
        <Container>
            {/* {mainCard ? 
                <Card>
                    <div class="topright">
                        <img src={shareIcon} />
                    </div>
                    <img src={props.src} alt="socialPost"/>
                    <p class="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos.
                    </p>
                </Card>
            : */}
                <Card>
                    <div class="topright">
                        <img src={shareIcon} />
                    </div>
                    <img src={props.src} alt="socialPost"/>
                    <p class="content">Short Title Here
                    </p>
                </Card>
        {/* } */}
            
        </Container>
    );
}

export default EventPromotionCard;