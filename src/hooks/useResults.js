import { useEffect, useState } from 'react';
import _ from 'lodash';

export default () => {
  const [results, setResults] = useState([]);
  const [resultsSubject, setResultsSubject] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {

    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  const searchApiWithoutParameters = async () => {
    try {
      const event = require('./db.json').events;
      console.log("Here searchApiWithoutParameters " + `${event.length}`);
      setResults(event);
      setResultsSubject(event);
    } 
    catch (err) {
      setErrorMessage('Something went wrong');
    }

  }
  const searchApiWithSubject = async searchTerm => {
    try {     
      const events = require('./db.json').events;     
      const data = _.filter(events, event => {
        return containsSubject(event, searchTerm)
      }) 
      console.log("Here searchApiWithSubject " + `${data.length}`);
      setResultsSubject(data);
    } 
    catch (err) {
      setErrorMessage('Something went wrong');
    }
  }

  const searchApiWithParameters = async searchTerm => {
    try {
      const events = require('./db.json').events;
      const data = _.filter(events, event => {
        return contains(event, searchTerm)
      })
      console.log("Here searchApiWithParameters " + `${data.length}`);
      setResults(data);
    } 
    catch (err) {
      setErrorMessage('Something went wrong');
    }
  }
  const searchApiWithId = async searchTerm => {
    try {
      const events = require('./db.json').events;
      const data = _.filter(events, event => {
        return event.number === searchTerm
      })
      console.log("Here searchApiWithId " + `${data.length}`);
      setResults(data);
    } 
    catch (err) {
      setErrorMessage('Something went wrong');
    }
  }
  const handleSearch = _.debounce((text) => {
    console.log("Here handleSearch " + `${text}`);
    const formartQuery = text;
    console.log(text)
    const data = _.filter(results, event => {
      return contains(event, formartQuery)
    })
    console.log(data)
    setResults(data);
  }, 0);

  const contains = (event, query) => {
    const { Stanza1 } = event;
    if (Stanza1.includes(query)) {
      return true;
    }

    return false;
  };
  const containsSubject = (event, query) => {
    const { subject } = event;
    if (subject.includes(query)) {
      return true;
    }

    return false;
  };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  useEffect(() => {
    // console.log('calling..')
    // searchApiWithParameters('എപ്പോഴും');
    searchApiWithoutParameters();
  }, []);

  return [searchApiWithParameters, searchApiWithSubject, searchApiWithoutParameters, searchApiWithId, results, resultsSubject, errorMessage];
};
