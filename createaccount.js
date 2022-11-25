import { Formik } from 'formik';

function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [disabled, setDisabled] = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),5000);
        return false;
      }
      return true;
  }

function checkPass (){
  var psw = document.getElementById('password');
  if (psw.value.length < 8){
    setStatus('Password Must Include 8 Characters');
    setTimeout(() => setStatus(''),5000);
    return;
  }else{
    
    return true;
  }
  
}

	//Determine if to set the button disabled or not
	if (!name & !email & !password) {
		//Check if button should be enabled
		if (disabled) {
			console.log(disabled);
			console.log(`button disabled ${disabled}`);
		} else {
			setDisabled(true);
			console.log(`button disabled ${disabled}`);
		}
	} else {
		if (disabled) {
			setDisabled(false);
			console.log(`button disabled ${disabled}`);
		} else {
			console.log(`button disabled ${disabled}`);
		}
	}

 function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'Please Enter Name'))     return;
    if (!validate(email,    'Please Enter Valid Email'))    return;
    if (!validate (password, 'Password Must Include 8 Characters')) return;
    if (!checkPass(password)) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <div className="row justify-content-center">
      <Card
      txtcolor="light"
      bgcolor="primary"
      header= "Create Account"
      status={status}
      body={show ? (  
              <>
                <div className="justify-content-center">	
                  <img src="bank.png" className="mx-auto d-block pb-3" alt="Responsive image" width="40%" />
                </div>
                <label>Name</label>
                <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                <label>Email Address</label>
                <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                <label>Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
                {disabled ? (
                <>
                <button type="submit" disabled="disabled" className="btn btn-warning w-100 text-white text-uppercase"  onClick={handleCreate}>Create Account</button>
                </> ) :( <>
                <button type="submit" className="btn btn-warning w-100 text-white text-uppercase "  onClick={handleCreate}>Create Account</button>
              </> 


              )}
              
              </>
            ):(
              <>
                <div className="justify-content-center">	
                  <img src="bank.png" className="mx-auto d-block pb-3" alt="Responsive image" width="40%" />
                </div>
                  <h6 className='text-center py-3 text-uppercase'>Account Created! </h6>
                  <a href="#Login" class="btnDeposit mb-3 btn btn-secondary w-100 font-weight-bold">Please Login</a> 
                  <button type="submit" className="btn btn-dark w-100 font-weight-bold text-white"  onClick={clearForm}>Add Another Account</button>
              
              </>
            )}
    />
    </div>
    
  )
}