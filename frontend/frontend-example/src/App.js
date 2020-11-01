import axios from 'axios';
import './App.css';

function App() {

  const onSubmitHandler=async (e)=>{
    e.preventDefault();

    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    console.log(e);
    let formData=new FormData();
    formData.append('firstName', e.target.firstName.value);
    formData.append('lastName', e.target.lastName.value);
    formData.append('avatar', e.target.avatar.files[0]);
    
    await axios({
      method: 'post',
      url: 'https://localhost:44357/api/persons',
      data: formData
    }).then(function(response){
        console.log('this is response');
    }).catch(function(error){
      console.log('this is error!');
      console.log(error);
    });

  };


  return (
    <div className="App">
      <header>
        Przykład formularza
      </header>
      <main>
      <form onSubmit={onSubmitHandler}>
        <label for="firstName">First name:</label>
        <input type="text" name="firstName" /><br />
        <label for="lastName">Last name:</label>
        <input type="text" name="lastName" /><br />
        <label for="avatar">Avatar</label>
        <input type="file" name="avatar" />
        <br /><br />
        <button type="submit">Dodaj</button>
      </form>
      </main>
    </div>
  );
}

export default App;
