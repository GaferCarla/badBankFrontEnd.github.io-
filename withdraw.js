function Withdraw() {
	const [show, setShow]                   = React.useState(true);
	const [disabled, setDisabled]           = React.useState(true);
	const [status, setStatus]   	        = React.useState('');
	const [currentuser, setCurrentuser]     = React.useState('');
	const [currentemail, setCurrentemail]   = React.useState('');
	const [currentpass, setCurrentpass]     = React.useState('');
	const [balance, setBalance]				= React.useState('');
	const [withdraw, setWithdraw]			= React.useState('');
	const ctx = React.useContext(UserContext);
	
	//Check if any user is currently logged in
	if (show) {
		for (const {name, email, password, balance, loggedin} of ctx.users) {
			console.log(`Current User: ${name}, Logged in: ${loggedin}`);
			if (loggedin) {
				setShow(false);
				setCurrentuser(name);
				setCurrentemail(email);
				setCurrentpass(password);
				setBalance(balance);
				console.log(`${name} is logged in`)
				return;
			}
		}
	}
	
	//Determine if to set the button disabled or not
	if (!withdraw) {
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
	// Validates that it is a number and you will not overdraft
	function withdrawMoney() {
		if (!isNaN(withdraw) && withdraw > 0 && withdraw <= balance){
			let newBalance = Number(balance) - Number(withdraw);
			console.log(Number(newBalance));
      setBalance(newBalance);
      setStatus(`$${withdraw} was successfully withdrawn from your account`);
      setDeposit('');
      
			let tracker = false;
			
			
			//Check if the username or passwords match anyone is the database
			for (const {email, password, balance} of ctx.users) {
				console.log(`Checking ${currentemail} ${currentpass} against ${email} ${password}`);
				if (currentemail == email && currentpass == password) {
					console.log(`${currentemail} ${currentpass} is correct`);
					for (var i=0, length=ctx.users.length; i<length; i++) {
						if (ctx.users[i].email == currentemail) {
							console.log(`Checking ${email}`)
							ctx.users[i].balance = Number(newBalance);
							var datetime = `Withdrew $${withdraw} on ${newDate.today()}`;
							ctx.users[i].submissions.push(datetime);
							tracker = true;
						}
					}
				}
			}
			
			//Making all changes to state
			if (tracker) {
				setStatus(`$${withdraw} successfully withdrawn from account`);
				setTimeout(() => setStatus(''), 5000);
				setWithdraw('');
				setBalance(Number(newBalance))
			}
		} else if (withdraw > balance) {
			setStatus(`Error: Withdraw amount must be less than $${balance}. Please try again.`);
			setWithdraw('');
			setTimeout(() => setStatus(''), 5000);
		} else if (!isNaN(withdraw)) {
			setStatus('Error: Withdraw amount must be greater than $0.00. Please try again.');
			setWithdraw('');
			setTimeout(() => setStatus(''), 5000);
		} else {
			setStatus('Error: Withdraw amount must be a number. Please try again.');
			setWithdraw('');
			setTimeout(() => setStatus(''), 5000);
		}
		return;
	}
	
	return (
		<div className="row justify-content-center">
			<Card
			bgcolor="info"	
			txtcolor="light"
			header = "Withdraw"
			status = {status}
			body = {show ? (
        	<>
				<div className="justify-content-center">	
					<img src="bank.png" className="mx-auto d-block pb-3" alt="Responsive image" width="40%" />
				</div>

				Please <a href='#/login/' className="btnDeposit" data-toggle="tooltip" title="Login to your account">Login</a> to deposit funds and check account balance. <br/><br/><br/>
				Don't have an account? Create an account <a href="#/createaccount/" className="btnDeposit" data-toggle="tooltip" title="Create a new account"> here</a>. 
				</>
			):(
				<>
				Current Balance: ${balance.toFixed(2)}
				
				<label className="pt-4">Withdraw Amount:</label>
				<input type="input" className="form-control" id="deposit" placeholder="$0.00" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
				{disabled ? (
					<>
					<button type="submit" className="btn btn-warning w-100" disabled="disabled" onClick={withdrawMoney}>Withdraw</button>
					</>
				):(
					<>
         
					<button type="submit" className="btn btn-warning w-100" onClick={withdrawMoney}>Withdraw</button><br/><br/>
					
						
				
					</>
				)}
				</>
			)}
		/>
		</div>

		
	)
}

