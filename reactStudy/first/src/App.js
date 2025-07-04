import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  console.log('props', props.title);
  
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

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id: 1, title: 'html', body: 'html is...'},
    {id: 2, title: 'css', body: 'css is...'},
    {id: 3, title: 'js', body: 'js is...'}
  ]

  let content = null;
  let title, body = null;

  if (mode === 'WELCOME') {
    content = <Article title="WELCOME" body="Hello, Web"></Article>
  } else if(mode === 'READ') {
    content = <Article title="READ" body="Hi, React"></Article>
  }

  for(let i=0; i<topics.length; i++) {
    if(topics[i].id === id) {
      title = topics[i].title;
      body = topics[i].body;
      console.log(title, body);
      
      content = <Article title={title} body={body}></Article>
    }
  }

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        setId(id);
        setMode(title);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
