import { Container, Card } from '../stylesheets/Card.style.js';
import facebookIcon from '../assets/icons/facebook.svg';
import shareIcon from '../assets/icons/share.svg';

const SocialCard = (props) => {
    return (
        <Container>
            <Card>
                <div class="topleft">
                    <img src={facebookIcon} />
                </div>
                <div class="topright">
                    <img src={shareIcon} />
                </div>
                <img src={props.src} alt="socialPost" className="social-img"/>
                <p class="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                    At vero eos.
                </p>
            </Card>
        </Container>
    );
}

export default SocialCard;