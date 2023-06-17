import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Community from './pages/Community';
import Main from './pages/Main';
import JoinPage from './pages/member/JoinPage';
import LoginPage from './pages/member/LoginPage';
import MoviePostContainer from './container/MoviePostContainer';
import MoviePostDetail from './container/MoviePostDetail';
import './App.css';
import FindId from './pages/member/FindId';
import FindPass from './pages/member/FindPass';
import RecomendPostContainer from './container/RecomendPostContainer';
import WriteText from './pages/WriteText';
import Editpass from './pages/member/Editpass';
import DetailView from './pages/DetailView';
import YetMovieCon from './container/YetMovieCon';
import MonthRecoContainer from './container/MonthRecoContainer';
import Notice from './pages/Notice';
import GenreChContainer from './container/GenreChContainer';
import SearchContainer from './container/SearchContainer';
import WriteMovie from './pages/WriteMovie';
import Review from './pages/Review';
import EditDetailView from './pages/EditDetailView';
import NoticeDetailView from './pages/NoticeDetailView';
import EditNotice from './pages/EditNotice';
import WriteNotice from './pages/WriteNotice';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App" >
      <div>
      <Helmet>
        <title>Movie-app</title>
      </Helmet>
      {/* Le reste du code de votre composant */}
    </div>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/join' element={<JoinPage/>}/>
        <Route path='/latest' element={<MoviePostContainer/>}/>
        <Route path='/yet' element={<YetMovieCon/>}/>
        <Route path='/recomend' element={<RecomendPostContainer/>}/>
        <Route path='/month' element={<MonthRecoContainer/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/detail/:no' element={<MoviePostDetail/>}/>
        <Route path='/free' element={<Community/>}/>
        <Route path='/write' element={<WriteText/>}/>
        <Route path='/writenotice' element={<WriteNotice/>}/>
        <Route path='/findid' element={<FindId/>}/>
        <Route path='/findpass' element={<FindPass/>}/>
        <Route path='/editpass' element={<Editpass/>}/>
        <Route path='/genrepage/:genrechange' element={<GenreChContainer/>}/>
        <Route path='/editpass' element={<Editpass/>}/>
        <Route path='/detailfree/:no' element={<DetailView/>}/>
        <Route path='/notice' element={<Notice/>}/>
        <Route path='/editnotice/:no/:title/:name/:desc/:date' element={<EditNotice/>}/>
        <Route path='/noticefree/:no' element={<NoticeDetailView/>}/>
        <Route path='/searchpage/:name/:value' element={<SearchContainer/>}/>
        <Route path='/movieupdate' element={<WriteMovie/>}/>
        <Route path="/test" element={<Review />} />
        <Route path="/editText/:no/:title/:name/:desc/:date" element={<EditDetailView />} />
      </Routes>
    </div>
  );
}

export default App;
