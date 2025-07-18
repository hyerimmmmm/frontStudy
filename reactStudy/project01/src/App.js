import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  return(
    <header>
      <h1>
        <a href="/" onClick={(event) => {
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  )
}

function Nav(props) {
  const lis = []
  for (let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/' + t.id} onClick={(event) => {
      event.preventDefault();
      props.onChangeMode(t.id);
    }}>{t.title}</a></li>);
  }
  return(
    <nav>
      <ol>{lis}</ol>
    </nav>
  )
}

function Article(props) {
  return(
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type='text' name="title" placeholder='title'></input></p>
        <p><textarea type="text" name="body" placeholder='body'></textarea></p>
        <p><input type='submit' value="create"></input></p>
      </form>
    </article>
  );
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input type='text' name="title" placeholder='title' value={title} onChange={(event) => {
          setTitle(event.target.value);
        }}></input></p>
        <p><textarea type="text" name="body" placeholder='body' value={body} onChange={(event) => {
          setBody(event.target.value);
        }}></textarea></p>
        <p><input type='submit' value="update"></input></p>
      </form>
    </article>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id: 1, title: 'html', body: 'html is...'},
    {id: 2, title: 'css', body: 'css is...'},
    {id: 3, title: 'js', body: 'js is...'}
  ]);
  let content = null;
  let title = null, body = null;
  let contextControl = null;

  if (mode === 'WELCOME') {
    content = <Article title="WELCOME" body="Hello, Web"></Article>;
  } else if(mode === 'READ') {
      content = <Article title="READ" body="Hi, React"></Article>;
      for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
        
        content = <Article title={title} body={body}></Article>
      }
    }
    contextControl = <>
      <li><a href={"/update/" + id} onClick={(event) => {
        event.preventDefault();
        setMode("UPDATE");
      }}>Update</a></li>
      <li><input type="button" value="Delete" onClick={() => {
        let newTopics = [];
        for (let i = 0; i < topics.length; i++) {
          if(topics[i].id != id) {
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode("WELCOME");
      }}></input></li>
    </>
  } else if(mode === 'CREATE') {
    content = <Create onCreate={(title, body) => {
      const newTopic = {id: nextId, title: title, body: body};
      setTopics([...topics, newTopic]);
      setMode("READ");
      setId(nextId);
      setNextId(nextId + 1);
    }}></Create>
  } else if(mode === "UPDATE") {
      for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) => {
      let updateTopic = {id: id, title: title, body: body}
      let newTopics = [...topics]
      for (let i = 0; i < newTopics.length; i++) {
        if(newTopics[i].id === id) {
          updateTopic = 
          newTopics[i] = updateTopic;
          break;
        }
      }
      setTopics(newTopics);
    }}></Update>
  }

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        setId(id);
        setMode("READ");
      }}></Nav>
      {content}
      <ul>
        <li><a href="/create" onClick={(event) => {
          event.preventDefault();
          setMode("CREATE");
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
