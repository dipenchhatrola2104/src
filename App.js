
import './App.css';
import Slot from './Slot';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const timetable={
      timings : [
        {"text":"7:30 to 8:25","color":"red","backgroundColor":"yellow","faculty":"first lec"},
        {"text":"8:25 to 9:20","color":"white","backgroundColor":"green","faculty":"second lec"},
        {"text":"9:50 to 10:45","color":"black","backgroundColor":"gray","faculty":"third lec"},
        {"text":"10:45 to 11:40","color":"silver","backgroundColor":"brown","faculty":"forth lec"},
        {"text":"11:50 to 12:45","color":"brown","backgroundColor":"green","faculty":"fifth lec"},
        {"text":"12:45 to 1:40","color":"green","backgroundColor":"brown","faculty":"sixth lec"},        
      ],
      Monday : [
        {"text": "PYTHON", "color": "red", "backgroundColor": "yellow", "faculty": "kxitij sir"},
        {"text": "LARAVEL", "color": "white", "backgroundColor": "green", "faculty": "prakash sir"},
        {"text": "SOODAM", "color": "black", "backgroundColor": "gray", "faculty": "disha mam"},
        {"text": "IOT", "color": "silver", "backgroundColor": "brown", "faculty": "keyur sir"},
        {"text": "PYTHON LAB", "color": "brown", "backgroundColor": "green", "faculty": "kxitij sir"},
        {"text": "PYTHON LAB", "color": "green", "backgroundColor": "brown", "faculty": "kxitij sir"},
      ],
      Tuesday : [
        {"text":"LARAVEL","color":"red","backgroundColor":"yellow","faculty":"prakash sir"},
        {"text":"PYTHON","color":"white","backgroundColor":"green","faculty":"kxitij sir"},
        {"text":"LARAVEL LAB","color":"black","backgroundColor":"gray","faculty":"prakash sir"},
        {"text":"LARAVEL LAB","color":"silver","backgroundColor":"brown","faculty":"prakash sir"},
        {"text":"SOODAM","color":"brown","backgroundColor":"green","faculty":"disha mam"},
        {"text":"NO LECTURE","color":"green","backgroundColor":"brown","faculty":"--"},
      ],
      Wednesday : [
        {"text":"LARAVEL LAB","color":"red","backgroundColor":"yellow","faculty":"prakash sir"},
        {"text":"LARAVEL LAB","color":"white","backgroundColor":"green","faculty":"prakash sir"},
        {"text":"PYTHON LAB","color":"black","backgroundColor":"gray","faculty":"kxitij sir"},
        {"text":"IOT","color":"silver","backgroundColor":"brown","faculty":"keyur sir"},
        {"text":"PROJECT LAB","color":"brown","backgroundColor":"green","faculty":"prakash sir"},
        {"text":"PROJECT LAB","color":"green","backgroundColor":"brown","faculty":"prakash sir"},
      ],
      Thurday : [
        {"text":"NO LECTURE","color":"red","backgroundColor":"yellow","faculty":"--"},
        {"text":"LARAVEL","color":"white","backgroundColor":"green","faculty":"prakash sir"},
        {"text":"uhv","color":"black","backgroundColor":"gray","faculty":"---"},
        {"text":"IOT","color":"silver","backgroundColor":"brown","faculty":"keyur sir"},
        {"text":"SOODAM","color":"brown","backgroundColor":"green","faculty":"disha mam"},
        {"text":"NO LECTURE","color":"green","backgroundColor":"brown","faculty":"--"},
      ],
      Friday : [
        {"text":"PYTHON LAB","color":"red","backgroundColor":"yellow","faculty":"kxitij sir"},
        {"text":"PYTHON LAB","color":"white","backgroundColor":"green","faculty":"kxitij sir"},
        {"text":"IOT LAB","color":"black","backgroundColor":"gray","faculty":"keyur sir"},
        {"text":"IOT LAB","color":"silver","backgroundColor":"brown","faculty":"keyur sir"},
        {"text":"SOODAM","color":"brown","backgroundColor":"green","faculty":"disha mam"},
        {"text":"LARAVEL","color":"green","backgroundColor":"brown","faculty":"prakash sir"},
      ],
    }
  return (
    <div className='App'>
      <div className="container-fluid mt-3">
        <h3>TIME-TABLE</h3>
        <div className="row mt-3">
          <div className="col-md-2">
            {
                timetable.timings.map(function(i,a){                
                return <Slot key={a} text={i.text} backgroundColor={i.backgroundColor} color={i.color} faculty={i.faculty}  /> 
                })
            }
          </div>
          <div className="col-md-2">
            {
                timetable.Monday.map(function(i,a){                
                return <Slot key={a} text={i.text} backgroundColor={i.backgroundColor} color={i.color} faculty={i.faculty}  resource={i.resource} /> 
                })
            }
          </div>
          <div className="col-md-2">
            {
                timetable.Tuesday.map(function(i,a){                
                return <Slot key={a} text={i.text} backgroundColor={i.backgroundColor} color={i.color} faculty={i.faculty}  /> 
                })
            }
          </div>
          <div className="col-md-2">
            {
                timetable.Wednesday.map(function(i,a){                
                return <Slot key={a} text={i.text} backgroundColor={i.backgroundColor} color={i.color} faculty={i.faculty}  /> 
                })
            }
          </div>
          <div className="col-md-2">
            {
                timetable.Thurday.map(function(i,a){                
                return <Slot key={a} text={i.text} backgroundColor={i.backgroundColor} color={i.color} faculty={i.faculty}  /> 
                })
            }
          </div>
          <div className="col-md-2">
            {
                timetable.Friday.map(function(i,a){                
                return <Slot key={a} text={i.text} backgroundColor={i.backgroundColor} color={i.color} faculty={i.faculty}  /> 
                })
            }
          </div>
        </div>  
      </div>      
    </div>
  );
}

export default App;
