import { Container, Card } from '../stylesheets/EventPromotionCard.style';
import shareIcon from '../assets/icons/share.svg';

const EventPromotionCard = (props) => {
    return (
        <Container>
                <Card>
                    <div class="topleft">
                        <p>Short Title Here</p>
                        <p className="content-topleft">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ... </p>
                    </div>
                    <div class="topright">
                        <img src={shareIcon} />
                    </div>
                    <img src={props.src} alt="socialPost"/>
                    <p class="content"> Short Title Here </p>
                    <button class="read-more">read more</button>
                </Card>
        </Container>
    );
}

export default EventPromotionCard;