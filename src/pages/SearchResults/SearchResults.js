import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PolicyStub } from '../../components';
import fundsImages from '../../assets/funds';
import { CardPanel, Icon, Button} from 'react-materialize';
import foundationImages from '../../assets/foundations';
import './SearchResults.css';

const results = [
  {
    name: 'Prime Plus',
    price: 303,
    logo: fundsImages.bupa,
    benefits: {
      'General Dental': true,
      'Optical': true,
      'Physiotherapy': false,
      'Chiropractic': true,
      'Orthodontic': true,
      'Glucose Monitor': false,
      'Speech Therapy': true,
    }
  },
  {
    name: 'Smart Combination',
    price: 297,
    logo: fundsImages.australianUnity,
    benefits: {
      'General Dental': true,
      'Optical': false,
      'Physiotherapy': true,
      'Chiropractic': true,
      'Orthodontic': false,
      'Glucose Monitor': false,
      'Speech Therapy': true,
    }
  },
  {
    name: 'Security Essentials',
    price: 286,
    logo: fundsImages.nib,
    benefits: {
      'General Dental': false,
      'Optical': true,
      'Physiotherapy': true,
      'Chiropractic': false,
      'Orthodontic': true,
      'Glucose Monitor': false,
      'Speech Therapy': true,
    }
  },
];

class SearchResults extends Component {
  render() {
    return (
      <div className='search-results'>
        <div className='flash'>
          <h5>Thank you Jake!</h5>
        </div>

        <div className='search-results-wrapper'>

          <div className='summary'>
            <CardPanel>
              <h3 className="top">Summary</h3>
              <ul>
                <li><Icon>person</Icon><span>Individual</span></li>
                <li><Icon>add_location</Icon> Location</li>
                <li><Icon>local_hospital</Icon> Hospital mid level & extras top level</li>
                <li>    ${} excess</li>
              </ul>
            </CardPanel>
            <CardPanel>
              <p>Choose your payment frequency.</p>
              <ul>
                <Button>Monthly</Button>
                <Button>Fortnightly</Button>
                <Button>Weekly</Button>
              </ul>
            </CardPanel>
          </div>

          <div className='results row'>
            {results.map(policy => (
              <PolicyStub
                key={policy.name}
                policy={policy}
              />
              ))}
          </div>
        </div>

        <div className='charities center-align'>
          <Link to='/checkout' className='btn waves-effect waves-light blue-grey darken-1'>
            Checkout
          </Link>
          <div className='image-strip'>
            {
              Object.keys(foundationImages).map(function (index) {
                return (
                  <img key={index} src={foundationImages[index]} className="foundation-logo" alt="foundation-logo" height="100px" />
                );
              }, this)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
