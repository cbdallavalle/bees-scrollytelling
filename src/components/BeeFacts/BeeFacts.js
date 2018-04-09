import React from 'react';
import './BeeFacts.css';

const beeFactsQuestion = () => {
  return (
    <form className='bee-questions'>
      <h2>Who's actually doing the pollinating?</h2>
      <label htmlFor='help' className='question-descr'>How many species of wild bees are there in North America?</label>
      <input type='text' id='help' placeholder="Enter a number 0 or above"/>
      <button type="submit">Guess</button>
    </form>
  )
}

const beeFactsArticle = () => {
  return (
    <article className="bee-article">
      <h1>There are more than 4000 types of wild bees,</h1>
      <h1>you probably know:</h1>
      <div>
        <h2>The Honey Bee</h2>
        <div className="honey-bee bee-images">
        </div>
      </div>
      <div>
        <div className="bee-box bee-images">
        </div>
        <h3>They're domesticated</h3>
      </div>
    </article>
  )
}

export const BeeFacts = () => {
  return (
    <div >
      { beeFactsQuestion() }
      { beeFactsArticle() }
    </div>
  )
}

        // <ul>The Honey Bee
        //   <li>lives in colonies</li>
        //   <li>domesticated</li>
        //   <li>can be transported via automobile</li>
        // </ul>
        // <ul>The Wild Bee
        //   <li>solitary</li>
        //   <li>diverse</li>
        //   <li>local pollination</li>
        // </ul>