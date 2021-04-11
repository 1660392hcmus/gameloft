import contactImage from '../assets/images/Minion_Grey.svg';
import {ContactContainer, ImageLeft, FormRight} from '../stylesheets/Contact.style';

const Contact = () => {
  return (
      <ContactContainer>
          <ImageLeft>
            <img src={contactImage}></img>
          </ImageLeft>
          <FormRight>
              <h2>Stay in the Know!</h2>
              <p>Don't get left behind!</p>
              <p>Subscribe to our newsletters today!</p>
              <input type="text" placeholder="Name"></input>
              <br/>
              <input type="text" placeholder="Email"></input>
              <br/>
              <select id="country" name="country">
                <option value="" disabled selected>Country</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <br/>
              <select id="country" name="country">
                <option value="" disabled selected>Flatform</option>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <div className="checkbox">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <span for="vehicle1"> By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions and I have read the Privacy Policy.</span><br/>
              </div>
              <div className="checkbox">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <span for="vehicle1"> I agree to receive promotional offers relating to all Gameloft games and services.</span><br/>
              </div>
          </FormRight>
      </ContactContainer>
  )
};

export default Contact;
