const { max } = require("lodash");

function Home(){
  return (
    <div className="row justify-content-center">
      <Card 
        
        className="text-white"
        bgcolor="dark"
        header= "Welcome to BadBank"
        title={(<img src="bank.png" className="mx-auto d-block" alt="Responsive image" width="75%"/>)}
        body={<p className="text-center">
        To get started press on the  <a href="#Login" class="btnDeposit">Create Account</a> tab.
        Please note, in order to enjoy all the features do not refresh the page, doing so will erase all data collected in this session."
      
        
        </p>}
        
        
      /> 
    </div>

   
  );  
}
