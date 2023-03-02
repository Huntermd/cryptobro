
import './App.css';


let valueA = 'Hello world';
let valueB = 'Now';

let students = ['Jonathon', 'Hunter', 'Caleb'];

let students_detail = {
  firstName: 'Jonathon',
  lastName: 'Pinson',
  grade: 'C-',
};

let all_students = [{
  firstName: 'Jonathon',
  lastName: 'Pinson',
  grade: 'C-',
},
{firstName: 'Hunter',
lastName: 'Davis',
grade: 'C-',

},
{
  firstName: 'Caleb',
  lastName: 'Johnson',
  grade: 'C-',

}]

function App() {
  return (    
    <div className="App">
     {all_students.map((student) => {
      return (<p>{student.firstName} {student.lastName} {student.grade}</p>)
     })}
    </div>
  );
}

export default App;
