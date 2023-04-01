import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video
          likes={100}
          messages={200}
          shares ={300}
          name='Paulo'
          description='Brecker o goleiro'
          music='Musica épica'
          url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4'
        />
        <Video
          likes={0}
          messages={0}
          shares ={0}
          name='João'
          description='Gato olhando dono'
          music='Musica com Voz'
          url='https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/bird.mp4?alt=media&token=38b50871-393f-4fa4-9951-c6fc08af7e9e'
        />
        <Video
          likes={111}
          messages={222}
          shares ={333}
          name='Pedro'
          description='Gato pulando'
          music='Musica Qualquer'
          url='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4'
        />
        <Video
          likes={200}
          messages={50}
          shares ={10}
          name='Lucas'
          description='Gato'
          music='Musica'
          url='https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/bird.mp4?alt=media&token=38b50871-393f-4fa4-9951-c6fc08af7e9e '
        />
      </div>
    </div>
  );
}

export default App;
