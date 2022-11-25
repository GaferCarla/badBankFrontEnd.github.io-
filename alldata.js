function AllData(){
  const ctx = React.useContext(UserContext);
  return (
  
   <>
              
  {ctx.users.map((ctx,i) => <Card 
    key={i}        
    bgcolor="warning"
    txtcolor="black"
    header={ctx.name}
    text={
      "Email: " + ctx.email }
    text1={
      "Password: " +  ctx.password
   }
    body={"Balance: $" + ctx.balance}/>
       
  )} 
  </>
  );
}
