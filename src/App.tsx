import React, { useState } from 'react';
import './style.css';
import Bapp from './Bapp';

export default function App() {
  const [values, setValue] = useState({
    txtname: '',
  });
  const [point, SetPoint] = useState('');
  var passvalue = 'intial';
  const entervalue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue({ ...values, [name]: value });
  };
  const submitData = (e) => {
    e.preventDefault();
    const alldata = { ...values };
    //console.log('values of submit data is' + JSON.stringify(alldata));
    passvalue = values.txtname;
    console.log('value of pass data is' + passvalue);
    SetPoint(passvalue);
    //these alldata need to [aas into store
  };
  return (
    <div>
      <h1>One component</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>
        <input
          type="text"
          value={values.txtname}
          onChange={entervalue}
          name="txtname"
        />
      </p>
      <p>
        <input type="submit" onClick={submitData} />
      </p>
      <p>
        <Bapp name={point} />
      </p>
    </div>
  );
}
