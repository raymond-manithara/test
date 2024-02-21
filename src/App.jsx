import { useState } from 'react'
import './App.css'

function App() {
  const [forms, setForms] = useState([{
    name: '',
    email: '',
    phone: '',
    image: ''
  }]);
  const [errors,setErrors] = useState([{
    name:false,
    email: false,
    phone: false,
    image:false
  }]);
  const onChange = (index, event) => {
    const { name, value } = event.target;
    setForms(prev=>[...prev.slice(0, index), {...prev[index],[name]:value}, ...prev.slice(index + 1)])
  }
  const removeForm = (index)=>{
    setForms(prev=>prev.filter((_,i)=>i!=index))
  }
  return (
    <>
      {forms.map((form, i) => {
        return <div key={i}>
          <button onClick={i<forms.length-1?()=>{
            removeForm(i);
          }:() => {
            setForms(prev => [...prev,{
              name: '',
              email: '',
              phone: '', 
              image: ''
            }]);
            setErrors(prev=>[...prev,{
              name:false,
              email: false,
              phone: false,
              image:false
            }]);
          }}>{i<forms.length-1?`-`:`+`}</button>
          <input type='text' style={errors[i].name?{border: "1px solid red"}:{}} name="name" value={form.name} onChange={(e) => {
            onChange(i, e);
          }} />
          <input type='text' style={errors[i].email?{border: "1px solid red"}:{}} name="email" value={form.email} onChange={(e) => {
            onChange(i, e);
          }} />
          <input type='text' style={errors[i].phone?{border: "1px solid red"}:{}} name="phone" value={form.phone} onChange={(e) => {
            onChange(i, e);
          }} />
        </div>
      })}
      <button onClick={()=>{
        let _errors = forms.map(form=>{
          const _formObject = {};
          Object.keys(form).forEach(key=>{
            console.log(form[key]);
            _formObject[key] = form[key]==""
          })
          return _formObject;
        });
        console.log(_errors);
        setErrors(_errors)
    }
      }>Submit</button>
    </>
  )
}

export default App
