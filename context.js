const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
                 
 
      
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{minWidth: "50%", maxWidth:"80%"}}>
        <div className="card-header text-center text-uppercase">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.text1}
          <br/>
          {props.body}
          {props.status && (<div id='createStatus' className="py-3 text-center">{props.status}</div>)}
        </div>
      </div>      
    );    
  }