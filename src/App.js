import React from 'react';
import './App.css';

function ChurnEvaluationForm() {
  const [formData, setFormData] = React.useState({
    yearsInBusiness: '',
    revenueSize: '',
    industryType: '',
    businessModel: '',
    companySize: '',
    averageContractLength: '',
    customerLifetimeValue: '',
    customerAcquisitionCost: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you would typically send the data to a server or process it
  };

  const formStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginTop: '4px',
    marginBottom: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '4px',
    fontWeight: 'bold',
    color: 'black',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{textAlign: 'center', color: '#333'}}>Churn Rate Evaluation Factors</h2>
      
      <div>
        <label htmlFor="yearsInBusiness" style={labelStyle}>How long have you been in business?</label>
        <input
          type="number"
          id="yearsInBusiness"
          name="yearsInBusiness"
          value={formData.yearsInBusiness}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="revenueSize" style={labelStyle}>Revenue size</label>
        <input
          type="number"
          id="revenueSize"
          name="revenueSize"
          value={formData.revenueSize}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="industryType" style={labelStyle}>Industry type</label>
        <input
          type="text"
          id="industryType"
          name="industryType"
          value={formData.industryType}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="businessModel" style={labelStyle}>Business model</label>
        <select
          id="businessModel"
          name="businessModel"
          value={formData.businessModel}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select a model</option>
          <option value="B2B">B2B</option>
          <option value="B2C">B2C</option>
          <option value="Subscription">Subscription</option>
        </select>
      </div>

      <div>
        <label htmlFor="companySize" style={labelStyle}>Company size (number of employees)</label>
        <input
          type="number"
          id="companySize"
          name="companySize"
          value={formData.companySize}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="averageContractLength" style={labelStyle}>Average contract length (months)</label>
        <input
          type="number"
          id="averageContractLength"
          name="averageContractLength"
          value={formData.averageContractLength}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="customerLifetimeValue" style={labelStyle}>Customer Lifetime Value (CLV)</label>
        <input
          type="number"
          id="customerLifetimeValue"
          name="customerLifetimeValue"
          value={formData.customerLifetimeValue}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="customerAcquisitionCost" style={labelStyle}>Customer Acquisition Cost (CAC)</label>
        <input
          type="number"
          id="customerAcquisitionCost"
          name="customerAcquisitionCost"
          value={formData.customerAcquisitionCost}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
}

function App() {
  return (
    <div className="App" style={{padding: '20px', backgroundColor: '#2c3e50', minHeight: '100vh'}}>
      <header className="App-header">
        <h1 style={{textAlign: 'center', color: 'white', marginBottom: '30px'}}>Customer Retention Consultancy</h1>
        <ChurnEvaluationForm />
      </header>
    </div>
  );
}

export default App;
