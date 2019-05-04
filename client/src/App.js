import React from 'react';

import { DatePicker } from '@progress/kendo-dateinputs-react-wrapper';
import { Button } from '@progress/kendo-buttons-react-wrapper';

import '@progress/kendo-ui';
import '@progress/kendo-theme-bootstrap';

function App() {
  return (
    <div className="App">
    <h1>Application works...</h1>
      <DatePicker
      value="pick a date"
      min = { new Date(2019, 1, 1) }
      max = { new Date(2019, 10, 10) }
      format="yyyy/MM/dd"
      />
      <Button icon="folder" primary={true}>Test KendoUI</Button>
    </div>
  );
}

export default App;
