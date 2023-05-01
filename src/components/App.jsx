import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickFeedback = (e) => {
    const value = e.toLowerCase();
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
    
  countPositiveFeedbackPercentage  = () => {
    const totalFeedback = this.countTotalFeedback();
    return Math.round(this.state.good / (totalFeedback / 100));
  }

  render() {
    const { good, neutral, bad, visible } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className='container'>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions 
          options={Object.keys(this.state)}
          // options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={this.handleClickFeedback}
          />
        </Section>
        <Section title="Statistics">
            { countTotalFeedback ?
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
              />
             : 
              <Notification message="There is no feedback" />
            }
        </Section>        
      </div>
    );
  }
}
