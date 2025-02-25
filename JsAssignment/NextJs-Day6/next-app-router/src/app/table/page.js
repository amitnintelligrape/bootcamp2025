const Table = () => {
const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    fontSize: "1rem",
    textAlign: "left",
  };
  
  const thStyle = {
    background: "#007bff",
    color: "white",
    padding: "12px",
    border: "1px solid #ddd",
  };
  
  const tdStyle = {
    padding: "12px",
    border: "1px solid #ddd",
  };
  
  const trStyle = {
    background: "#f8f9fa",
  };

  return(
   <>
   <table className="w-full border border-gray-300 rounded-lg" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr style={trStyle}>
                <td style={tdStyle}>1</td>
                <td style={tdStyle}>Test User</td>
                <td style={tdStyle}>Lorem ipsum</td>
                <td style={tdStyle}>Hello</td>
                <td style={tdStyle}>99</td>
            </tr>
            <tr>
                <td style={tdStyle}>2</td>
                <td style={tdStyle}>Test User</td>
                <td style={tdStyle}>Lorem ipsum</td>
                <td style={tdStyle}>Hello</td>
                <td style={tdStyle}>99</td>
            </tr>
            <tr style={trStyle}>
                <td style={tdStyle}>3</td>
                <td style={tdStyle}>Test User</td>
                <td style={tdStyle}>Lorem ipsum</td>
                <td style={tdStyle}>Hello</td>
                <td style={tdStyle}>99</td>
            </tr>
            <tr>
                <td style={tdStyle}>2</td>
                <td style={tdStyle}>Test User</td>
                <td style={tdStyle}>Lorem ipsum</td>
                <td style={tdStyle}>Hello</td>
                <td style={tdStyle}>99</td>
            </tr>
            <tr style={trStyle}>
                <td style={tdStyle}>3</td>
                <td style={tdStyle}>Test User</td>
                <td style={tdStyle}>Lorem ipsum</td>
                <td style={tdStyle}>Hello</td>
                <td style={tdStyle}>99</td>
            </tr>
            <tr>
                <td style={tdStyle}>2</td>
                <td style={tdStyle}>Test User</td>
                <td style={tdStyle}>Lorem ipsum</td>
                <td style={tdStyle}>Hello</td>
                <td style={tdStyle}>99</td>
            </tr>
            <tr style={trStyle}>
                <td style={tdStyle}>3</td>
                <td style={tdStyle}>Test User</td>
                <td style={tdStyle}>Lorem ipsum</td>
                <td style={tdStyle}>Hello</td>
                <td style={tdStyle}>99</td>
            </tr>
        </tbody>
    </table>
   </> 
  )
  

}

export default Table;